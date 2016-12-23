
;(function ( $, window, document, undefined ) {

    $.fn.solidifyNav = function( options ) {

              var settings = $.extend({
                  minimumpadding : 3
              }, options);

              return this.each( function() {

                        var nav = $(this);
                        var links = nav.find("li a");
                        var navHeight = nav.outerHeight();
                        var firstLinkHeight = nav.find("li").first().outerHeight();

                        var $i = 0;
                    
                          while ((navHeight >= firstLinkHeight*2) && ($i < 40)) {

                                    var paddingLeft = parseInt(links.css("padding-left"));
                                    var paddingRight = parseInt(links.css("padding-right"));
                                    var navHeight = nav.outerHeight();

                                      if ( paddingLeft <= settings.minimumpadding ) {
                                          break;
                                      }

                                     links.css("padding-left", (paddingLeft - 1) + "px");
                                     links.css("padding-right", (paddingRight - 1) + "px");
                                  
                                    $i++;
                          } //endwhile
                      
              }); // return


          } // solidifyNav function

}(jQuery));



$(window).on('load resize', function () {
        $(".mainnavigation").solidifyNav();
});