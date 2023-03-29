/*Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.*/
let persona = {
    nombre: 'Federico Javier',
    apellido: 'Rueda Leal',
    edad: '29 años',
    estudiante: true,
    hobbies: ["fútbol <br>",
    "jugar con mi hijo<br>",
"programar<br>"],

    presentarPersona: ()=> {
        document.write(`Nombre: ${persona.nombre}<br>`)
        document.write(`Apellido: ${persona.apellido}<br>`)
        document.write(`Edad: ${persona.edad}<br>`)
        document.write(`Es estudiante: ${persona.estudiante}<br>`)
        document.write('<h4>Sus hobbies son:</h4>')
        persona.hobbies.map(hobbie => document.write(`<li>${hobbie}</li>`));
      },
    agregarHobbie: function (nuevoHobbie) {
            this.hobbies.push(nuevoHobbie);
          },
    
    borrarHobbie: function(hobbie) {
        const i = this.hobbies.indexOf(hobbie)
        if (i> -1) {
            this.hobbies.splice(i,1);
            document.write(`${hobbie} se eliminó de la lista <br>`)
        }
        },
    buscarHobbie: function (hobbie) {
        const i = this.hobbies.indexOf(hobbie);
        if (i > -1) {
          document.write(`Sí está en la lista ${hobbie}. <br>`);
        } else {
          document.write(`No está en la lista ${hobbie}. <br>`);
        }
      },
    }
  persona.presentarPersona();
  persona.agregarHobbie('Jugar Basquet<br>');
  persona.agregarHobbie('Natación<br>');
  persona.agregarHobbie('Ir al cine<br>');
  document.write('<br>')
  persona.buscarHobbie('viajar<br>');
  document.write('<br>')  
  persona.borrarHobbie(persona.hobbies[0]);
  document.write('<br>')
  persona.presentarPersona();