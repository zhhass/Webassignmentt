$(document).ready(function () {
  var base = { left: 0, top: 0, width: 60, height: 60, opacity: 1 };

  // Task 8
  $("#a8").click(function () {
    $("#b8").animate({ left: "250px", width: "120px", height: "120px" }, 800);
  });
  $("#r8").click(function () { $("#b8").stop(true).animate(base, 400); });

  // Task 9: each animate() waits in the queue for the previous one
  $("#a9").click(function () {
    $("#b9").stop(true)
      .animate({ left: "250px" }, 600)
      .animate({ top: "100px" }, 600)
      .animate({ width: "30px", height: "30px" }, 600)
      .animate(base, 800);
  });

  // Task 10: one call, several properties
  $("#a10").click(function () {
    $("#b10").stop(true).animate({ left: "250px", top: "60px", width: "110px", height: "110px", opacity: 0.4 }, 1200);
  });
  $("#r10").click(function () { $("#b10").stop(true).animate(base, 600); });
});
