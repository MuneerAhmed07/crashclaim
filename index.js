let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.testimonial_slide');
    const totalSlides = slides.length;
    const slidesToShow = 3; 

    currentIndex = (currentIndex + step + Math.ceil(totalSlides / slidesToShow)) % Math.ceil(totalSlides / slidesToShow);
    
    const offset = -currentIndex * (100 / slidesToShow);
    document.querySelector('.testimonial_slider').style.transform = `translateX(${offset}%)`;
}


// FOr Accordin

let accordions = document.querySelectorAll('.fqa_wrapper .accordion');

accordions.forEach(acco => {
    acco.onclick = () => {
        if (acco.classList.contains('active')) {
            acco.classList.remove('active');
        } else {
            accordions.forEach(subAcco => subAcco.classList.remove('active'));
            acco.classList.add('active');
        }
    }
});