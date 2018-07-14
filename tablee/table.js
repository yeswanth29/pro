$(document).ready(function(){
    console.log("loaded");
    $('#start-btn').click(function(){
        console.log("hai");
        $('start').hide();
    });
    $(document).keypress(function(e){

    var a=e.key;
    var b = Math.floor(Math.random() * 3)+1;
    var playerpo = $('#onee').position();
    var playerpo1 = $('#twoo').position();
    $("#onee"){
    if(b==1){
        transform:translate(playerpo.x,playerpo.y);}
    }
    $("#twoo"){
    if(b==1){
        transform:translate(playerpo1.x,playerpo1.y);
    }

    if(a==b){
        alert("u won");
    }
    else{
        alert("u lost");
    }
});


});
