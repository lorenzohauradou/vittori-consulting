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
    try {
        if (isDev) {
            const { chromium } = await import('playwright')
            browser = await chromium.launch({
                headless: true,
            })
        } else {
            const chromium = (await import('@sparticuz/chromium')).default
            const playwright = (await import('playwright-core')).default
            
            await chromium.font(
                'https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf'
            )
            
            browser = await playwright.chromium.launch({
                args: chromium.args,
                executablePath: await chromium.executablePath(),
                headless: true,
            })
        }

        const page = await browser.newPage({
            viewport: {
                width: 1920,
                height: 1080
            },
            deviceScaleFactor: 2
        })
        
        await page.goto(url, { 
            waitUntil: 'networkidle',
            timeout: 15000 
        })

        await handleCookieConsent(page)

        await page.waitForTimeout(500)

        const screenshotBuffer = await page.screenshot({ 
            type: 'png',
            fullPage: true
        })
        const screenshotBase64 = screenshotBuffer.toString('base64')

        const pageData = await page.evaluate(() => {
            document.querySelectorAll('script, style, noscript').forEach(el => el.remove())
            return {
                title: document.title,
                textContent: document.body.innerText
                    .replace(/\s+/g, ' ')
                    .trim()
                    .substring(0, 4000)
            }
        })

        await browser.close()

        return {
            ...pageData,
            screenshotBase64
        }
    } catch (error) {
        console.error('Scraping error:', error)
        if (browser) {
            try {
                await browser.close()
            } catch {
            }
        }
        return null
    }
}

