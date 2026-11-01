$(document).ready(function () {
  // Task 5
  var n = 2;
  $("#append").click(function () { $("#list").append("<li>Item " + (++n) + " (appended)</li>"); });
  $("#prepend").click(function () { $("#list").prepend("<li>Item " + (++n) + " (prepended)</li>"); });
  $("#remove").click(function () { $("#list li:last").remove(); });

  // Task 6
  var imgs = ["https://picsum.photos/id/1011/300/180", "https://picsum.photos/id/1018/300/180"], i = 0;
  var links = ["https://jquery.com", "https://api.jquery.com"], j = 0;
  function showHref() { $("#href-now").text("(" + $("#link").attr("href") + ")"); }
  showHref();
  $("#b-src").click(function () { i = 1 - i; $("#pic").attr("src", imgs[i]); });
  $("#b-href").click(function () {
    j = 1 - j;
    $("#link").attr("href", links[j]).text(links[j].replace("https://", ""));
    showHref();
  });

  // Task 7: live preview
  $("#name").on("input", function () { $("#out-name").text($(this).val() || "—"); });
  $("#email").on("input", function () { $("#out-email").text($(this).val() || "—"); });
});
