/*Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.*/
let persona = {
    nombre: 'Federico Javier',
    apellido: 'Rueda Leal',
    edad: '29',
    estudiante: true,
    hobbies: [],

    presentarPersona: ()=> {
        document.write(`Nombre: ${persona.nombre}<br>`)
        document.write(`Apellido: ${persona.apellido}<br>`)
        document.write(`Edad: ${persona.edad}<br>`)
        document.write(`Es estudiante: ${persona.estudiante}<br>`)
        document.write(`Sus hobbies son: ${persona.hobbies}<br>`)
    },
    agregarHobbie: ()=> {
        const nuevoHobbie = prompt("Ingrese un nuevo elemento para el arreglo:");
        persona.hobbies.push(nuevoHobbie);

    },
    borrarHobbie: ()=> {
        
    },
    buscarHobbie: ()=> {
        
    },
}
persona.presentarPersona();

