document.getElementById('bot2').onclick = function () {
   document.getElementById("bot2").innerHTML = "¡Gracias por contactarme!";
  }
  
  document.getElementById('env').onclick = function () {
   document.getElementById("enviado").innerHTML = "¡Enviado!";
  }

  document.getElementById('msg').addEventListener("focus", myFunction);

  function myFunction() {
    document.getElementById('msg').style.backgroundColor = "#ABEBC6";
  }

  