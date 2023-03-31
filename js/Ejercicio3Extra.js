/*Crear un objeto calculadora, con las propiedades y métodos necesarios para realizar las operaciones de suma, resta, multiplicación y división. Mostrar por pantalla 2 operaciones con cada método.*/
let calculadora = {    
    num: 0,
    suma: function (valor) {
        this.num += valor;
    },
    resta: function (valor) {
        this.num -= valor;
    },
    multiplicacion: function (valor) {
        this.num *= valor;
    },
    division: function (valor) {
        if (valor=== 0) {
            document.write('No se puede dividir por 0')
            return;
        }
        this.num /=valor;
    },
    total: function() {
        document.write(`El resultado es: ${this.num}<br>`);
      }
}
document.write('<h2>SUMA</h2>')
calculadora.suma(70);
calculadora.suma(35);
calculadora.total();

calculadora.suma(140);
calculadora.suma(89);
calculadora.total();

document.write('<h2>RESTA</h2>')
calculadora.resta(1200)
calculadora.resta(800);
calculadora.total();

calculadora.resta(450)
calculadora.resta(300);
calculadora.total();

document.write('<h2>MULTIPLICACION</h2>')
calculadora.multiplicacion(36);
calculadora.multiplicacion(8);
calculadora.total();

calculadora.multiplicacion(88);
calculadora.multiplicacion(7);
calculadora.total();

document.write('<h2>DIVISION</h2>')
calculadora.division(256);
calculadora.division(8);
calculadora.total();