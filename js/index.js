$(document).ready(function () {
  console.log("jQuery is ready!");
  var original = { title: $("#demo-title").text(), box: $("#demo-box").html() };

  $("#b-text").on("click", function () {
    $("#demo-title").text("Changed with .text()");          // by ID
    $(".demo-text").text("Text changed by class selector");  // by class
  });
  $("#b-html").on("click", function () {
    $("#demo-box").html("<strong>Bold</strong> and <em>italic</em> set with .html()");
  });
  $("#b-css").on("click", function () {
    $("p").css({ color: "#0e7c86", "font-weight": "800" });   // by tag
    $("#demo-box").css({ background: "#0e7c86", color: "#fff", padding: "20px" });
  });
  $("#b-reset").on("click", function () {
    $("#demo-title").text(original.title);
    $(".demo-text").each(function (i) { $(this).text(["Paragraph one (class)", "Paragraph two (class)"][i]); });
    $("#demo-box").html(original.box).removeAttr("style");
    $("p").removeAttr("style");
  });
});
