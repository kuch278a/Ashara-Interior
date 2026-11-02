import { test, expect } from '@playwright/test';

// Contact form validation — client-side only, never submits real data
// (a valid submission would write to the live Firestore project).
// The inputs carry native required/type=email constraints, so invalid input
// is blocked by the browser before React's backstop validation runs.
test.describe('Contact form validation', () => {
  test('empty submit is blocked and nothing is sent', async ({ page }) => {
    await page.goto('/#contact');
    const form = page.locator('form');
    await expect(form).toBeVisible();
    await page.getByRole('button', { name: 'SUBMIT ENQUIRY' }).click();
    // Native required-validation blocks the submit event entirely
    expect(await form.evaluate((el) => el.checkValidity())).toBe(false);
    // Nothing was submitted: no success view, form still showing
    await expect(page.getByText('Enquiry Submitted Successfully')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'SUBMIT ENQUIRY' })).toBeVisible();
  });

  test('invalid email is blocked and nothing is sent', async ({ page }) => {
    await page.goto('/#contact');
    await page.getByPlaceholder('Full Name').fill('E2E Test Client');
    await page.getByPlaceholder('Email Address').fill('not-an-email');
    const email = page.getByPlaceholder('Email Address');
    expect(await email.evaluate((el) => el.checkValidity())).toBe(false);
    await page.getByRole('button', { name: 'SUBMIT ENQUIRY' }).click();
    await expect(page.getByText('Enquiry Submitted Successfully')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'SUBMIT ENQUIRY' })).toBeVisible();
  });
});
