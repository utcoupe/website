(function($){
  $(function(){
    var currentArticle = null;
    var currentArticleIdx = -1;
    var allArticles = $("#main").find("article");
    var overlayOn = false;

    function resizePictureDiv() {
        $("#image").width("auto");
        $("#image").width($("#image img").width());
    }

    function closeBigPicture () {
        $("#overlay").fadeOut();
        overlayOn = false;
        return false;
    }

    function openBigPicture () {
        overlayOn = true;
        $("#image").width("auto");
        $("#overlay").fadeIn(resizePictureDiv);
    }

    function updateBigPicture (article) {
        currentArticle = article;
        $("#big-picture").find("img").attr("src", $(article).find("img").first().attr("src"));
        $("#big-picture").children("h3").text($(article).find("h3").first().text());
        $("#big-picture").children("p").text($(article).find("p").first().text());
        resizePictureDiv();

        if (currentArticleIdx == -1) {
            // Find article idx
            let i;
            var allArticles = $("#main").find("article");
            for (i=0; i < allArticles.length; i++) {
                if (allArticles[i] == currentArticle) {
                    break;
                }
            }
            if (i == allArticles.length)
                i = 0;
            currentArticleIdx = i;
        }
    }

    function previousBigPicture () {
        currentArticleIdx--;
        if(currentArticleIdx == -1)
            currentArticleIdx = allArticles.length - 1;
        updateBigPicture(allArticles[currentArticleIdx]);
        return false;
    }

    function nextBigPicture () {
        currentArticleIdx++;
        if(currentArticleIdx == allArticles.length)
            currentArticleIdx = 0;
        updateBigPicture(allArticles[currentArticleIdx]);
        return false;
    }

    $("#close-big-picture").click(closeBigPicture);
    $("#previous-big-picture").click(previousBigPicture);
    $("#next-big-picture").click(nextBigPicture);
    $("#overlay").click(closeBigPicture);
    $("#big-picture").on("click", function(evt) {
        evt.stopPropagation();
    });

    $("a.open-big-picture").click(function (evt) {
        article = $(evt.currentTarget).parents("article")[0]
        updateBigPicture(article);
        openBigPicture();
        return false;
    });

    $("#overlay").css("display", "flex").hide();

    $(window).resize(resizePictureDiv);

    $( "html" ).keypress(function( event ) {
        if (!overlayOn) {
            return;
        }

        if ( event.which == 13 ) {
            event.preventDefault();
        }

        if (event.key=="ArrowRight") {
            nextBigPicture();
        } else if (event.key=="ArrowLeft") {
            previousBigPicture();
        }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
