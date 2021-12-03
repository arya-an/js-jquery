$(document).ready(function(){
    $('#fadein').click(function(){
        $('#div1').fadeIn("fast");
        $('#div2').fadeIn("slow");
        $('#div3').fadeIn(500);

    });
    $('#fadeout').click(function(){
        $('#div1').fadeOut("fast");
        $('#div2').fadeOut("slow");
        $('#div3').fadeOut(500);

    });
    $('#toggle').click(function(){
        $('#div1').fadeToggle("fast");
        $('#div2').fadeToggle("slow");
        $('#div3').fadeToggle(3000);

    });
    $('#fadeto').click(function(){
        $('#div1').fadeTo("slow",0.15);
        $('#div2').fadeTo("slow",0.8);
        $('#div3').fadeTo("slow",0.2);

    });
});