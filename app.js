const confettiContainer = document.getElementById('confetti-container')
const bdayText = document.getElementById('bday-text')

window.addEventListener('load' , function(){
    
    let canvas = document.createElement("canvas");
    canvas.width = 1920;
    canvas.height = 1080;
    let container = document.getElementById("confetti-container");
    container.appendChild(canvas);

    function createConfetti(){
    confetti({
        particleCount: 2000,
        angle: 60,
        spread: 2000,
        startVelocity:70,
        ticks:200,
        origin: { x: 0 }
    })
    //.then(() => container.removeChild(canvas));
    confetti({
        particleCount: 2000,
        angle: 120,
        spread: 2000,
        startVelocity:70,
        ticks:200,
        origin: { x: 1 }
    }).then(() => container.removeChild(canvas));
  }
  createConfetti()
    function changeText() {
        setTimeout(() => {
          bdayText.textContent = "Happy";
          setTimeout(() => {
            bdayText.textContent = "Birthday";
            setTimeout(() => {
                bdayText.textContent = "Joseph";
                changeText();
            }, 900) // Call the function recursively for continuous looping
          }, 1200);
        }, 900);
      }
      
      changeText();

    // setTimeout(function() {
    //     // Change the textContent to "Joseph" after the delay
    //     bdayText.textContent = "Joseph";
    //   }, 2000);
})

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }

//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

