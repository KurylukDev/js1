
const results = document.querySelector("#results")
 function callApi(value){
    fetch(`https://swapi.dev/api/${value}/`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      displayResults(data, value)
    })
    .catch(function(error) { //Elemento que despliega en caso de error
      console.log('Request failed', error)
    });
}

function displayResults(data, value){
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
// event listener for buttons
document.querySelector("#buttons").addEventListener("click", e =>{
  callApi(e.target.textContent.trim().toLowerCase())
})