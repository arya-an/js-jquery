var x;

$(document).ready(function(){

    // different types of basic events

    // $('#txt').keypress(function(){
    //     console.log('key pressed');
    // });
    // $('#txt').keydown(function(){
    //     console.log('key down');
    // });
    // $('#txt').keyup(function(){
    //     console.log('key up');
    // });
    // $('#txt').mousemove(function(){
    //     console.log('mouse moved');
    // });
    // $('#txt').mousedown(function(){
    //     console.log('mouse downed');
    // });
    $('#txt').keyup(function(e){
        x=e;
        console.log(x);
        
    });
    // x.key
    // 'b'
    // x.keyCode
    // 98
    // $('#test').mouseenter(function(){
    //     alert('entered this para');
    // });

    $("input").focus(function(){
        $(this).css("background-color","blue");
    })
    $("input").blur(function(){
        $(this).css("background-color","green");
    });
    $('#mulevent').on({
        mouseenter:function(){
            $(this).css("background-color",'lightblue');
        } ,
        click:function(){
            $(this).css("background-color","red");
        },
        mouseleave:function(){
            $(this).css("background-color","lightgreen");
        },
        dblclick:function(){
            $(this).css("background-color","grey");
        }
    })
   
});