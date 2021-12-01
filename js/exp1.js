$(document).ready(function(){
    // alert('welcome')
    $("input[type='text']").val("Welcome.")
    $('#test').html('<b>hello</b>')
    // $('input[type="checkbox"]').attr('checked','checked')
    $('input[type="checkbox"]').prop("checked",false)
    $('#idname').attr('type','password')
    $("a").css({"background-color":"yellow","color":"green","font-weight":1000})
});