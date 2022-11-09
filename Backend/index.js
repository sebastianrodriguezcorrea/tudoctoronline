//Funcion constructora
function PersonaC(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const persona1 = new PersonaC("Nestor", 22);

//Funcion
function Persona(nombre, edad) {
  return { nombre, edad };
}

const persona2 = Persona("Leidy", 25);
