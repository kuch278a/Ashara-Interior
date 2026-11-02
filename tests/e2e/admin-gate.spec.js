import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

// The admin portal must stay unreachable without the secret URL key.
// (The client gate is obscurity only — real protection is Firebase Auth +
// Firestore/Storage rules — but the gate itself must still work.)
//
// The positive-path test needs the key the dev server was started with:
// CI provides a test value via env; locally it comes from .env.

function getAdminKey() {
  if (process.env.VITE_ADMIN_ACCESS_KEY) return process.env.VITE_ADMIN_ACCESS_KEY;
  try {
    const env = readFileSync('.env', 'utf8');
    const match = env.match(/^VITE_ADMIN_ACCESS_KEY=(.*)$/m);
    return match ? match[1].trim() : '';
  } catch {
    return '';
  }
}

test.describe('Admin gate', () => {
  test('blocks #admin without a key', async ({ page }) => {
    await page.goto('/#admin');
    await expect(page.getByText('404 — Page Not Found')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toHaveCount(0);
  });

  test('blocks #admin with a wrong key', async ({ page }) => {
    await page.goto('/?key=definitely-the-wrong-key#admin');
    await expect(page.getByText('404 — Page Not Found')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toHaveCount(0);
  });

  test('grants access with the correct key and renders the login screen', async ({ page }) => {
    const key = getAdminKey();
    test.skip(!key, 'no admin access key configured');
    await page.goto(`/?key=${encodeURIComponent(key)}#admin`);
    // The portal must actually mount — a render crash lands on the root
    // error boundary instead of the login form.
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.getByText('The studio could not be loaded')).toHaveCount(0);
  });
});
