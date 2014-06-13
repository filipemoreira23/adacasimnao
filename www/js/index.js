$(document).ready(function(){
    var fader = $(".fader");
    var context = $(".context-menu");
    var thumbs = $("#thumbs");
    fader.fadeOut(0);
    context.slideUp(0);
    context.height(context.width());

    var sound = document.createElement('audio');

    $("#yes").click(function(){
        showContext();
        thumbs.attr("src","img/yes.png");
        sound.setAttribute('src', 'res/sound/sim.mp3');
        sound.play();
    });

    $("#no").click(function(){
        showContext();
        thumbs.attr("src","img/no.png");
        sound.setAttribute('src', 'res/sound/nao.mp3');
        sound.play();
    });

    fader.click(function(){
        hideContext();
    });

    context.click(function(){
        hideContext();
    });

    function showContext(){
        fader.fadeIn(200);
        context.show(300);
    }

    function hideContext(){
        fader.fadeOut(100);
        context.slideUp(100);
    }
});