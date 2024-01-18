function manejarKeyPress(event) {
    var codigoTecla = event.keyCode || event.which;
    if (codigoTecla === 13) {
      check();
    }
  }
  
  function check() {
    let guess = document.getElementById("guess").value.toUpperCase();
    if (guess === "PENGUIN") {
      document.getElementById("answer1").innerText = "Correcto!";
      document.getElementById("answer1").style.visibility = "visible";
      document.getElementById("answer1").style.backgroundColor = "blue";
    } else {
      document.getElementById("answer1").innerText = "Incorrecto";
      document.getElementById("answer1").style.visibility = "visible";
      document.getElementById("answer1").style.backgroundColor = "red";
    }
  }
  
  function reset() {
    document.getElementById("guess").value = "";
    document.getElementById("answer1").style.visibility = "hidden";
  }
  
  window.addEventListener("keypress", manejarKeyPress);
  