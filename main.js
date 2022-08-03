const dolar = document.querySelector("#dolar")

//API DOLAR

fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, blue, ccb, mep, ccl}) => {
        dolar.innerHTML = `<div class="contenido">
		<p>Blue: <span>$${blue}</span> </p>
		<p>Oficial: <span>$${oficial}</span> </p>
		<p>Solidario: <span>$${solidario}</span> </p>
		<p>Mep: <span>$${mep}</span> </p>
		<p>CCL: <span>$${ccl}</span> </p>
		<p>CCB: <span>$${ccb}</span> </p></div>
        `
    })
setInterval(() => {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, blue, ccb, mep, ccl}) => {
        dolar.innerHTML = `<div class="contenido">
		<p>Blue: <span>$${blue}</span> </p>
		<p>Oficial: <span>$${oficial}</span> </p>
		<p>Solidario: <span>$${solidario}</span> </p>
		<p>Mep: <span>$${mep}</span> </p>
		<p>CCL: <span>$${ccl}</span> </p>
		<p>CCB: <span>$${ccb}</span> </p></div>
        `
    })
}, 30000)

//API NASA
//Probe otra forma que encontre en internet y me gustaria saber tu opinion sobre esta forma
//ami me parecio mas rentable ya que podes cambiar la api desde la Const y no tenes que ir a fetch

window.addEventListener("load", obtenerDatos) //para que cargue la api apenas cargue la pagina

//Prueba con funcion de =>
function obtenerDatos(){
	const apiKey = "AG37wIVmwCdcaK7diiGf9wphlfryY3j93dPekAjh" //const de apikey

	const ruta = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}` // ruta de la api + apiKey

	const nasa = document.querySelector("#nasa")

	fetch(ruta)
	.then(response => response.json())
	.then(({date, explanation, url,title}) => {
		nasa.innerHTML = `
		<h2>${title}</h2>
		<p>${explanation}</p>
		<img src="${url}"></img>
		<p>${date}</p>
		`
	})
} 
//Fin API NASA

