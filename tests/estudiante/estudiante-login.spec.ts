import { test, expect } from "../fixtures/roles.fixture";

test("Login de estudiante redirige al panel de estudiante", async ({ estudiantePage }) => {
  
  await expect(estudiantePage).toHaveURL(/\/estudiante(\/)?$/);

  await expect(
    estudiantePage.getByRole("heading", { name: /Panel del Estudiante/i })
  ).toBeVisible();
});
