// Anchor
if ( $( '[data-anchor-id]' ) !== 'undefined' ) {

  var $anchor = $( '[data-anchor-id]' );

  $anchor.on( 'click', function( event ) {

    event.preventDefault();

    var $that = $( this ),
      hb = $( 'body, html' );

    if ( $that.is( 'a' ) ) {
      hb.stop().animate({
        scrollTop: $( '#' + $that.attr( 'href' ).replace('#', '') ).offset().top
      }, 1000, 'swing');
    }

    if ( $that.is( 'button' ) ) {
      hb.stop().animate({
        scrollTop: $( '#' + $that.data( 'anchor-id' ) ).offset().top
      }, 1000, 'swing');
    }

  } );
}