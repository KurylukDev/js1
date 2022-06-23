 // PRIMERA TAREA
let numero = parseFloat(prompt("Ingrese un numero para sumar"))
for(let i = 0; i <= numero ;i++) {    
if( i === 5) {
    continue
}
console.log(i)
}

let texto = prompt("Ingrese una plabra")
let resultado
let textosumado
while(textosumado != "esc"){
    textosumado = prompt("Ingrese palabra para agregar anterior o Escriba ESC para terminar")
    resultado = texto + textosumado
    console.log(resultado)
}
