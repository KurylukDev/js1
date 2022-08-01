const btnSubmit = document.querySelector("#btnSubmit")
btnSubmit.addEventListener("click", () => {

    Toastify({
        text: "Se agrego el producto sin problema",
        duration: 3000,
        gravity : "top",
        position : "right",
        avatar : "../img/alien.webp",
        close : true,
    }).showToast();

})

/*Elegi toastify porque me parecio que era perfecto ya que era un alerta simple
y para nada molesta para el usuario*/

//PD: la otra me parecio muy feo

