import { test, expect } from '@playwright/test';

// Home page smoke tests: hero slideshow, section titles, and navbar routing.
test.describe('Home page', () => {
  test('renders hero slideshow and section titles', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: 'Previous Project' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next Project' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Works' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Clients' })).toBeVisible();
  });

  test('navigates to Projects via the navbar', async ({ page }) => {
    await page.goto('/');
    // Navbar renders the link for both desktop and mobile drawers — use the first
    await page.getByRole('button', { name: 'Projects' }).first().click();
    await expect(page).toHaveURL(/#projects/);
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  });
});
