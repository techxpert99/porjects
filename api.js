$(document).ready(function(){

$('#name').on("input",function(){
    $('#num').val($('#name').val)
})

});