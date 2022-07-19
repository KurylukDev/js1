/*
//array
class Producto {
  constructor(id, producto, stock, precio) {
      this.id = id
      this.producto = producto
      this.stock = stock
      this.precio = precio
  }
}
//array fin
const formulario = document.getElementById('idForm')
const productoNuevo = []
let id = 1;

formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  let producto = document.getElementById("producto").value
  let precio = document.getElementById("precio").value
  let stock = document.getElementById("stock").value
  const product = new Producto(id, producto, stock, precio)
  productoNuevo.push(product)
  console.table(productoNuevo)
  //Codigo HTML
  productoNuevo.forEach(producto => {
    contenedor.innerHTML += `
    <div class="contenedorProducto" id="comida${producto.id}"> 
    <h3>${producto.producto}</h3>
    <p>Precio: ${producto.precio} </p>
    <p>Stock: ${producto.stock} </p>
    </div>`
  }) 
  formulario.reset()

})
*/

