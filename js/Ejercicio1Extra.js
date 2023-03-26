/*Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 : (este ej. debe formar parte del tp4)crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez. Este ejercicio forma parte del TP4 (se puede realizar con los conceptos vistos hasta hoy)*/
const opciones = prompt('Seleccione una opción (piedra, papel o tijeras)')

function eleccionUsuario() {
    if (eleccionUsuario=='piedra') {
        document.write('El usuario eligió 👊🏻')
    }
    if (eleccionUsuario=='papel') {
        document.write('El usuario eligió ✋🏻')
    }
    if (eleccionUsuario=='tijeras') {
        document.write('El usuario eligió ✌🏻')
    }    
}
function eleccionPc() {
    let eleccionPc = Math.floor(Math.random() *3);
    if (eleccionPc===1) {
        document.write('La PC eligió 👊🏻')
    }
    if (eleccionPc===2) {
        document.write('La PC eligió ✋🏻')
    }
    if (eleccionPc===3) {
        document.write('La PC eligió ✌🏻')
    }
}
eleccionUsuario();
document.write('<br>')
eleccionPc();
document.write('<br>')


function resultado() {
    if (eleccionPc == 1 && eleccionUsuario== 'piedra' || eleccionPc == 2 && eleccionUsuario== 'papel' || eleccionPc == 3 && eleccionUsuario== 'tijeras') {
        document.write('Empate')
    }
    if (eleccionPc==1 && eleccionUsuario=='tijeras' || eleccionPc == 2 && eleccionUsuario== 'piedra' || eleccionPc == 3 && eleccionUsuario== 'papel') {
        document.write('Ganó la PC')
    }
    else {
        document.write('Ganó el Usuario')
    }
    
}
resultado();