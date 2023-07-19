function changeDiv(opcao) {
  var divs = document.querySelectorAll('div[id^="div"]');
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add('hide');
  }
  document.getElementById('div' + opcao).classList.remove('hide');
}



/*function changeDiv(opcao) {
      // Esconder todas as divs
      var divs = document.getElementsByClassName("hide");
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
      }

      // Mostrar a div selecionada
      var divSelecionada = document.getElementById("div" + opcao);
      divSelecionada.style.display = "block";
    } */ 