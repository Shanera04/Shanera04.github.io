var main = function() { 

 

    var volume; 

 

    //PLAY button 

    $('#play').click(function(){ 

        $('#message').text("Playing track"); 

        $('#player').trigger("play"); 

    }); 



    //PAUSE button 

    $('#pause').click(function(){ 

        $('#message').text("Track paused"); 

        $('#player').trigger("pause"); 

    }); 

 

    //STOP button 

    //Set the Current Time to 0 

    //and then pause the track 

    $('#stop').click(function(){ 

        $('#message').text("Track stopped"); 

        $("#player").prop("currentTime",0); 

        $('#player').trigger("pause"); 

    }); 

 

    //MUTE button 
var mute;
    $('#mute').click(function(){ 

        $('#message').text("Track muted"); 

        $("#player").prop("muted",true); 

    }); 

 

    //UNMUTE button 
var unmute;
    $('#unmute').click(function(){ 

        $('#message').text("Playing track"); 

        $("#player").prop("muted",false); 

    }); 

 

    //VOLUME UP button 

    $('#up').click(function(){ 
        $("player").trigger("Vol Up")

        volume = $("#player").prop("volume"); 

        $("#player").prop("volume",0.2); 
        $("message").text("Volume Up")





    }); 

     //VOLUME DOWN button 

    $('#up').click(function(){ 
        $("player").trigger("Vol Down")

        volume = $("#player").prop("volume"); 

        $("#player").prop("volume",0.1); 
        $("message").text("Volume Down")



        

    }); 
}
$(document).ready(main);
