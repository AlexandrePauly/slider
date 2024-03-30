// Swiper initialization
let slideIndex = 1;
showSlides(slideIndex);

// Swipe to the right
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Swipe to the left
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Swiper function
function showSlides(n) {
    // Initialization of variables
    let i;                                                                       // Loop index
    let slides = document.getElementsByClassName("page");                        // Swiper elements
    let tabBg = ['images/bg/bg1.jpg', 'images/bg/bg13.jpg', 'images/bg/bg7.jpg'] // Background images

    // Background image preparation
    let styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    let styleSheet = styleElement.sheet;

    // Index update
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
    // For each swiper elements, hide it
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Display the actual swiper element
    slides[slideIndex-1].style.display = "block";

    // Background update on swipe
    let newBackgroundImageUrl = tabBg[slideIndex-1];
    let newRule = '.container::after { background-image: url("' + newBackgroundImageUrl + '"); }';
    styleSheet.insertRule(newRule, 0);
}