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
    let browser = null
    console.log(`Inizio scraping per: ${url}. Ambiente: ${isDev ? 'Sviluppo' : 'Produzione'}`)
    
    try {
        if (isDev) {
            const { chromium } = await import('playwright')
            browser = await chromium.launch({
                headless: true,
            })
        } else {
            const playwright = (await import('playwright-core')).default
            const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY
            
            if (!BROWSERLESS_API_KEY) {
                throw new Error('BROWSERLESS_API_KEY non configurata')
            }
            
            const browserWSEndpoint = `wss://production-sfo.browserless.io?token=${BROWSERLESS_API_KEY}`
            browser = await playwright.chromium.connect({ 
                wsEndpoint: browserWSEndpoint,
                timeout: 60000
            })
        }

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

    } catch (error) {
        console.error('Scraping error:', error)
        return null
    } finally {
        if (browser) {
            await browser.close()
        }
    }
}

