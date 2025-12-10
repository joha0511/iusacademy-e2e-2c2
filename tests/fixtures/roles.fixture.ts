import { test as base, expect, type Page } from "@playwright/test";

type RoleFixtures = {
  estudiantePage: Page;
  docentePage: Page;
  adminPage: Page;
};

const test = base.extend<RoleFixtures>({

  // ESTUDIANTE
  estudiantePage: async ({ page }, use) => {
    await page.goto("/login");

    await page.locator("#user").fill("cbbe.erikajohanna.claros.ch@unifranz.edu.bo");
    await page.locator("#password").fill("1234");
    await page.getByRole("button", { name: "Entrar" }).click();

    await expect(page).toHaveURL(/\/estudiante(\/)?$/);

    await use(page);
  },

  // DOCENTE
  docentePage: async ({ page }, use) => {
    await page.goto("/login");

    await page.locator("#user").fill("erika@unifranz.edu.bo");
    await page.locator("#password").fill("2522eri");
    await page.getByRole("button", { name: "Entrar" }).click();

    await expect(page).toHaveURL(/\/docente(\/)?$/);

    await use(page);
  },

  // ADMIN
  adminPage: async ({ page }, use) => {
    await page.goto("/login");

    await page.locator("#user").fill("admin@unifranz.edu.bo");
    await page.locator("#password").fill("1234");
    await page.getByRole("button", { name: "Entrar" }).click();

    await expect(page).toHaveURL(/\/admin(\/)?$/);

    await use(page);
  },
});

export { test, expect };
