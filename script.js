
let sueldoBruto, pais;
let repeat = true
let argentina = 79
let uruguay = 78
let chile = 81
let peru = 82
//tuve un problema aca no me tomaba 1.21
    do{  
        sueldoBruto = parseFloat(prompt("Ingrese su sueldo bruto"));
        pais = parseFloat(prompt("Ingrese numero de opcion: \n 1-Argentina  \n 2-Uruguay  \n 3-Chile  \n 4-Peru \n 5-salir"  ));
    }while((isNaN(sueldoBruto) || isNaN(pais))) {

    switch(pais){
        case 1:
            alert("Su sueldo neto es de: "+ (sueldoBruto / 100) * argentina)
            console.log("Su sueldo neto es de: "+ (sueldoBruto / 100) * argentina)
            break
        case 2: 
            alert("Su sueldo neto es de: "+ (sueldoBruto / 100 ) * uruguay)
            console.log("Su sueldo neto es de: "+ (sueldoBruto / 100) * uruguay)
            break
        case 3:
            alert("Su sueldo neto es de: "+ (sueldoBruto / 100 ) * chile)
            console.log("Su sueldo neto es de: "+ (sueldoBruto / 100) * chile)
            break
        case 4:
            alert("Su sueldo neto es de: "+ (sueldoBruto / 100 ) * peru)
            console.log("Su sueldo neto es de: "+ (sueldoBruto / 100) * peru)
            break
        case 5:
            alert("Gracias por utilizarnos")
            console.log("Gracias por utilizarnos")
            break
        default:
            alert("Operación no valida")}
    
}
