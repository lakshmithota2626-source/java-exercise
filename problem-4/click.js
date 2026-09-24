let text = document.getElementById("text");

let countDisplay = document.getElementById("count");

let count = 0;


// Greet button
document.getElementById("greetBtn").addEventListener("click", function() {

    text.innerText = "Hello! Welcome to JavaScript.";

});


// Change colour button
let colors = ["red", "green", "blue", "orange"];

let index = 0;

document.getElementById("colorBtn").addEventListener("click", function() {

    text.style.color = colors[index];

    index = (index + 1) % colors.length;

});


// Increase button
document.getElementById("incBtn").addEventListener("click", function() {

    count++;

    countDisplay.innerText = count;

});


// Decrease button
document.getElementById("decBtn").addEventListener("click", function() {

    count--;

    countDisplay.innerText = count;

});


// Reset button
document.getElementById("resetBtn").addEventListener("click", function() {

    count = 0;

    countDisplay.innerText = count;

    text.innerText = "Click a button below";

    text.style.color = "black";

});
