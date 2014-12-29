$(document).ready(function(){
    // $('.inline-popup').magnificPopup({
    //   type:'inline',
    //   midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    // });


    $("body").css("display", "none");
    $("body").fadeIn();

    $("a").click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $("body").fadeOut(400, newPage);
    });

    function newPage() {
        window.location = newLocation;
    }

});