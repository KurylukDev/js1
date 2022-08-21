var sectionPeople = document.getElementById('starwarsPeople');
var modal = document.getElementById('exampleModal');
// Solicitud de datos al API SWAPI
// fetch('https://swapi.co/api/people/')
fetch("https://swapi.dev/api/films/")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log('Request successful', data);
    let films = data.results;
    console.log(films);
    getFilms(films);

  })
  .catch(function(error) { //Elemento que despliega en caso de error
    console.log('Request failed', error)
  });


const getFilms = (films) => {
  console.log(films);
  let output = ``;
  films.forEach(function(element, index) {
    let titleFilm = element.title;
    let episodeFilm = element.episode_id;
    let characters = element.characters;
    let arrayFilms = ['./assets/images/movies/episodeIV.jpg',
      './assets/images/movies/episodeII.jpg',
      './assets/images/movies/episodeI.jpg',
      './assets/images/movies/episodeIII.jpg',
      './assets/images/movies/episodeVI.jpg',
      './assets/images/movies/episodeV.jpg',
      './assets/images/movies/episodeVII.jpg'
    ];
    let imageFilms = arrayFilms[index];
    // Plantilla para mostrar los datos
    output +=
      `<div class="card stylePeople" style="width: 13rem;">
        <img class="card-img-top" src=${imageFilms} alt="Card image cap">
        <div>
          <div class="card-body">
            <h4 class="card-title">Title:</h4>
            <h5 class="card-title">${titleFilm}</h5>
            <p class="card-text">Episode: ${episodeFilm}</p>
            <h4 class="card-title">Characters:</h4>
            <a data-detail="${characters[0]}" data-toggle="modal" data-target="#exampleModal">${characters[0]}</a>
            <a data-detail="${characters[1]}"  data-toggle="modal" data-target="#exampleModal">${characters[1]}</a>
            <a data-detail="${characters[2]}"  data-toggle="modal" data-target="#exampleModal">${characters[2]}</a>
          </div>
        </div>
      </div>`

    //Imprime plantilla en HTML
    sectionPeople.innerHTML = output;

    // Obteniendo el arreglo de elementos anchor
    const elementosA = document.getElementsByTagName("a");
    console.log(elementosA);
    console.log(elementosA.length);



    for (let i = 0; i <= elementosA.length - 1; i++) {
      elementosA[i].onclick = function ahora() {
        let urlCharacter = this.getAttribute('data-detail');
        // Haciendo petición con la url obtenida
        fetch(`${urlCharacter}`).then(function(response) {
            return response.json();
          })
          .then(function(dataChar) {
            console.log(dataChar);
            modalInfo(dataChar);
          }).catch(function(errorChar) {
            console.log('Error!!!', errorChar);
          });
      };
    }
  }); //Fin del ForEach de films
} //fin función films

const modalInfo = (output) => {
  // Obteniendo los datos de cada personaje
  let nameChar = output.name;
  let birthChar = output.birth_year;
  let genChar = output.gender;
  let heightChar = output.height;
  let massChar = output.mass;
  let hairChar = output.hair_color;
  let skinChar = output.skin_color;
  let urlChar = output.url;
  console.log(urlChar);
  let arrayNumA = urlChar.charAt(28);
  console.log(typeof(arrayNumA));
  let arrayNumb = urlChar.charAt(29);
  console.log(arrayNumb);

  let arrayNum = urlChar.charAt(28) - 1;
  console.log(arrayNum);
  if (urlChar.charAt(28) === "1" && urlChar.charAt(29) === "0") {
    arrayNum = "9";
  }
  console.log(arrayNum);

  let arrayImage = ['./assets/images/characters/luke.jpg', './assets/images/characters/cp3o.jpg',
    './assets/images/characters/r2d2.jpg', './assets/images/characters/dart.jpg',
    './assets/images/characters/leia.jpg', './assets/images/characters/owen.jpg',
    './assets/images/characters/beru.jpg', './assets/images/characters/R5-D4.jpg',
    './assets/images/characters/Biggs.jpeg', './assets/images/characters/obi.jpg'
  ];

  let imgSRC = arrayImage[arrayNum];

  // Modificando el MODAL
  $('#exampleModal').on('show.bs.modal', function(event) {
    let modal = $(this);
    modal.find('.modal-title').text(nameChar);
    modal.find('#imageChar').attr("src", `${imgSRC}`);
    modal.find('#birth').text(`Birth Year: ${birthChar}`);
    modal.find('#gender').text(`Gender: ${genChar}`);
    modal.find('#height').text(`Height: ${heightChar}`);
    modal.find('#mass').text(`Mass: ${massChar}`);
    modal.find('#hair-color').text(`Hair-color: ${hairChar}`);
    modal.find('#skin-color').text(`Skin-color: ${skinChar}`);

  });
};
// Petición para los planetas usando jquery

$(document).ready(function (){
  dataRequest(urlStarWars);
});

const urlStarWars ="https://swapi.dev/api/planets/";

function dataRequest (url) {
  fetch(`${url}`).then(response => {
    response.json(). then( dataPlanets => {
      let planets = dataPlanets.results;
      let dataTemplate = ``;
      console.log(planets);
      planets.forEach(function (item, index, array){
        // Arreglo con las imágenes de cada planeta
        let arrayImages = [
          "./assets/images/planets/Aldera_City.png","./assets/images/planets/yavin_iv.jpg",
          "./assets/images/planets/hoths.jpg","./assets/images/planets/Dagobah.jpg",
          "./assets/images/planets/Bespin.png","./assets/images/planets/Endor.jpg",
          "./assets/images/planets/Naboo.png", "./assets/images/planets/Coruscant.jpg",
          "./assets/images/planets/Kamino.png","./assets/images/planets/Geonosis.jpeg",
        ];

        let planetName = dataPlanets.results[index].name;
        let planetDiam = dataPlanets.results[index].diameter;
        let planetClim = dataPlanets.results[index].climate;
        let planetGrav = dataPlanets.results[index].gravity;
        let planetPopulation = dataPlanets.results[index].population;
        let planetRot = dataPlanets.results[index].rotation_period;
        let planetOrb = dataPlanets.results[index].orbital_period;
        let planetSurface = dataPlanets.results[index].surface_water;
        let planetTerrain = dataPlanets.results[index].terrain;
        let planetImages = arrayImages[index];
        dataTemplate +=
        `<div class="card planets-div" id="planet-Info" style ="width:80%">
          <img class="card-img-top" src=${planetImages} alt="Card image cap" >
          <div class="card-body">
            <h1 class="card-title">Planet's Name : ${planetName}</h1>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Diameter: ${planetDiam}</li>
              <li class="list-group-item">Climate : ${planetClim}</li>
              <li class="list-group-item">Gravity : ${planetGrav}</li>
              <li class="list-group-item">Population : ${planetPopulation}</li>
              <li class="list-group-item">Rotation Period : ${planetRot}</li>
              <li class="list-group-item">Orbital Period : ${planetOrb}</li>
              <li class="list-group-item">Surface Water : ${planetSurface}</li>
              <li class="list-group-item">Terrain: ${planetTerrain}</li>
            </ul>
          </div>
        </div>`;

        $("#planets-Info").html(dataTemplate);
      });
    });
  });
};




// Petición para los vehículos
fetch('https://swapi.dev/api/vehicles/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const vehicles = data.results;
    let output2 = ``;
    console.log(vehicles);

    vehicles.forEach((item, index) => {
     console.log(index);
     let arrayImages = ["./assets/images/vehicles/Sand_Crawler.jpg", "./assets/images/vehicles/T-16_skyhopper.gif",
                        "./assets/images/vehicles/X_34_landspeeder.jpg", "./assets/images/vehicles/TIE_LN_starfighter.jpg",
                        "./assets/images/vehicles/Snowspeeder.jpg", "./assets/images/vehicles/TIE_bomber.jpg",
                        "./assets/images/vehicles/AT_AT.jpg", "./assets/images/vehicles/AT_ST.jpg",
                        "./assets/images/vehicles/Storm_IV_Twin_Pod_cloud_car.jpg", "./assets/images/vehicles/Sail_barge.jpg"];


     const name = item.name;
     const model = item.model;
     const manufacturer = item.manufacturer;
     const costInCredits = item.cost_in_credits;
     const images = arrayImages[index];
     console.log(images);


     output2+=

     `<div class="card stylePeople" style="width: 13rem;">
       <img class="card-img-top" src=${images} alt="Card image cap">
       <div>
         <div class="card-body">
           <h4 class="card-title">Name:</h4>
           <h5 class="card-title">${name}</h5>
           <p class="card-text">Model: ${model}</p>
           <p class="card-text">Manufacturer: ${manufacturer}</p>
           <p class="card-text">Cost: ${costInCredits}</p>
         </div>
       </div>
     </div>`

  $("#vehicles-Info").html(output2);
  });

  })
  .catch(function(error) {
    //console.log('Request failed', error)
  });

  /////////

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="icon" type="image/png" href="./assets/icon/bb8.png" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Star Wars</title>
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <audio id="audio" src="audio/starwars.mp3" autoplay="true" loop="true"></audio>
        <img class="title" src="https://fontmeme.com/permalink/180305/c551224eb6b129cf915864fd08f6b41f.png" alt="star-wars-font" border="0" />
      </div>

      <div class="row">
        <h1 class="section-title">Películas</h1>
      </div>

      <section id="starwarsPeople">
        <div class="row">
          <!-- <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                    </button>
                </div>
            </div> -->
        </div>
      </section>

      <section id="planets">
        <div class="row">
          <h1 class="section-title">Planets</h1>
          <div class="planets-div" id="planets-Info"></div>
        </div>
      </section>

      <section id="vehicles">
        <div class="row">
          <h1 class="section-title">Vehicles</h1>
          <div class="vehicles-div" id="vehicles-Info"></div>
        </div>
      </section>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel"></h4>
              <div class="imagecont">
                <img id="imageChar" src="" alt="" />
              </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p id="birth"></p>
              <p id="gender"></p>
              <p id="height"></p>
              <p id="mass"></p>
              <p id="hair-color"></p>
              <p id="skin-color"></p>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
  </body>
</html>


////////

body {
    background-image: url(../assets/images/galaxia.png);
    background-size: contain;
 }
 
 #imageChar {
   width: 100%;
   display: block;
   padding-left: 10%;
 }
 
 a {
   font-size: 11px;
   font-style: italic;
 }
 
 p {
   text-align: center;
 }
 
 .card-title{
   text-align: center;
 }
 .title {
     padding: 4%;
     text-align: center;
     width: -webkit-fill-available;
 }
 
 .modal-title{
   text-align: center;
   font-size: 40px;
 }
 
 .planets-div {
   width: 80%;
   margin: 2% 0 2% 10%;
 }
 
 .section-title{
   color: white;
   font-size: 100px;
   padding-left: 10%;
   padding-top: 5%;
 }
 .stylePeople {
   margin-top: 5%;
   margin-left: 3.5%;
   display: inline-block;
 }
 
 .vehicles-div{
   padding-bottom: 10%;
 }