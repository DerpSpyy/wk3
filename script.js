document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 1;
    showSlides(slideIndex);

    // PlusSlides function needs to be globally available if referenced in HTML onclick
    window.plusSlides = function(n) {
      showSlides(slideIndex += n);
    };

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
    console.log(`Total slides: ${slides.length}`); // See how many slides are recognized
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log(`Showing slide index: ${slideIndex - 1}`); // Check which index is being shown
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 1;
    showSlides(slideIndex);

    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function() { plusSlides(-1); });
        nextButton.addEventListener('click', function() { plusSlides(1); });
    } else {
        console.error('Navigation buttons not found. Check your HTML.');
    }
});