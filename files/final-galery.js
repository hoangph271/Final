/* global $ */
$(document).ready(function () {
  $("#bgrHead2").slideUp(0);
  $("#logo").hide();
  $("#Home").mouseenter(function () {
    $("#Home").attr("src", "/files/image/raven-2.jpg");
  });

  $("#Home").mouseleave(function () {
    $("#Home").attr("src", "/files/image/raven.jpg");
  });

  $(".galImg").click(function () {
    $("#showingImg").fadeOut(50).attr("src",$(this).attr("src")).fadeIn(500);
  });
});
