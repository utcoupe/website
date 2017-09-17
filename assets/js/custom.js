(function($){
  $(function(){

    function findAndFillLastBlogPost() {
        $("#loading-post-icon").addClass("loading");

        $.get( "blog/index.html", function( data ) {
            var postBeginning = "<div class=\"post\" id=\"";
            var postEnd = String.raw`				 </div>
			</div>`; // be carefull, there must be tabs in this ! Not spaces !! (see blog/index.html)
            idxStart = data.indexOf(postBeginning);
            idxEnd = data.indexOf(postEnd, idxStart + postBeginning.length) + postEnd.length;
            console.log(idxStart);
            console.log(idxEnd);
            console.log(idxEnd - idxStart);
            postTxt = data.substring(idxStart,idxEnd);

            $( "#last-blog-post" ).removeClass("hide");
            $( "#last-blog-post" ).html( postTxt );
            $("#loading-post-icon").addClass("hide");
        });
    }

    findAndFillLastBlogPost();

  }); // end of document ready
})(jQuery); // end of jQuery name space