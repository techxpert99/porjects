$(document).ready(function(){

$('#name').on("input",function(){
    var val = $('#name').val()
    var num = 0
    for(var index=val.length-1; index>=0; index--)
    {
        //num <<= 8;
        num += val.charCodeAt(index);
    }
    alert(num)
    $('#num').html('');
})

});