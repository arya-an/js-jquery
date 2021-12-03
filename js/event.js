$(document).ready(function(){
  
    // function fnalert(){
    //     alert('welcome')
    // }
    // $('#btnlogin').click(fnalert);
    $('#btnlogin').click(function(){   //for double click dblclick,keypress

    
        var uname=$('#username').val();
        var passw=$('#password').val();
        if (uname==""){
            alert('enter uname');
        }
        else if (passw==""){
            alert('enter password');
        }
        else{
            alert('welcome');
        }
    });
    
});