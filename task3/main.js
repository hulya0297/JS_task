// Task 1: Change the Background Color
// Create an HTML file with a button. When the button is clicked,
//  change the background color of the page to a random color.

const colorbtn = document.getElementById('colorbtn');
document.getElementById('colorbtn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';

})

// Task 2: Create an HTML file with a button and a counter display.
//  When the button is clicked,increment the counter and update the display.

let count = 0;
const clickButton = document.getElementById('clickButton');
const counterDisplay = document.getElementById('count');

clickButton.addEventListener('click', function () {

    count++;
    counterDisplay.innerHTML = count;

})





// Task 3: Create an HTML element for the image tag and 
// show the screen an image then create a button in HTML and 
// write a function in JS for button click. 
// When click the button change the image source(src) attribute
let imgFlowers=['flowers2.jpeg', 'flowers3.jpeg', 'flowers4.jpeg'];
let index = 0;
const image = document.querySelector('.image');
const imgBtn = document.querySelector('.imgBtn');

imgBtn.addEventListener('click', function(){
    image.setAttribute('src',`.task3/img/${imgFlowers[index]}`);
    index++
       
});