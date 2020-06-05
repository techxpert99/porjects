$(document).ready(function(){

$('#name').on("input",function(){
    $('#num').innerHTML($('#name').val());
})

});