$(document).ready(function(){

$('#name').on("input",function(){
    var val = $('#name').val()
    var num = 0
    for(var index=val.length-1; index>=0; index--)
    {
        num <<= 2;
        num += pow*val.charCodeAt(index);
    }
    alert(num)
    $('#num').html('');
})

});