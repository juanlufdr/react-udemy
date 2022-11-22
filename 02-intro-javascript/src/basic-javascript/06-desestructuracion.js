// Desestructuración
// Asignación Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

const { nombre, clave, edad } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({ nombre, edad, clave, rango = 'Capitan' }) => {
  //   const { nombre, clave, edad } = usuario;

  //   console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
