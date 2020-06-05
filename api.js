$(document).ready(function(){

$('#name').on("input",function(){
    var val = $('#name').val()
    var num = 0
    var pow = 1
    for(var index=val.length-1; index>=0; index--)
    {
        num += pow*val.charCodeAt(index);
        pow*=10;
    }
    alert(num)
    $('#num').html('');
})

});