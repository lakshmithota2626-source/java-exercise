let box = document.getElementById("box");


// Mouseover event
box.addEventListener("mouseover", function() {

    box.style.background = "orange";

    box.innerText = "Mouse is over!";
});


// Mouseout event
box.addEventListener("mouseout", function() {

    box.style.background = "lightblue";

    box.innerText = "Hover over me";
});


// Keyup event
let input = document.getElementById("nameInput");

input.addEventListener("keyup", function() {

    document.getElementById("typed").innerText =
        "You typed: " + input.value;
});


// Change event
let city = document.getElementById("city");

city.addEventListener("change", function() {

    document.getElementById("selected").innerText =
        "Selected city: " + city.value;
});


// Double-click event
let dbl = document.getElementById("dbl");

dbl.addEventListener("dblclick", function() {

    dbl.style.color = "purple";

    dbl.innerText = "You double-clicked me!";
});
