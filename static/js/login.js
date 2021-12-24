+ function($) {

    // console.log('Test');
    $('.palceholder').click(function() {
      $(this).siblings('input').focus();
    });
  
    $('.form-control').focus(function() {
      $(this).parent().addClass("focused");
    });
  
    $('.form-control').blur(function() {
      var $this = $(this);
      if ($this.val().length == 0)
        $(this).parent().removeClass("focused");
    });
    $('.form-control').blur();
  
 
    $.validator.setDefaults({
      errorElement: 'span',
      errorClass: 'validate-tooltip'
    });
  
    $("#formvalidate").validate({
      rules: {
        userName: {
          required: true,
          minlength: 1
        },
        userPassword: {
          required: true,
          minlength: 1
        }
      },
      messages: {
        userName: {
          required: "Veuillez saisir votre login!",
          minlength: "Veuillez saisir votre login!"
        },
        userPassword: {
          required: "Veuillez saisir votre mot de passe!",
          minlength: "Veuillez saisir votre mot de passe!"
        }
      }
    });
  
  }(jQuery);