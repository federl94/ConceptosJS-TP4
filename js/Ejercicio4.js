/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/
class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    /*get codigo (){
        return this.codigo;
    };
    get nombre (){
        return this.nombre;
    };
    get precio (){
        return this.precio;
    }
    set codigo (codigo){
        this.codigo = codigo
    }
    set nombre (nombre){
        this.nombre = nombre
    }
    set precio (precio){
        this.precio = precio
    }*/
    imprimirDatos(){
        document.write(`Código del producto: ${this.codigo}<br>Nombre del producto: ${this.nombre}<br>Precio del producto: $${this.precio}<br><hr>`)
    }

}
let productos = [
    new Producto(7790895067570, 'Coca Cola Zero x2,25LT', 449.99),
    new Producto(7790895067556, 'Coca Cola Sin Azúcar x1,5LT', 289.99),
    new Producto(7790895000497, 'Sprite común x2,25LT', 399.99)
  ];  
  for (const producto of productos) {
    producto.imprimirDatos();
  }