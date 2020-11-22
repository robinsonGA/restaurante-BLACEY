$(document).ready(function() {
  var desayunos = $("#btn-desayunos");
  var postres = $("#btn-postres");
  var ensaladas = $("#btn-ensaladas");
  var botanasBebidas = $("#btn-botanasBebidas");
  var comidas = $("#btn-comidas");

  var cajaDesayunos = $("#desayunos");
  var cajaPostre = $("#postres");
  var cajaEnsaladas = $("#ensaladas");
  var cajaBotanasBebidas = $("#botanasBebidas");
  var cajaComidas = $("#comidas");

  desayunos.click(function() {
    cajaPostre.hide();
    cajaEnsaladas.hide();
    cajaBotanasBebidas.hide();
    cajaComidas.hide();
    cajaDesayunos.toggle(1000);
  });
  postres.click(function() {
    cajaDesayunos.hide();
    cajaEnsaladas.hide();
    cajaBotanasBebidas.hide();
    cajaComidas.hide();
    cajaPostre.toggle(1000);
  });
  ensaladas.click(function() {
    cajaDesayunos.hide();
    cajaPostre.hide();
    cajaBotanasBebidas.hide();
    cajaComidas.hide();
    cajaEnsaladas.toggle(1000);
  });
  botanasBebidas.click(function() {
    cajaDesayunos.hide();
    cajaEnsaladas.hide();
    cajaPostre.hide();
    cajaComidas.hide();
    cajaBotanasBebidas.toggle(1000);
  });

  comidas.click(function() {
    cajaDesayunos.hide();
    cajaEnsaladas.hide();
    cajaPostre.hide();
    cajaBotanasBebidas.hide();
    cajaComidas.toggle(1000);
  });
});

window.onload = function() {
  $("#load").fadeOut();
  $("body").removeClass("hidden");
};
