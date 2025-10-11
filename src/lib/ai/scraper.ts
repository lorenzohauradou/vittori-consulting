const isDev = process.env.NODE_ENV === 'development'

async function getContentOnly(url: string, apiKey: string) {
    try {
        console.log('Tentativo di ottenere solo il contenuto...')
        const contentResponse = await fetch(`https://production-sfo.browserless.io/content?token=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: url,
                gotoOptions: {
                    waitUntil: 'domcontentloaded',
                    timeout: 20000,
                },
            }),
        })

        if (!contentResponse.ok) {
            throw new Error(`Content API fallback failed: ${contentResponse.status}`)
        }

        const html = await contentResponse.text()
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
        const title = titleMatch ? titleMatch[1] : ''
        
        const textContent = html
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
            .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '')
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .substring(0, 12000)

        console.log('Contenuto ottenuto via fallback (senza screenshot)')
        return { title, textContent, screenshotBase64: '' }
    } catch (error) {
        console.error('Fallback content-only failed:', error)
        throw error
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleCookieConsent(page: any) {
    try {
        const cookieSelectors = [
            'button:has-text("Accetta")',
            'button:has-text("Accetto")',
            'button:has-text("Accept")',
            'button:has-text("Agree")',
            'button:has-text("OK")',
            'button:has-text("Consenti")',
            '[id*="accept"][id*="cookie" i]',
            '[id*="consent" i]',
            '[class*="accept"][class*="cookie" i]',
            '[class*="consent" i]',
            'button[id*="accept" i]',
            'button[class*="accept" i]',
            'a:has-text("Accetta")',
            'a:has-text("Accept")',
            '.cookie-consent button',
            '#cookie-notice button',
            '[aria-label*="Accept" i]',
            '[aria-label*="Accetta" i]',
        ]

        for (const selector of cookieSelectors) {
            try {
                const element = await page.$(selector)
                if (element) {
                    await element.click()
                    await page.waitForTimeout(1000)
                    console.log(`Cookie consent accepted with selector: ${selector}`)
                    break
                }
            } catch {
                continue
            }
        }
    } catch {
        console.log('No cookie banner found or already accepted')
    }
}

export async function scrapeAndScreenshot(url: string) {
    console.log(`Inizio scraping per: ${url}. Ambiente: ${isDev ? 'Sviluppo' : 'Produzione'}`)
    
    try {
        if (!isDev) {
            const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY
            
            if (!BROWSERLESS_API_KEY) {
                throw new Error('BROWSERLESS_API_KEY non configurata')
            }
            
            console.log('Usando Browserless /scrape endpoint (singola chiamata)...')
            
            const scrapeResponse = await fetch(`https://production-sfo.browserless.io/scrape?token=${BROWSERLESS_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: url,
                    elements: [
                        {
                            selector: 'body',
                            timeout: 20000
                        }
                    ],
                    gotoOptions: {
                        waitUntil: 'networkidle2',
                        timeout: 30000,
                    },
                }),
            })

            if (!scrapeResponse.ok) {
                const errorText = await scrapeResponse.text()
                console.error('Browserless scrape error:', errorText)
                
                if (scrapeResponse.status === 429) {
                    console.log('Rate limit raggiunto, fallback a contenuto senza screenshot...')
                    return await getContentOnly(url, BROWSERLESS_API_KEY)
                }
                
                throw new Error(`Browserless API error: ${scrapeResponse.status}`)
            }

            const scrapeData = await scrapeResponse.json()
            const html = scrapeData.data[0]?.results[0]?.html || ''
            
            const screenshotResponse = await fetch(`https://production-sfo.browserless.io/screenshot?token=${BROWSERLESS_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: url,
                    options: {
                        fullPage: true,
                        type: 'png',
                    },
                    viewport: {
                        width: 1440,
                        height: 900,
                    },
                    gotoOptions: {
                        waitUntil: 'domcontentloaded',
                        timeout: 20000,
                    },
                }),
            })

            let screenshotBase64 = ''
            if (screenshotResponse.ok) {
                const screenshotBuffer = await screenshotResponse.arrayBuffer()
                screenshotBase64 = Buffer.from(screenshotBuffer).toString('base64')
                console.log('Screenshot ottenuto con successo')
            } else {
                console.warn('Screenshot fallito, procedo solo con contenuto')
            }
            
            const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
            const title = titleMatch ? titleMatch[1] : ''
            
            const textContent = html
                .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '')
                .replace(/<[^>]+>/g, ' ')
                .replace(/\s+/g, ' ')
                .trim()
                .substring(0, 12000)

            console.log('Contenuto ottenuto con successo')
            return { title, textContent, screenshotBase64 }
        }

        let browser = null
        try {
            const { chromium } = await import('playwright')
            browser = await chromium.launch({
                headless: true,
            })

            const page = await browser.newPage({
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
                viewport: { width: 1200, height: 800 }
            })
            
            await page.goto(url, { 
                waitUntil: 'networkidle',
                timeout: 60000 
            })

            await handleCookieConsent(page)

            await page.waitForTimeout(1000)

            const screenshotBuffer = await page.screenshot({ 
                type: 'png',
                fullPage: true
            })
            const screenshotBase64 = screenshotBuffer.toString('base64')

            const pageData = await page.evaluate(() => {
                document.querySelectorAll('script, style, noscript, svg').forEach(el => el.remove())
                return {
                    title: document.title,
                    textContent: document.body.innerText.replace(/\s+/g, ' ').trim().substring(0, 12000)
                }
            })

            return { ...pageData, screenshotBase64 }
        } finally {
            if (browser) {
                await browser.close()
            }
        }

    } catch (error) {
        console.error('Scraping error:', error)
        return null
    }
}

