// Select by ID
let heading = document.getElementById("heading");

heading.style.color = "blue";

console.log("By ID:", heading.innerText);


// Select by Class Name
let paras = document.getElementsByClassName("info");

for (let i = 0; i < paras.length; i++) {
    paras[i].style.backgroundColor = "lightyellow";
}

console.log("By Class: found", paras.length, "paragraphs");


// Select by Tag Name
let items = document.getElementsByTagName("li");

console.log("By Tag: found", items.length, "list items");

items[0].style.fontWeight = "bold";


// querySelector
let firstNote = document.querySelector("#box .note");

firstNote.style.color = "red";

console.log("querySelector:", firstNote.innerText);


// querySelectorAll
let allNotes = document.querySelectorAll(".note");

allNotes.forEach(function(note) {
    note.style.border = "1px solid green";
});

console.log("querySelectorAll: found", allNotes.length, "notes");
