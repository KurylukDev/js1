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

