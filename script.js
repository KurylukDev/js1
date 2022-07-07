let catalogo
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

//Inicio de codigo

    do{  
        catalogo = parseFloat(prompt("Consultar stock del catalogo \n Ingrese numero de opcion: \n 1-Comidas  \n 2-Ropa \n 3-Herramientas \n Recuerde Ingresar un numero valido."))
    }
    while(isNaN(catalogo)) {
        
        switch(catalogo){   
            case 1:
                class Comida{
                    constructor(id, producto, precio, stock){
                        this.id = id
                        this.producto = producto
                        this.precio = precio
                        this.stock = stock
                    }
                }
                
                const comida1 = new Comida(1, "Papas Fritas", 250, 999 + "/uds")
                const comida2 = new Comida(2, "Coca-Cola", 350, 999 + "/uds")
                const comida3 = new Comida(3, "Hamburguesa", 850, 999 + "/uds")
                
                const comidas = [comida1, comida2, comida3]

                const contenedorComida = document.getElementById('contenedor')


                comidas.forEach(comida => {
                    contenedorComida.innerHTML += `
                    <div class="styleComida" id="comida${comida.id}"> 
                    <h3>COMIDAS STOCK</h3>
                    <p>Nombre: ${comida.producto} </p> 
                    <p>Apellido: ${comida.precio} </p>
                    <p>Edad: ${comida.stock} </p>
                    </div>`
                    console.table(comida)
                })
                break;

                case 2:
                    class Ropa{
                        constructor(id, producto, precio, stock){
                            this.id = id
                            this.producto = producto
                            this.precio = precio
                            this.stock = stock
                        }
                    }
                    
                    const ropa1 = new Ropa(1, "Remera", 550, 999 + "/uds")
                    const ropa2 = new Ropa(2, "Pantalon", 1250, 999 + "/uds")
                    const ropa3 = new Ropa(3, "Buzo", 850, 999 + "/uds")
                    
                    const ropas = [ropa1, ropa2, ropa3]
                    
                const contenedorRopa = document.getElementById('contenedor')

                ropas.forEach(ropa => {
                    contenedorRopa.innerHTML += `
                    <div class="styleRopa" id="comida${ropa.id}"> 
                    <h3>ROPA STOCK</h3>
                    <p>Nombre: ${ropa.producto} </p> 
                    <p>Apellido: ${ropa.precio} </p>
                    <p>Edad: ${ropa.stock} </p>    
                    </div>`
                    console.table(ropa)
                })
                    break
                    case 3:
                        class Herramientas{
                            constructor(id, producto, precio, stock){
                                this.id = id
                                this.producto = producto
                                this.precio = precio
                                this.stock = stock
                            }
                        }
                        
                        const herramienta1 = new Herramientas(1, "Martillo", 500, 999 + "/uds")
                        const herramienta2 = new Herramientas(2, "Destornillador", 350, 999 + "/uds")
                        const herramienta3 = new Herramientas(3, "Taladro", 2850, 999 + "/uds")
                        
                        const herramientas = [herramienta1, herramienta2, herramienta3]
                                            
                const contenedorHerramientas = document.getElementById('contenedor')


                herramientas.forEach(herramienta => {
                    contenedorHerramientas.innerHTML += `
                    <div class="styleHerramienta" id="comida${herramienta.id}"> 
                    <h3>ROPA STOCK</h3>
                    <p>Nombre: ${herramienta.producto} </p> 
                    <p>Apellido: ${herramienta.precio} </p>
                    <p>Edad: ${herramienta.stock} </p>
                    </div>`
                    console.table(herramienta)
                }) 
                        break
                        default: alert("Por favor ingrese una opción valida")
            }

    }