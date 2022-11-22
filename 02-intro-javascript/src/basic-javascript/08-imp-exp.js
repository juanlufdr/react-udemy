// import heores, { owners } from '../data/heroes';
import heores from '../data/heroes';

// console.log(owners);

// console.log(heores);

export const getHeroeById = (id) => heores.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));

// const getHeroesByOwner = (owner) =>
//   heores.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));

export default getHeroeById;
