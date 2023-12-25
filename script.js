const mobile__button = document.querySelector(".mobile__btn");
const nav__link = document.querySelector(".nav__items");



mobile__button.addEventListener('click', () => {
      nav__link.classList.toggle("active")
})





let cards = document.querySelectorAll('.client__card');
let counter = 0;
cards.forEach(function (slide, index) {
      slide.style.left = `${index * 100}%`
})
// console.log(cards);
function myfun() {
      cards.forEach(function (curentvalu) {
            curentvalu.style.transform = `translateX(-${counter * 100}%)`
      })
}

setInterval(function () {
      counter++;
      if (counter == cards.length) {
            counter = 0
      }
      myfun()
}, 2000)