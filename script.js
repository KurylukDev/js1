console.log(document.getElementById("prf1"))
const parrafo4 = document.getElementById("prf4")
parrafo4.innerText = "hola coder"

class Persona {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }
}

const persona1 = new Persona(1, "Francisco", "Pugh", 38, 12000)
const persona2 = new Persona(2, "Dario", "Britos", 20, 22000)
const persona3 = new Persona(3, "Alejandro", "Santos", 19, 17000)
const persona4 = new Persona(4, "Gaston", "Sosa", 21, 13000)
const persona5 = new Persona(5, "Maria", "Parodi", 19, 24000)

const personas = [persona1, persona2, persona3, persona4, persona5]

const divPersonas = document.getElementById('divPersonas')

personas.forEach(persona => {
    divPersonas.innerHTML += `
        <div id="persona"${persona.id}>
            <p>Nombre: ${persona.nombre} </p>
            <p>Apellido: ${persona.apellido} </p>
            <p>Edad: ${persona.edad} </p>
            <p>Sueldo: ${persona.sueldo} </p>
        </div>
    
    `
})



/*
let descuento = 200
let productos
//Comidas
let papasFritas = 250
let cocacola = 350
let hamburguesa = 850
//Ropa
let remera = 550
let pantalon = 1250
let buzo = 850
//Herramientas
let martillo = 500
let destornillador = 350
let taladro = 2850
    do{  
        productos = parseFloat(prompt("Utilizando descuento de $200. \n Ingrese numero de opcion: \n 1-Comidas  \n 2-Ropa \n 3-herramientas \n Gracias por confiar en nosotros. \n att:Me voy a la mierda online"));
    }
    while(isNaN(productos)) {
        
        switch(productos){
            case 1:
                let comidas = parseFloat(prompt("Ingrese numero de opcion: \n 1-Papas Fritas $250  \n 2-Coca-cola 2,5l $350  \n 3-Hamburguesa $850"));
                switch(comidas){
                    case 1:    
                        alert("El precio final de su compra es de: "+ (papasFritas - descuento))
                        console.log("El precio final de su compra es de: "+ (papasFritas - descuento))
                        break;
                    case 2:
                        alert("El precio final de su compra es de: "+ (cocacola - descuento))
                        console.log("El precio final de su compra es de: "+ (cocacola - descuento))
                        break;
                     case 3:
                        alert("El precio final de su compra es de: "+ (hamburguesa - descuento))
                        console.log("El precio final de su compra es de:: "+ (hamburguesa - descuento))
                        break;   
                    default:
                        alert("Operación no valida")
                 break
                }

                break
            case 2: 
            let ropa = parseFloat(prompt("Ingrese numero de opcion: \n 1-Remera $550  \n 2-pantalon $1250  \n 3-buzo $850"));
            switch(ropa){
                case 1:    
                    alert("El precio final de su compra es de: "+ (remera - descuento))
                    console.log("El precio final de su compra es de: "+ (remera - descuento))
                    break
                case 2:
                    alert("El precio final de su compra es de: "+ (pantalon - descuento))
                    console.log("El precio final de su compra es de:"+ (pantalon - descuento))
                    break
                case 3:
                    alert("El precio final de su compra es de: "+ (buzo - descuento))
                    console.log("El precio final de su compra es de: "+(buzo - descuento))
                    break
                     
             default:
                    alert("Operación no valida")
             break
            }
            break
            case 3:
                let herramientas = parseFloat(prompt("Ingrese numero de opcion: \n 1-martillo $500  \n 2-destornillador $350  \n 3-taladro $2850"));
                switch(herramientas){
                    case 1:    
                        alert("Su sueldo neto es de: "+ (martillo - descuento))
                        console.log("Su sueldo neto es de: "+ (martillo - descuento))
                        break
                    case 2:
                        alert("Su sueldo neto es de: "+ (destornillador - descuento))
                        console.log("Su sueldo neto es de: "+ (destornillador - descuento))
                        break

                     case 3:
                        alert("Su sueldo neto es de: "+ (taladro - descuento))
                        console.log("Su sueldo neto es de: "+ (taladro - descuento))
                        break;
                         
                    default:
                         alert("Operación no valida")
                 break  
                }
                break
            default:
                alert("Operación no valida")
                break;
        }
    } */