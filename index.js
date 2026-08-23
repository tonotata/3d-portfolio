const langSwitcher = document.getElementById('lang-switcher');

langSwitcher.addEventListener('change', async (e) => {
    const selectedLang = e.target.value;
    
    // Fetch the JSON file containing translations
    const response = await fetch('languages.json');
    const data = await response.json();
    
    // Find all elements with a data-key attribute
    const elements = document.querySelectorAll('[data-key]');
    
    // Replace text based on the selected language
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerHTML = data[selectedLang][key];
    });
});

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}