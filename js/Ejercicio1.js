/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/
let auto = {
    color: 'Negro',
    marca: 'Chevrolet',
    modelo: 'Agile LT',
    encenderMotor: () => {
        document.write('El auto está encendido...')        
    },
    apagarMotor: () => {
        document.write('El auto está apagado')
    }
}
document.write(`<p>Color: ${auto.color}</p>`)
document.write(`<p>Marca: ${auto.marca}</p>`)
document.write(`<p>Modelo: ${auto.modelo}</p>`)
auto.encenderMotor();
document.write('<br>')
auto.apagarMotor();