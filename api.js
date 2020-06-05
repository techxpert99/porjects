$(document).ready(function(){

$('#name').on("input",function(){
    var val = $('#name').val()
    var num = 0
    var pow = 1
    for(char in val){
        alert(val[char]);
    }

    $('#num').html($('#name').val());
})

});