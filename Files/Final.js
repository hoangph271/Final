/* global $ */
const starGuard = new Audio('files/music/stars-guardian.mp3');
// ! FIXME: Auto play...?
// starGuard.play();
// starGuard.loop = true;

$(document).ready(() => {
  $("#bgrHead2").slideUp(0);
  $("#logo").hide();
  $("#muteIcon1").hide();
  $("#inGameStore").hide();
  $(".gameItem").hide();
  $("#inGameButt").click(() => {
    $("#merchStore").hide();
    $(".storeItem").hide();
    $("#inGameStore").show();
    $(".gameItem").show();
  });
  $("#merchStoreButt").click(() => {
    $("#merchStore").show();
    $(".storeItem").show();
    $("#inGameStore").hide();
    $(".gameItem").hide();
  });
  $("#Home").mouseenter(() => {
    $("#Home").attr("src", "files/image/raven-2.jpg");
  });

  $("#Home").mouseleave(() => {
    $("#Home").attr("src", "files/image/raven.jpg");
  });

  $("#muteIcon1").click(() => {
    $("#muteIcon1").toggle();
    $("#muteIcon2").toggle();
    starGuard.play();
    return false;
  });
  $("#muteIcon2").click(() => {
    $("#muteIcon1").toggle();
    $("#muteIcon2").toggle();
    starGuard.pause();
    return false;
  });

  $(".nextIcon").click(() => {
    $("#bgrHead1").animate({
      width: 'toggle'
    }, 0);
    $("#logo_biu").fadeToggle("fast");
    $("#bgrHead2").animate({
      width: 'toggle'
    }, 0);
    $("#logo").fadeToggle("fast");
  });
  $(".charCard").mouseenter(() => {
    $(this).css('box-shadow', '3px 3px 3px 3px rgba(0,255,255,0.35)');
  });
  $(".charCard").mouseleave(() => {
    $(this).css('box-shadow', '1px 1px 1px 1px rgb(255,255,255)');
  });
  $("#cCard1").click(() => {
    buzzer1.play();
    return false;
  });
  $("#cCard2").click(() => {
    buzzer2.play();
    return false;
  });
  $("#cCard3").click(() => {
    buzzer3.play();
    return false;
  });
  $("#cCard4").click(() => {
    buzzer4.play();
    return false;
  });
});