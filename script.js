function onKeyPressBlockChars(e, numero) {
    const key = window.event ? e.keyCode : e.which;
    const keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (numero.indexOf(".") != -1 && keychar == ".") {
      return false;
    } else {
      return reg.test(keychar);
    }
  }
  function calculaPorcentajes(numero) {
    document.getElementById("porcentaje21").value = Math.floor(numero * 21) / 100;
    document.getElementById("porcent25").value = Math.floor(numero * 21) / 100;
    document.getElementById("porcent15").value = Math.floor(numero * 100) / 100;
  }
  