//  work tabs
const workBtn = document.querySelectorAll(".work__btn-top");
const workLeft = document.querySelectorAll(".work__left");
const workRight = document.querySelectorAll(".work__right");

workBtn.forEach(function(item) { 
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabIdLeft = currentBtn.getAttribute('data-tab-left');
        let currentTabLeft = document.querySelector(tabIdLeft);
        let currentBtnRight = item; 
        let tabRightId = currentBtnRight.getAttribute('data-tab-right');
        let currentTabRight = document.querySelector(tabRightId); 
        

        workBtn.forEach(function(item) {
            item.classList.remove('active');
        });

        workLeft.forEach(function(item) {
            item.classList.remove('active');
        });

        workRight.forEach(function(item) {
            item.classList.remove('active');
        });
        

        currentBtn.classList.add('active');
        currentTabLeft.classList.add('active');
        currentTabRight.classList.add("active");
    });
})
// swiper
var swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
});
// burger
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})  
// accordion
new Accordion('.accordion-container');
// поиск
const search = document.querySelector(".search");
const headerSearch = document.querySelector(".header-search-none");

function searchActive() {
    search.classList.toggle("active");
    headerSearch.classList.toggle("none");
};

