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
    const readMoreLessBtn = document.querySelector('.read-more-less-btn');
    readMoreLessBtn.addEventListener('click', showHideText);
    
    function showHideText() {
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