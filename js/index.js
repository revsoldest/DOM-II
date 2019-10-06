// Your code goes here

// (1) button background color change on click
let button = document.querySelectorAll(".btn");

button[0].addEventListener('click', function(event) {
event.target.style.backgroundColor = 'red';
});

button[1].addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'pink';
});

button[2].addEventListener('click', event => {
    event.target.style.backgroundColor = 'green';
});


// (2) mouseover fun bus to get magic school bus 

let magicBus = document.querySelector(".logo-heading");

magicBus.addEventListener("mouseover", function(event) {
     event.target.textContent = "The Magic School Bus!";
});


// (3) double clink on intro img to make all text green on the page 

let funBusDblClck = document.querySelector('.intro img');

funBusDblClck.addEventListener('dblclick', function(event){
    document.body.style.color = 'green';
})