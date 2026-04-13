import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // Keep layout checks stable across environments.
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
      }
    `,
  });
});

test.describe("Pagination layout", () => {
  for (const locale of ["en", "id"] as const) {
    test(`${locale} page 2 has 3-column pagination layout`, async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto(`/${locale}/page/2`, { waitUntil: "networkidle" });

      const nav = page.getByTestId("pagination");
      const grid = page.getByTestId("pagination-grid");
      const prev = page.getByTestId("pagination-prev");
      const center = page.getByTestId("pagination-center");
      const next = page.getByTestId("pagination-next");

      await expect(nav).toBeVisible();
      await expect(grid).toBeVisible();

      // Core interactive bits we rely on for layout:
      await expect(prev.locator("a")).toBeVisible();
      await expect(center.locator("#page-picker")).toBeVisible();
      // next may be empty on last page; we only assert the slot container exists.
      await expect(next).toBeVisible();

      // Ensure this is actually a 3-column grid.
      const gridTemplateColumns = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
      expect(gridTemplateColumns.split(" ").filter(Boolean).length).toBe(3);

      const rects = await Promise.all([
        grid.evaluate((el) => el.getBoundingClientRect()),
        prev.evaluate((el) => el.getBoundingClientRect()),
        center.evaluate((el) => el.getBoundingClientRect()),
        next.evaluate((el) => el.getBoundingClientRect()),
      ]);

      const [g, p, c, n] = rects;

      // Left-to-right ordering and no overlap between the 3 areas.
      expect(p.left).toBeGreaterThanOrEqual(g.left - 1);
      expect(n.right).toBeLessThanOrEqual(g.right + 1);
      expect(p.right).toBeLessThanOrEqual(c.left + 1);
      expect(c.right).toBeLessThanOrEqual(n.left + 1);

      // Rough vertical alignment (same row).
      expect(Math.abs(p.top - c.top)).toBeLessThan(20);
      expect(Math.abs(n.top - c.top)).toBeLessThan(20);
    });
  }
});

