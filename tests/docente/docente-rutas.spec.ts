import { test, expect } from "../fixtures/roles.fixture";

test("Docente no puede acceder al panel de Admin (se redirige)", async ({ docentePage }) => {
  await docentePage.goto("/admin");

  await expect(docentePage).not.toHaveURL(/\/admin(\/)?$/);
  await expect(docentePage).toHaveURL(/\/docente(\/)?$/);
});

test("Docente no debería ver secciones exclusivas de estudiante en el menú", async ({ docentePage }) => {
  await expect(
    docentePage.getByText(/Revisor de memoriales|Panel del Estudiante/i)
  ).not.toBeVisible();
});
