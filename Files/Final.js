var starGuard = new Audio('Files/starGuard.mp3');
starGuard.play();
starGuard.loop = true;
$(document).ready(function () {
    $("#bgrHead2").slideUp(0);
    $("#logo").hide();
    $("#muteIcon1").hide();
    $("#inGameStore").hide();
    $(".gameItem").hide();
    $("#inGameButt").click(function () {
        $("#merchStore").hide();
        $(".storeItem").hide();
        $("#inGameStore").show();
        $(".gameItem").show();
    });
    $("#merchStoreButt").click(function () {
        $("#merchStore").show();
        $(".storeItem").show();
        $("#inGameStore").hide();
        $(".gameItem").hide();
    });
    $("#Home").mouseenter(function () {
        $("#Home").attr("src", "Files/Raven3.jpg");
    });

    $("#Home").mouseleave(function () {
        $("#Home").attr("src", "Files/Raven.jpg");
    });

    $("#muteIcon1").click(function () {
        $("#muteIcon1").toggle();
        $("#muteIcon2").toggle();
        starGuard.play();
        return false;
    });
    $("#muteIcon2").click(function () {
        $("#muteIcon1").toggle();
        $("#muteIcon2").toggle();
        starGuard.pause();
        return false;
    });

    $(".nextIcon").click(function () {
        $("#bgrHead1").animate({
            width: 'toggle'
        }, 0);
        $("#logo_biu").fadeToggle("fast");
        $("#bgrHead2").animate({
            width: 'toggle'
        }, 0);
        $("#logo").fadeToggle("fast");
    });
    $(".charCard").mouseenter(function () {
        $(this).css('box-shadow', '3px 3px 3px 3px rgba(0,255,255,0.35)');
    });
    $(".charCard").mouseleave(function () {
        $(this).css('box-shadow', '1px 1px 1px 1px rgb(255,255,255)');
    });
    $("#cCard1").click(function () {
        buzzer1.play();
        return false;
    });
    $("#cCard2").click(function () {
        buzzer2.play();
        return false;
    });
    $("#cCard3").click(function () {
        buzzer3.play();
        return false;
    });
    $("#cCard4").click(function () {
        buzzer4.play();
        return false;
    });
});
