import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas de 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no existe el ID", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  //Tarea
  test("getHeroeByOwner de DC debe retornar un array de 3", () => {
    const dcHeroesOriginal = heroes.filter((h) => h.owner === "DC");
    const dcHeroesExtracted = getHeroesByOwner("DC");

    expect(dcHeroesOriginal).toEqual(dcHeroesExtracted);
    expect(dcHeroesExtracted.length).toBe(3);
  });

  test("getHeroeByOwner de Marvel debe retornar un array de 2", () => {
    const marvelHeroesOriginal = heroes.filter((h) => h.owner === "Marvel");
    const marvelHeroesExtracted = getHeroesByOwner("Marvel");

    expect(marvelHeroesOriginal).toEqual(marvelHeroesExtracted);
    expect(marvelHeroesExtracted.length).toBe(2);
  });
});
