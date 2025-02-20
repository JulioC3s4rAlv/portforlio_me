document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("main-header");
    var sticky = header.offsetTop;

    function onScroll() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    
    window.addEventListener("scroll", onScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    var skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach(function(card) {
        card.addEventListener("mouseover", function() {
            card.style.transform = "scale(1.05)";
            card.style.fontSize = "20px";
        });
        
        card.addEventListener("mouseout", function() {
            card.style.transform = "scale(1)";
            card.style.fontSize = "18px";
        });
    });
});
