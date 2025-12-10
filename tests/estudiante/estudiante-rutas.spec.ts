import { test, expect } from "../fixtures/roles.fixture";

test("Estudiante no puede acceder a páginas de Docente (se redirige)", async ({ estudiantePage }) => {

  await estudiantePage.goto("/docente");

  
  await expect(estudiantePage).not.toHaveURL(/\/docente(\/)?$/);

  
  await expect(estudiantePage).toHaveURL(/\/estudiante(\/)?$/);
});

test("Estudiante no puede acceder a páginas de Admin (se redirige)", async ({ estudiantePage }) => {
  await estudiantePage.goto("/admin");

  await expect(estudiantePage).not.toHaveURL(/\/admin(\/)?$/);
  await expect(estudiantePage).toHaveURL(/\/estudiante(\/)?$/);
});
