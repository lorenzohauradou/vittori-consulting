const isDev = process.env.NODE_ENV === 'development'

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
            
            console.log('Usando API REST di Browserless...')
            
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
                        width: 1920,
                        height: 1080,
                    },
                    gotoOptions: {
                        waitUntil: 'networkidle0',
                        timeout: 60000,
                    },
                }),
            })

            if (!screenshotResponse.ok) {
                const errorText = await screenshotResponse.text()
                console.error('Browserless API error:', errorText)
                throw new Error(`Browserless API error: ${screenshotResponse.status}`)
            }

            const screenshotBuffer = await screenshotResponse.arrayBuffer()
            const screenshotBase64 = Buffer.from(screenshotBuffer).toString('base64')

            const contentResponse = await fetch(`https://production-sfo.browserless.io/content?token=${BROWSERLESS_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: url,
                    gotoOptions: {
                        waitUntil: 'networkidle0',
                        timeout: 60000,
                    },
                }),
            })

            if (!contentResponse.ok) {
                console.error('Content API error:', contentResponse.status)
                return {
                    title: '',
                    textContent: '',
                    screenshotBase64
                }
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
                .substring(0, 4000)

            console.log('Screenshot e contenuto ottenuti con successo')
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

            const screenshotBuffer = await page.screenshot({ type: 'png' })
            const screenshotBase64 = screenshotBuffer.toString('base64')

            const pageData = await page.evaluate(() => {
                document.querySelectorAll('script, style, noscript, svg').forEach(el => el.remove())
                return {
                    title: document.title,
                    textContent: document.body.innerText.replace(/\s+/g, ' ').trim().substring(0, 4000)
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

