$(document).ready(function(){
    $("#btn1").click(function(){
        $('#p1').hide("slow");
    });
    $("#btn2").click(function(){
        $('#p1').show("slow"); // you can use slow fast or in milli second
    });

    // toggle method

    $("#btn3").click(function(){
        $("#p2").toggle("slow");
    });
});

