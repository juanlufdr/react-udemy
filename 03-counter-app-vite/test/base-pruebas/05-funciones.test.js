import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Juanlu";

    const activeUser = getUsuarioActivo(name);

    expect(name).toStrictEqual(activeUser.username);
  });
});
