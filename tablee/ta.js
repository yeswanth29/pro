$(document).ready(function(){
    console.log("loaded");
    $('#smil').hide();
    $('#start-btn').click(function(){
        console.log("hai");
        $('#start-btn').remove();
    });
    $(document).keypress(function(e){

    var a=e.key;
    var b = Math.floor(Math.random() * 5)+1;

    if(b==1){
        $('#twoo').remove();
        $('#three').remove();
        $('#four').remove();


    }
    if(b==2){
        $('#onee').remove();
        $('#four').remove();
        $('#three').remove();

    }
    if(b==3){
        $('#onee').remove();
        $('#twoo').remove();
        $('#four').remove();
    }
    if(b==4){
        $('#onee').remove();
        $('#twoo').remove();
        $('#three').remove();
    }
    if(a==b){
        $('#smil').show();
        }
    else{
        alert("You Lost");
    }
});


});
