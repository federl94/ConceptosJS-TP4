/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/
class Libro {
    constructor(isbn, Titulo, Autor, NumPag){
        this.isbn = isbn;
        this.Titulo= Titulo;
        this.Autor = Autor;
        this.NumPag= NumPag;
        }
        getisbn (){
            return this.isbn;
        }
        getTitulo (){
            return this.Titulo;
        }
        getAutor(){
            return this.Autor;
        }
        getNumPag(){
            return this.NumPag;
        }
        setisbn(nuevoIsbn){
            if(nuevoIsbn.lenght < 13){
            return this.isbn=nuevoIsbn;
            }
        }
        setTitulo (nuevoTitulo){
            if(nuevoTitulo!==null){
                this.Titulo=nuevoTitulo;
               }
        }
        setAutor(nuevoAutor){
            return this.Autor= nuevoAutor;
        }
        setNumPag(nuevoNumPag){
            if (nuevoNumPag = Number){
                return this.NumPag=nuevoNumPag;
            }
            else{
                document.write('No es un número válido de páginas.');
            }
        }
        mostrarLibro (){
            document.write(`El libro ${this.Titulo} con ISBN ${this.isbn} creado por el autor ${this.Autor} tiene  ${this.NumPag} páginas.<br>`)
        }
}
const primerLibro = new Libro (12345,"Primer libro","Francesco Totti",2500);
primerLibro.mostrarLibro();
const segundoLibro = new Libro (24123,"Segundo libro", 'Zinedine Zidane', 3000);
segundoLibro.mostrarLibro();
if (segundoLibro.NumPag>primerLibro.NumPag){
    document.write('<br> El segundo libro tiene más páginas que el primero')
}
else{
    document.write('<br> El primer libro tiene más páginas que el segundo')
}
