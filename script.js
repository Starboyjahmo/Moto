let index=0;
function showSlide(index) {
    const slides=document.querySelector('.slides');
    const totalSlides=slides.children.length;
    if(index>=totalSlides) {
        slideIndex=0;
    }
    else if(index < 0) {
        slideIndex=totalSlides -1;
    }
    else{
        slideIndex=index;
    }
        slides.style.transform='translateX(-${slideIndex * 100}%)';
    }

function nextSlide(){
    showSlide(slideIndex + 1);
     }
function prevSlide() {
    showSlide(slideIndex - 1);
}
//intialize or starting  the slider
showSlide(slideIndex);
//Optional:to automatically change after 3 secounds
setInterval(nextSlide, 5000);
