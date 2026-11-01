$(document).ready(function () {
  $(".acc-body").hide();

  $(".acc-head").on("click", function () {
    var $body = $(this).next(".acc-body");
    var opening = !$body.is(":visible");
    // close the others, then toggle this one
    $(".acc-body").not($body).slideUp(300).prev().attr("aria-expanded", "false").removeClass("open");
    $body.stop(true, true).slideToggle(300);
    $(this).attr("aria-expanded", opening).toggleClass("open", opening);
  });

  $("#open-all").click(function () { $(".acc-body").slideDown(300); $(".acc-head").addClass("open").attr("aria-expanded", "true"); });
  $("#close-all").click(function () { $(".acc-body").slideUp(300); $(".acc-head").removeClass("open").attr("aria-expanded", "false"); });
});
