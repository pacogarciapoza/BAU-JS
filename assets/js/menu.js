$(document).ready(function(){
  $('#mobile-button').click(function() {
    $('#menu-container').show();
    $('#mobile-button').hide();
    $('#mobile-close').show();
  });
  $('#mobile-close').click(function() {
    $('#menu-container').hide();
    $('#mobile-button').show();
    $('#mobile-close').hide();
  });
  $('#menu-container li > a').click(function() {
    $('.current-menu-item').removeClass('current-menu-item');
    $(this).parent().addClass('current-menu-item');
  });

  $('#menu-container li').hover(function() {
    $(this).children('.sub-menu').fadeToggle(300);
  });
  //se puede utilizar.find() en lugar de children

  $(window).resize(function() {
    if($(window).width() >= 991) {
      $('#mobile-button,#mobile-close').hide();
    } else {
      if($('#menu-container').is(':visible')) {
        $('#mobile-close').show();
      } else {
        $('#mobile-button').show();
      }
    }
  });
});
