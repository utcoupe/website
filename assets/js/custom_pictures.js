(function($){
  $(function(){
    function closeBigPicture () {
        $("#overlay").fadeOut();
        return false;
    }

    function openBigPicture (evt) {
        $("#overlay").fadeIn();
    }

    function updateBigPicture (article) {
        // TODO
    }

    function previousBigPicture (evt) {
        // TODO
        // updateBigPicture (article);
    }

    function nextBigPicture (evt) {
        // TODO
        // updateBigPicture (article);
    }

    $("#close-big-picture").click(closeBigPicture);
    $("#previous-big-picture").click(previousBigPicture);
    $("#next-big-picture").click(nextBigPicture);
    $("#overlay").click(closeBigPicture);
    $("#big-picture").on("click", function(evt) {
        evt.stopPropagation();
    });

    $("a.open-big-picture").click(function (evt) {
        updateBigPicture(evt);
        openBigPicture(evt);
        return false;
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
