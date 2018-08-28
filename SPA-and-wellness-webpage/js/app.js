document.addEventListener("DOMContentLoaded", function() {
    const menuTriggerEl = document.querySelector(".menu-trigger-element");
    const nestedMenu = document.querySelector(".nested-menu");

    menuTriggerEl.addEventListener("mouseover", function() {
             nestedMenu.style.display = "block";
    });
    nestedMenu.addEventListener("mouseout", function() {
             this.style.display = "none";   
    })
    
    
}); 