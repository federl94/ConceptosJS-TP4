/*Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.*/
let persona = {
    nombre: 'Federico Javier',
    apellido: 'Rueda Leal',
    edad: '29',
    estudiante: true,
    hobbies: ['fútbol<br>','jugar con mi hijo<br>', 'programar<br>'],

    presentarPersona: ()=> {
        document.write(`Nombre: ${persona.nombre}<br>`)
        document.write(`Apellido: ${persona.apellido}<br>`)
        document.write(`Edad: ${persona.edad}<br>`)
        document.write(`Es estudiante: ${persona.estudiante}<br>`)
        document.write(`Sus hobbies son: ${persona.hobbies}<br>`)
    },
    agregarHobbie: (nuevoHobbie)=> {
            this.hobbies.push(nuevoHobbie);
            document.write(`${this.nuevoHobbie} ha sido agregado a mis hobbies.<br>`);
          },
    
    borrarHobbie: (hobbie)=> {
        const i = this.hobbies.indexOf(hobbie)
        if (i> -1) {
            this.hobbies.splice(i,1);
            document.write(`${hobbie} se eliminó de la lista <br>`)
        }
        },
    buscarHobbie: (hobbie) => {
        const i = this.hobbies.indexOf(hobbie);
        if (i > -1) {
          document.write(`Sí está en la lista ${hobbie}. <br>`);
        } else {
          document.write(`No está en la lista ${hobbie}. <br>`);
        }
      },
    }
    persona.presentarPersona();
    // Mostrar hobbies por pantalla
  document.write('Mis hobbies son: <br>');
  persona.hobbies.forEach(hobbie => document.write(hobbie));
  persona.agregarHobbie('Salir a pasear<br>','descansar<br>','Salir con amigos <br>');
  document.write(`Se agregó ${persona.hobbies.nuevoHobbie} como hobbie <br>`);
  persona.buscarHobbie('viajar');  
  persona.borrarHobbie(persona.hobbies[0]);  
  document.write(persona.hobbies);  
