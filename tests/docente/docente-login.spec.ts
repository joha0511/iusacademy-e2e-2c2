import { test, expect } from "../fixtures/roles.fixture";

test("Login de docente redirige al panel de docente", async ({ docentePage }) => {
  await expect(docentePage).toHaveURL(/\/docente\/?$/);

  await expect(
    docentePage.getByRole("heading", { name: /Panel Docente/i })
  ).toBeVisible();
});
