$(document).ready(function(){

$('#name').on("input",function(){
    $('#num').html($('#name').val());
})

});