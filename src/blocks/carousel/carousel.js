if ( typeof $.fn.owlCarousel === 'function' ) {

  var carouselStr = 'carousel';
  var projectsStr = 'projects';
  var carousel = $( '.owl-' + carouselStr );

  carousel.each( function () {

    var self = $( this );

    self.owlCarousel({
      loop: true,
      items: 1,
      nav: false,
      dots: false,
      mouseDrag: false,
      lazyLoad: true
    })
      .siblings( '.' + projectsStr +'__arrows' )
      .find( '.' + projectsStr + '__arrow--prev' ).on( 'click', function() {
        self.trigger( 'prev.owl.carousel' );
      } )
      .siblings( '.' + projectsStr + '__arrow--next' ).on( 'click', function() {
        self.trigger( 'next.owl.carousel' );
      } );
    
  } );

}