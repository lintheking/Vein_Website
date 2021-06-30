$(function () {

  $('a[href*="#"]').click(function (e) {
    var href = $(this).attr('href'),
      $scrollAim = $(href);

    // Abbrechen wenn kein Sprungziel gefunden
    if ($scrollAim.length == 0) return;

    // Automatisches Scrollen verhindern
    e.preventDefault();

    // Zum Sprungziel animieren
    $('html,body').animate({
      scrollTop: $scrollAim.offset().top
    }, 700);
  });

});

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});


$(function () {
  var menuVisible = false;
  $('#burgermenu').click(function () {
    if (menuVisible) {
      $('#navliste').addClass("hidden-mobile")
      menuVisible = false;
      return;
    }
    $('#navliste').removeClass("hidden-mobile")
    menuVisible = true;
  });
});
