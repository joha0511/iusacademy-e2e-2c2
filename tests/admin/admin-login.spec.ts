import { test, expect } from "../fixtures/roles.fixture";

test("Login de admin redirige al panel de administración", async ({ adminPage }) => {
  await expect(adminPage).toHaveURL(/\/admin\/?$/);

  await expect(
    adminPage.getByRole('heading', { name: /Panel Administrador/i })
  ).toBeVisible();
});
