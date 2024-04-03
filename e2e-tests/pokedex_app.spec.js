// eslint-disable-next-line no-unused-vars
const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('navigating to link opens up proper content', async ({ page }) => {
    await page.goto('/pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })

  test('navigating to home from any pokemon page returns home window', async ({ page }) => {
    await page.goto('/pokemon/ivysaur')
    const locator = await page.getByRole('link', { name: 'Home' })
    await expect(locator).toBeVisible()
    await locator.click()
    await expect(page.url()).toMatch('/')
  })
})