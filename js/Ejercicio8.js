/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".*/
class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
    getNombre (){
        return nombre;
    }
    getEdad (){
        return edad;
    }
    getProfesion (){
        return profesion;
    }
    setNombre (nuevoNombre){
        return this.nombre = nuevoNombre;
    }
    setEdad (nuevaEdad){
        return this.edad = nuevaEdad;
    }
    setProfesion (nuevaProfesion){
        return this.profesion = nuevaProfesion;
    }
    saludar (){
        document.write(`<br>Hola ! soy ${this.nombre}, tengo ${this.edad} años, y soy ${this.profesion}, vos ¿Cómo estás?`)
    }
    despedirse (){
        document.write('<br>Hasta luego! Que estés bien.')
    }
}

const juan = new Persona('Juan', 28, 'Profesor');
juan.saludar();
const pedro = new Persona ('Pedro', 32, 'Programador')
pedro.saludar();
juan.despedirse();
pedro.despedirse();