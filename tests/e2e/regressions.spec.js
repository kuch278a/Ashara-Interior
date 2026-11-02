import { test, expect } from '@playwright/test';

// Regression tests for previously fixed defects.
test.describe('Regressions', () => {
  test('malformed project-detail hash must not crash the app', async ({ page }) => {
    // "#project-detail/50%" used to throw URIError in decodeURIComponent,
    // leaving visitors stuck on the preloader forever.
    await page.goto('/#project-detail/50%');
    await expect(page.getByRole('button', { name: 'INQUIRE NOW' })).toBeVisible();
    await expect(page.getByText('The studio could not be loaded')).toHaveCount(0);
  });

  test('valid project-detail hash renders the case study', async ({ page }) => {
    await page.goto('/#project-detail/1');
    await expect(page.getByRole('button', { name: 'INQUIRE NOW' })).toBeVisible();
  });
});
