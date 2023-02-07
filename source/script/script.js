// Modal ticket
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

// Hiện thị modal mua vé
function openModal() {
    modal.classList.add('open');
}
// Tắt modal mua vé
function hideModal() {
    modal.classList.remove('open');
}
// lặp qua từng button và lắng nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', openModal);
}
modalClose.addEventListener('click', hideModal);
modal.addEventListener('click', hideModal);
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
}
)
// Back to top scroll
window.addEventListener("scroll", () => {
    const toTop = document.querySelector('.to-top');
    if (window.pageYOffset > 150) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})
function scrollToTop() {
    window.scrollTo({
        top: 0
    })
}

// Silder images automatico
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1800);
}
// Search and close button
let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');

searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
}
closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}
// Check connect wifi
let alert = document.querySelectorAll('.alert');
alert.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('alert-close')){
            item.style.display = 'none';
        }
    })
})
window.addEventListener('offline', function(){
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'grid';
})
window.addEventListener('online', function(){
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'grid';
})