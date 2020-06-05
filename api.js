$(document).ready(function(){

$('#name').on("input",function(){
    var val = $('#name').val()
    var num = 0
    var pow = 1
    for(index=len(val)-1; index>=0; index--)
        num += pow*number(val[index]);
    $('#num').html(num);
})

});