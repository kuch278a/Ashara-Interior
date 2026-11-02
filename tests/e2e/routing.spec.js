import { test, expect } from '@playwright/test';

// Hash-routing: every public page must render its unique content on direct load.
test.describe('Hash routing', () => {
  test('#projects renders the portfolio grid page', async ({ page }) => {
    await page.goto('/#projects');
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  });

  test('#services renders the services page', async ({ page }) => {
    await page.goto('/#services');
    await expect(page.getByRole('heading', { name: 'How We Work' })).toBeVisible();
  });

  test('#about renders the studio narrative', async ({ page }) => {
    await page.goto('/#about');
    await expect(page.getByText('Michael Dessalegn')).toBeVisible();
  });

  test('#contact renders the enquiry form', async ({ page }) => {
    await page.goto('/#contact');
    await expect(page.getByRole('button', { name: 'SUBMIT ENQUIRY' })).toBeVisible();
  });

  test('unknown hash renders the 404 view', async ({ page }) => {
    await page.goto('/#this-page-does-not-exist');
    await expect(page.getByText('404 — Page Not Found')).toBeVisible();
  });
});
