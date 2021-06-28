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

setInterval(function () {
  // doFlip(3);
}, 1000);

function doFlip(numberIndex) {

  var currentNumberElement = $(".number:eq(" + numberIndex + ")");

  var currentNumber = Number(currentNumberElement.attr("data-number"));

  currentNumber--;

  if (currentNumber < 0) {
    currentNumber = 9;

    if (numberIndex > 0) {
      doFlip(--numberIndex);
    }
  }

  currentNumberElement.addClass("flip");

  setTimeout(function () {
    currentNumberElement.attr("data-number", currentNumber);

    currentNumberElement.removeClass("flip");
  }, 500);
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("pink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}


var myIndex = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("diashow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 5
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel2, 5000); // Change image every 3 seconds
}


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
