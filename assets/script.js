$(document).ready(function(){

    // Fading of links. Makes some browsers laggy, so it has been removed
    // $("body").css("display", "none");
    // $("body").fadeIn();

    // $("a").click(function(event) {
    //     event.preventDefault();
    //     newLocation = this.href;
    //     $("body").fadeOut(400, newPage);
    // });
    
    // MP3 popups in media.html
    $("a.popup-click").click(function() {
        var mediaBox = $(this).attr("href");
        
        $(mediaBox).fadeIn(300);
        $(mediaBox).css({ 
            "margin-top": 0,
            "margin-left": -100,
        });

        $("body").append('<div class="popup-overlay"></div>');
        $(".popup-overlay").fadeIn(300);
        
        return false;
    });
    
    $(".popup-overlay").live("click", function() { 
      $(".popup-overlay, .popup-window").fadeOut(300, function() {
        $(".popup-overlay").remove();  
    }); 
    return false;
    });
});