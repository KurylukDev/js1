//Inicio de Wiki

const results = document.querySelector("#results")
 function callApi(value){
    fetch(`https://swapi.dev/api/${value}/`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      monstrarResultados(data, value)
    })
    .catch(function(error) { //Elemento que despliega en caso de error
      console.log('Request failed', error)
    });
}

function monstrarResultados(data, value){
    let output = ""
    if(value === 'films'){
        data.results.forEach((item, index) => {
          let arrayFilms = ['../media/img/wiki/films/episodeIV.jpg',
          '../media/img/wiki/films/episodeV.jpg',
          '../media/img/wiki/films/episodeVI.jpg',
          '../media/img/wiki/films/episodeI.jpg',
          '../media/img/wiki/films/episodeII.jpg',
          '../media/img/wiki/films/episodeIII.jpg'
        ];
        let imageFilms = arrayFilms[index];
            output += `
            <div class="col-sm-6">
            <div class="card p-3 m-3 cardItems" style="opacity:.8">
              <img class="card-img-top" src=${imageFilms} alt="Card image cap">
               <h4 class="card-title text-center">${item.title}</h4>
               <div class="card-content text-center">
               <span style="text-decoration:underline">Producer</span>: ${item.producer}<br>
               <span style="text-decoration:underline">Director</span>: ${item.director}<br>
               <span style="text-decoration:underline">release Date</span>: ${item.release_date}<br>
               <p class="text-center">${item.opening_crawl}</p>
               </div>
             </div>
            </div>`
        })
        
    }
    if(value === 'people'){
        data.results.forEach((item, index) => {
          let arrayCharacters = ['../media/img/wiki/characters/luke.jpg',
          '../media/img/wiki/characters/c3p0.png',
          '../media/img/wiki/characters/r2d2.jpg',
          '../media/img/wiki/characters/vader.jpg',
          '../media/img/wiki/characters/leia.webp',
          '../media/img/wiki/characters/owen.jpg',
          '../media/img/wiki/characters/beru.jpg',
          '../media/img/wiki/characters/r5d4.webp',
          '../media/img/wiki/characters/biggs.jpeg',
          '../media/img/wiki/characters/obi.webp'
        ];
        let imgaeCharacters = arrayCharacters[index];
            output += `
            <div class="col-sm-6">
            <div class="card p-3 m-3 cardItems" style="opacity:.8">
            <img class="card-img-top" src=${imgaeCharacters} alt="Card image cap">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content text-center">
            <span style="text-decoration:underline">Gender</span>: ${item.gender}<br>
               <span style="text-decoration:underline">Height</span>: ${item.height}<br>
               <span style="text-decoration:underline">Birth year</span>: ${item.birth_year}<br>
               </div>
               </div>
               </div>`
              })
              
    }
    if(value === 'vehicles'){
      data.results.forEach((item, index) => {
          let arrayVehicles = ['../media/img/wiki/vehicles/sand_crawler.webp',
          '../media/img/wiki/vehicles/t-16_Skyhopper.webp',
          '../media/img/wiki/vehicles/landspeeder.jpg',
          '../media/img/wiki/vehicles/tie_starfighter.jpeg',
          '../media/img/wiki/vehicles/snowspeeder.jpeg',
          '../media/img/wiki/vehicles/tie_Bomber_BF2.webp',
          '../media/img/wiki/vehicles/at-at.jpg',
          '../media/img/wiki/vehicles/at-st.jpg',
          '../media/img/wiki/vehicles/strom_iv_twin.webp',
          '../media/img/wiki/vehicles/sail_barge.webp'
        ];
        let imgaeVehicles = arrayVehicles[index];
            output += `
            <div class="col-sm-6">
            <div class="card p-3 m-3 cardItems" style="opacity:.8">
            <img class="card-img-top" src=${imgaeVehicles} alt="Card image cap">
            <h4 class="card-title text-center">${item.name}</h4>
            <div class="card-content text-center">
            <span style="text-decoration:underline">model</span>: ${item.model}<br>
            <span style="text-decoration:underline">vehicle_class</span>: ${item.vehicle_class}<br>
            <span style="text-decoration:underline">length</span>: ${item.length} meters<br>
            <span style="text-decoration:underline">cargo_capacity </span>: ${item.cargo_capacity } meters<br>
            <span style="text-decoration:underline">manufacturer</span>: ${item.manufacturer}<br>
            <span style="text-decoration:underline">cost</span>: ${item.cost_in_credits} Credits<br>

               </div>
               </div>
            </div>`
        })
        
    }
    results.innerHTML = output
}
// detecta el evento de los botones
document.querySelector("#buttons").addEventListener("click", e =>{
  callApi(e.target.textContent.trim().toLowerCase())
})
//Final de Wiki

//Inicio Ecommerce
//recargar el carrito para que aparezca apenas recarga la pagina
//de esta manera logre que se solucione mi error de que no enseñaba el resultdo
//hasta que agrege otro producto
window.addEventListener("load", function(event) {
  if(localStorage.getItem('carrito')){
    actualizarCarrito()
  }
});

const contenedorProducto = document.getElementById("contenedorProductos")

const contenedorCarrito = document.getElementById("contenedorCarrito")

const botonVaciar = document.getElementById('btnVaciar')

const botonFinalizar = document.getElementById('btnCart')

const precioTotal = document.getElementById('precioTotal')

let carrito = []

if(localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"))
}
//Boton para vaciar el carrito de compra + alerta
botonVaciar.addEventListener('click', () =>{
  carrito.length = 0
  actualizarCarrito()
  localStorage.clear()
  Swal.fire({
    icon: 'success',
    title: 'se vacio correctamente',
    timer: 1500
  })
})
// fin

// Boton finalizar compra y en caso de no tener un producto agregado al carrito
//da alerta ERROR
botonFinalizar.addEventListener('click', () =>{
  if(localStorage.getItem("carrito")){
    carrito.length = 0
    actualizarCarrito()
    localStorage.clear();
    Swal.fire({
      icon: 'success',
      title: 'compra realizada',
      timer: 1500
    })
    
  }else{
    Swal.fire({
      icon: 'error',
      title: 'carrito vacio',
      timer: 1500
    })
  }
})
//llamado a mi array + impresion a div
stockProductos.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('cardProductos')
  div.innerHTML = `
  <img src=${producto.img} alt="">
  <h3>${producto.nombre}</h3>
  <p>${producto.desc}</p>
  <p>talle: ${producto.talle}</p>
  <p class="precioProducto" >precio:$ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="btn btn-dark boton-Agregar">Agregar</button>
  `
  contenedorProducto.appendChild(div)

  const boton = document.getElementById(`agregar${producto.id}`)

  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
  })
  
})

//Agrega un nuevo producto
const agregarAlCarrito = (prodId) =>{
  //En caso de exisitir ese producto la cantidad de aquel producto se suma
  const existe = carrito.some (prod => prod.id === prodId)
  if(existe){
    const prod = carrito.map (prod => {
      if (prod.id === prodId){
        prod.cantidad++
        Toastify({
          text: "Se agrego el producto sin problema",
          duration: 1500,
          gravity : "bottom",
          position : "right",
          avatar : "../media/img/all/icono.webp",
          close : true,
      }).showToast();
      }
    })
  }else{

  const item = stockProductos.find ((prod) => prod.id === prodId)
  carrito.push(item)
  console.log(carrito)
  Toastify({
    text: "Se agrego el producto sin problema",
    duration: 1500,
    gravity : "bottom",
    position : "right",
    avatar : "../media/img/all/icono.webp",
    close : true,
}).showToast();

  }
  actualizarCarrito()
}


const eliminarDelCarrito = (prodId) =>{
  const item = carrito.find ((prod) => prod.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  actualizarCarrito()
}

const actualizarCarrito = () =>{
  contenedorCarrito.innerHTML = ""

  carrito.forEach((prod) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class='productoEnCarrito'>
    <img src=${prod.img}>
    <p>${prod.nombre}</p>
    <p class="carritoPrecio">Precio : $ ${prod.precio}</p>
    <p>Cantidad:<span id="cantidad">${prod.cantidad}</span></p>
    <button onclick ="eliminarDelCarrito(${prod.id})" class="botonEliminar"></button>
    </div>
    <hr class="dropdown-divider" />
    `
    contenedorCarrito.appendChild(div)

    localStorage.setItem('carrito', JSON.stringify(carrito))
  })
  precioTotal.innerText = carrito.reduce((acc,prod)=> acc + prod.precio * prod.cantidad,0)
}



//final Ecommerce