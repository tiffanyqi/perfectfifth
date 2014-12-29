$(document).ready(function(){
    // $('.inline-popup').magnificPopup({
    //   type:'inline',
    //   midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    // });


    $("body").css("display", "none");
    $("body").fadeIn("slow");

    $("a").click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $("body").fadeOut(700, newPage);
    });

    function newPage() {
        window.location = newLocation;
    }

});