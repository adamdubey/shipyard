import { expect, test } from '@playwright/test'

test('Shipyard application loads', async ({ page }) => {
  await page.goto('./')

  await expect(
    page.getByRole('heading', {
      name: /pr delivery factory/i,
    }),
  ).toBeVisible()
})

test('deployment information is visible', async ({ page }) => {
  await page.goto('./')

  await expect(
    page.getByText(/environment/i).first(),
  ).toBeVisible()

  await expect(
    page.getByText(/deployment status/i),
  ).toBeVisible()

  await expect(
    page.getByText(/ready for qa/i),
  ).toBeVisible()
})

test('preview contains GitHub build metadata', async ({ page }) => {
  test.skip(
    !process.env.CI,
    'GitHub metadata validation only runs against deployed PR previews',
  )

  await page.goto('./')

  await expect(
    page.getByText('PREVIEW'),
  ).toBeVisible()

  await expect(
    page.locator('dd').filter({ hasText: /^\d+$/ }),
  ).toBeVisible()

  await expect(
    page.getByText(/^dev$/),
  ).not.toBeVisible()
})