// Init validate
if( $( '.js-validate' ) !== 'undefined' ) {

  var formValidate = $( '.js-validate' );

  $( formValidate ).each(function () {
    $( this ).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        name: "Enter your name",
        email: {
          required: "Enter your e-mail",
          email: "E-mail must be name@domain.com"
        }
      },
      focusInvalid: true,
      errorClass: "field-text__input--error",
      submitHandler: function( form ) {
        $.ajax({
          url: "mail.php",
          type: "post",
          data: $( form ).serialize(),
          success: function() {
            window.location.href = "thanks.html";
          }
        });
      }
    });
  });

}