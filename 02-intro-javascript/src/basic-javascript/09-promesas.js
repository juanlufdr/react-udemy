import { getHeroeById } from './basic-javascript/08-imp-exp';

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(1);
//     // console.log(heroe);
//     // resolve(heroe);
//     reject('No se pudo encontrar el heroe');
//   }, 2000);
// });

// promise
//   .then((heroe) => {
//     // console.log('then de la promesa');
//     console.log(heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject('No se pudo encontrar el heroe');
      }
    }, 2000);
  });
};

getHeroeByIdAsync(10).then(console.log).catch(console.warn);
