$(document).ready(function() {
  var desayunos = $("#btn-desayunos");
  var postres = $("#btn-postres");
  var ensaladas = $("#btn-ensaladas");
  var botanasAntojitos = $("#btn-botanasAntojitos");
  var comidas = $("#btn-comidas");
  var bebidas = $("#btn-bebidas");

  var cajaDesayunos = $("#desayunos");
  var cajaPostre = $("#postres");
  var cajaEnsaladas = $("#ensaladas");
  var cajaBotanasAntojitos = $("#botanasAntojitos");
  var cajaComidas = $("#comidas");
  var cajaBebidas = $("#bedidas");

  desayunos.click(function() {
    cajaPostre.hide();
    cajaEnsaladas.hide();
    cajaBotanasAntojitos.hide();
    cajaComidas.hide();
    cajaBebidas.hide();
    cajaDesayunos.toggle(1000);
  });
  postres.click(function() {
    cajaDesayunos.hide();
    cajaEnsaladas.hide();
    cajaBotanasAntojitos.hide();
    cajaComidas.hide();
    cajaBebidas.hide();
    cajaPostre.toggle(1000);
  });
  ensaladas.click(function() {
    cajaDesayunos.hide();
    cajaPostre.hide();
    cajaBotanasAntojitos.hide();
    cajaComidas.hide();
    cajaBebidas.hide();
    cajaEnsaladas.toggle(1000);
  });
  botanasAntojitos.click(function() {
    cajaDesayunos.hide();
    cajaEnsaladas.hide();
    cajaPostre.hide();
    cajaComidas.hide();
    cajaBebidas.hide();
    cajaBotanasAntojitos.toggle(1000);
  });

  comidas.click(function() {
    cajaDesayunos.hide();
    cajaEnsaladas.hide();
    cajaPostre.hide();
    cajaBotanasAntojitos.hide();
    cajaBebidas.hide();
    cajaComidas.toggle(1000);
  });
  bebidas.click(function() {
    cajaDesayunos.hide();
    cajaEnsaladas.hide();
    cajaPostre.hide();
    cajaBotanasAntojitos.hide();
    cajaComidas.hide();
    cajaBebidas.toggle(1000);
  });
});

window.onload = function() {
  $("#load").fadeOut();
  $("body").removeClass("hidden");
};
