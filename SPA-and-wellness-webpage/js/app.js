document.addEventListener("DOMContentLoaded", function() {
    //dropdown menu
    const menuTriggerEl = document.querySelector(".menu-trigger-element");
    const nestedMenu = document.querySelector(".nested-menu");

    menuTriggerEl.addEventListener("mouseover", function() {
             nestedMenu.style.display = "block";
    });
    nestedMenu.addEventListener("mouseout", function() {
             this.style.display = "none";   
    })
    
    // read more/less btn
    const readMoreLessBtns = document.querySelectorAll('.read-more-less-btn');

    for(let i=0; i < readMoreLessBtns.length; i++) {
        readMoreLessBtns[i].addEventListener('click', showHideText);
    }
    
    function showHideText(e) {
        let readMoreLessBtn = e.target;
        let prevSibling = readMoreLessBtn.previousElementSibling;
        
        if (prevSibling.style.display === "none" || prevSibling.style.display === "") {
            prevSibling.style.display = "block";
            readMoreLessBtn.textContent = "Czytaj mniej";
        } else {
            prevSibling.style.display = "none";
            readMoreLessBtn.textContent = "Czytaj więcej";
        }
    }
    
}); 