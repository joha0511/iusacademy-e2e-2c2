import { test, expect } from "../fixtures/roles.fixture";

test("Admin navega a Crear usuario desde el panel", async ({ adminPage }) => {

  await adminPage
    .getByLabel("Menú principal administrador")
    .getByRole("link", { name: /^Crear usuario$/i })
    .click();

  await expect(adminPage).toHaveURL(/\/admin\/crear-usuario$/);
});
