const clickbtn = document.querySelector(".clickbtn");
const modal = document.querySelector(".modal");
const nameinput = document.querySelector(".nameinput");
const nobtn = document.querySelector(".nobtn");
const yesbtn = document.querySelector(".yesbtn");
const active = document.querySelector(".active")
const close = document.querySelector(".close")


clickbtn.addEventListener('click', function () {
    modal.classList.toggle('active');


})
close.addEventListener('click', function () {
    modal.classList.remove('active')
})

nobtn.addEventListener('click', function () {
    modal.classList.remove('active')
})

yesbtn.addEventListener('click', function () {
    modal.classList.remove('active');
    const value = nameinput.value;
    alert(value);

})


