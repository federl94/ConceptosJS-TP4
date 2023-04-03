/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/
class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura,anioNac){
        this.nombre = nombre
        this.edad = edad
        this.dni = dni || this.generarDNI()
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.anioNac = anioNac
    }
    getnombre (){
        return this.nombre
    }
    getedad(){
        return this.edad
    }
    getdni (){
        return this.dni
    }
    getsexo (){
        return this.sexo
    }
    getpeso (){
        return this.peso
    }
    getaltura (){
        return this.altura
    }
    getanioNac(){
        return this.anioNac
    }
    setnombre(nuevoNombre){
        if(nuevoNombre.lenght >=50){
            return this.nombre = nuevoNombre;
        }       
    }
    setedad(nuevaEdad){
        if (nuevaEdad > 0 && nuevaEdad < 130) {
        return this.edad = nuevaEdad;
        }
    }
    setdni(nuevoDni){
        return this.dni = nuevoDni;
    }
    setsexo(nuevoSexo){
        if (nuevoSexo == `Hombre` || nuevoSexo == `Mujer` || nuevoSexo == `No definido`){
            return this.sexo = nuevoSexo;
        }
    }
    setpeso (nuevoPeso){
        return this.peso = nuevoPeso;
    }
    setaltura(nuevaAltura){
        return this.altura = nuevaAltura;
    }
    setanioNac(nuevoAnioNac){
        if (nuevoAnioNac>=1930 && nuevoAnioNac<=2023){
            return this.anioNac = nuevoAnioNac;
        }
    }
    mostrarGeneracion(){
        if (this.anio >= 1994 && this.anio <= 2010) {
            document.write("<br>Es de la generacion: Z");
            document.write("<br> Rasgo caracteristico: Irreverencia");
        } else if (this.anio >= 1981 && this.anio <= 1993) {
            document.write("<br>Es de la generacion: millnials Y");
            document.write("<br> Rasgo caracteristico: Frustracion");
        } else if (this.anio >= 1969 && this.anio <= 1980) {
            document.write("<br>Es de la generacion: X");
            document.write("<br> Rasgo caracteristico: Obsesion por el Exito");
        } else if (this.anio >= 1949 && this.anio <= 1968) {
            document.write("<br>Es de la generacion: Baby Boom");
            document.write("<br> Rasgo caracteristico: Ambicion");
        } else {
            document.write("<br>Es de la generacion: Silent Generation (Los niños de la posguerra)");
            document.write("<br> Rasgo caracteristico: Austeridad");
        }
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(`<br>Es mayor de edad`);
        } else {
            document.write(`<br>No es mayor de edad`);
        }
    }
    generarDNI() {
        let dni = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
        return dni;
    }
    mostrarDatos(){
        document.write(`Nombre: ${this.nombre}<br>Edad: ${this.edad}<br>DNI: ${this.dni}<br>Sexo: ${this.sexo}<br>Peso: ${this.peso}<br>Altura: ${this.altura}<br>Año de Nacimiento: ${this.anioNac}<br>`)
    }
    }
    const federico = new Persona ("Federico", 29, "Hombre", 88, 170,1994,34513548);
    federico.esMayorDeEdad();
    federico.mostrarGeneracion();
    federico.mostrarDatos();