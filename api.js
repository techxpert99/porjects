$(document).ready(function(){

$('#name').on("input",function(){
    var val = $('#name').val()
    var num = 0
    var pow = 1
    for(var index=val.length-1; index>=0; index--)
    {
        num += pow*val.charcodeAt(index);
        pow*=10;
    }
    $('#num').html(toString(num));
})

});