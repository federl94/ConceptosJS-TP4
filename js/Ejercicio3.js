/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

    class Rectangulo {
        constructor(alto, ancho) {
          this.alto = alto;
          this.ancho = ancho;
        }      
        getAlto() {
          return this.alto;
        }
        getAncho() {
            return this.ancho;
        }
        setAlto(alto) {
          this.alto = alto;
        }
        setAncho(ancho) {
          this.ancho = ancho;
        }      
        calcularPerimetro() {
          return 2 * (this.alto + this.ancho);
        }
        calcularArea() {
          return this.alto * this.ancho;
        }      
        mostrarDatos() {
          document.write(`<br>Alto: ${this.alto}<br>Ancho: ${this.ancho}`);
        }      
        pedirAltoUsuario() {
          let nuevoAlto = prompt("Ingrese una altura del rectángulo: ");
          this.alto = Number(nuevoAlto);
        }
        pedirAnchoUsuario() {
          let nuevoAncho = prompt("Ingrese un ancho del rectángulo: ");
          this.ancho = Number(nuevoAncho);
        }
      }      
      let nuevoRectangulo = new Rectangulo();
      nuevoRectangulo.pedirAltoUsuario();
      nuevoRectangulo.pedirAnchoUsuario();
      nuevoRectangulo.mostrarDatos();
      document.write(`<br>El perímetro es: ${nuevoRectangulo.calcularPerimetro()}`);
      document.write(`<br>El área es: ${nuevoRectangulo.calcularArea()}`);