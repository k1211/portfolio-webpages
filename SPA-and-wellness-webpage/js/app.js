document.addEventListener("DOMContentLoaded", function() {
    //      dropdown menu
    const menuTriggerEl = document.querySelector(".menu-trigger-element");
    const nestedMenu = document.querySelector(".nested-menu");

    menuTriggerEl.addEventListener("mouseover", function() {
             nestedMenu.style.display = "block";
    });
    nestedMenu.addEventListener("mouseout", function() {
             this.style.display = "none";   
    })
    
    
    //      read more/less btn
    const readMoreLessBtns = document.querySelectorAll('.read-more-less-btn');

    for(let i=0; i < readMoreLessBtns.length; i++) {
        readMoreLessBtns[i].addEventListener('click', showHideText);
    }
    
    function showHideText() {
        let prevSibling = this.previousElementSibling;
        
        if (prevSibling.style.display === "none" || prevSibling.style.display === "") {
            prevSibling.style.display = "block";
            readMoreLessBtn.textContent = "Czytaj mniej";
        } else {
            prevSibling.style.display = "none";
            readMoreLessBtn.textContent = "Czytaj więcej";
        }
    }
    
    
    //      newsletter
    const formInput = document.querySelector('.newsletter-form input');
    const formBtn = document.querySelector('.newsletter-form button');
    const formInfo = document.querySelector('.form-info');
        
    formBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (formInput.value !== "") {
            formInfo.textContent = "Dodano adres email do subskrybcji.";
            formInput.value = "";
        } else {
            formInfo.textContent = "Nie podałeś adresu email.";
        }
        formInfo.style.display = "block";
    });
    
    
    //    gallery
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");
    const stage = document.querySelector(".slider-stage");
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider li");
    
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    let lastSlideIndex = slides.length - 1;
    
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = lastSlideIndex;
        } else if (index > lastSlideIndex) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        slider.style.right = (currentIndex * slideWidth) + "px";    
    }

    function goToNextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    function goToPrevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    prev.addEventListener("click", goToPrevSlide);
    next.addEventListener("click", goToNextSlide);
    setInterval(goToNextSlide, 5000);
  
    
    //    go up
    
    goUpBtn = document.querySelector(".go-up i");
    goUpBtn.addEventListener("click", function() {
       window.scroll({
            top: 0, 
            left: 0,
            behavior: 'smooth'
       }); 
    });
}); 
