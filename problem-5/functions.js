// Function Declaration
function add(x, y) {

    return x + y;

}


// Function Definition / Function Expression
const multiply = function(x, y) {

    return x * y;

};


// Arrow Function
const square = (x) => x * x;


// Console demo
console.log("Declaration add(5, 3) =", add(5, 3));

console.log("Definition multiply(5, 3) =", multiply(5, 3));

console.log("Arrow square(5) =", square(5));


// Get first number
const getA = () =>
    Number(document.getElementById("a").value);


// Get second number
const getB = () =>
    Number(document.getElementById("b").value);


// Display result
const show = (msg) =>
    document.getElementById("result").innerText = msg;


// Declaration button
document.getElementById("declBtn").addEventListener("click", function() {

    show("Sum = " + add(getA(), getB()));

});


// Definition button
document.getElementById("defBtn").addEventListener("click", function() {

    show("Product = " + multiply(getA(), getB()));

});


// Arrow function button
document.getElementById("arrowBtn").addEventListener("click", () => {

    show("Square of A = " + square(getA()));

});
