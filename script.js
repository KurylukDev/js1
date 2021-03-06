class Articulos {
    constructor(productoNombre, productoPrecio,productoStock,productoImg) {
        this.nombre = productoNombre
        this.precio = productoPrecio
        this.stock = productoStock
    }
}

let productos = []

localStorage.getItem("storageProductos") ? productos = JSON.parse(localStorage.getItem("storageProductos")) : localStorage.setItem("storageProductos", JSON.stringify(productos))
/*if(localStorage.getItem("storageProductos")) {
    productos = JSON.parse(localStorage.getItem("storageProductos"))
} else {
    localStorage.setItem("storageProductos", JSON.stringify(productos))
}*/
//Inicio de Formulario
const form = document.getElementById("formulario")
const botonMostrar = document.getElementById("mostrar")
const contenedorProductos = document.getElementById("contenedorProductos")

//Enviar Información del formulario al Array y LocalStorage
//Crea un nuevo producto array con la informacion que el usuario brinda 
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    let datForm = new FormData(e.target)
    const producto = new Articulos(datForm.get("nombre"),datForm.get("precio"), datForm.get("stock"))
    productos.push(producto)
    localStorage.setItem("storageProductos", JSON.stringify(productos))
    form.reset()
})
//Fin de Formulario

//Imprimir al HTML cuando el usuario le da click a Mostrar Productos
botonMostrar.addEventListener("click", () => {
    let productoStorage = JSON.parse(localStorage.getItem("storageProductos"))
    contenedorProductos.innerHTML = ""
    productoStorage.forEach((producto,indice) => {
        contenedorProductos.innerHTML += `
            <div class="card border-secondary mb-3 contenedorMostrar" id="producto${indice}" style="max-width: 20rem;margin:4px;">
                <div class="centrar"><h2>${producto.nombre}</h2></div>
                <div class="card-body">
                <p class="centrar">Precio: $${producto.precio}</p>
                <p class="centrar">Stock: ${producto.stock}/Unidades</p>
                <img class="imgProducto" src="https://definicion.de/wp-content/uploads/2009/06/producto.png" alt="">
                <button class="btn btn-danger">Eliminar Producto</button>
                </div>
            </div>
        `
    })
    // FIN Imprimir DOM al HTML
    
    //Elimina el producto del HTML y del localstorage cuando el usuario le da click a Eliminar
    productoStorage.forEach((producto, indice) => {
        document.getElementById(`producto${indice}`).lastElementChild.lastElementChild.addEventListener("click", () => {
            document.getElementById(`producto${indice}`).remove()
            productos.splice(indice, 1)
            localStorage.setItem("storageProductos", JSON.stringify(productos))
            console.log(`${producto.nombre} eliminada`)
            console.log(productos)
        })
    })
})

//