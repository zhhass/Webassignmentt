$(document).ready(function () {
  // Task 2
  $("#hide").click(function () { $("#vis-text").hide(400); });
  $("#show").click(function () { $("#vis-text").show(400); });
  $("#toggle").click(function () { $("#vis-text").toggle(400); });
  // Task 3
  $("#fin").click(function () { $("#fade-img").fadeIn(600); });
  $("#fout").click(function () { $("#fade-img").fadeOut(600); });
  $("#ftog").click(function () { $("#fade-img").fadeToggle(600); });
  // Task 4
  $("#sdown").click(function () { $("#panel").slideDown(500); });
  $("#sup").click(function () { $("#panel").slideUp(500); });
  $("#stog").click(function () { $("#panel").slideToggle(500); });
});
