$(document).ready(function(){
    var leftval=0;
    var topval=0;
    $(document).keydown(function(e){
        var action=e.keyCode;

        console.log(e.keyCode);

        if (action==37){
            // move left
            leftval=leftval-10;
            $('#tom').css("left",leftval);
        }
        else if(action==39){
            // move right
            leftval=leftval+10;
            $('#tom').css("left",leftval);

        }
        else if(action==38){
            // move up
            topval = topval -10;
            $('#tom').css("top",topval);
        }
        else if(action==40){
            // move down
            topval = topval + 10;
            $('#tom').css("top",topval);
        }
    });

});