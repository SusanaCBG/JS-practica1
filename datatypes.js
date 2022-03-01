let edad = parseInt(prompt("Ingresa tu año de nacimiento"));
let fecha = parseInt(prompt("Ingresa fecha a calcular"));
let calc = fecha - edad;
let calc2 = calc - 1;
alert("Tu edad es: " + calc2 + " ó "+ calc + " años");


let persona = {
  nombre: "Jonh",
  locacion: "New York",
  pasatiempo: "jugar videojuegos"
};

alert("Hola, mi nombre es " + persona.nombre + ". Soy de " + persona.locacion + " y me gusta  " + persona.pasatiempo);
