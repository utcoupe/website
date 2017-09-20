(function($){
  $(function(){

    function findAndFillLastBlogPost() {
        $("#loading-post-icon").addClass("loading");

        $.get( "blog/", function( data ) {
            var postBeginning = "<div class=\"post\" id=\"";
            idxStart = data.indexOf(postBeginning);
            idxEnd = data.indexOf(postBeginning, idxStart + postBeginning.length);
            postTxt = data.substring(idxStart,idxEnd);

            $( "#last-blog-post" ).removeClass("hide");
            $( "#last-blog-post" ).html( postTxt );
            $("#loading-post-icon").addClass("hide");
        });
    }

    findAndFillLastBlogPost();

  }); // end of document ready
})(jQuery); // end of jQuery name space
