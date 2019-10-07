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
    document.body.style.color = 'red';
})

// (4 & 5) push and hold any key  and the intro p tag will hidden and letting go of the key will unhide it

let intro = document.querySelector('.intro p');

document.addEventListener('keydown', function(event){
    intro.style.visibility = 'hidden';
})

document.addEventListener('keyup', function(event){
    intro.style.visibility = 'visible';
})

// (6) hover over footer and the words will get bigger

let footer = document.querySelector('footer')

footer.addEventListener('pointerover', function(event){
    event.target.style.fontSize = '6rem';
});

// (7) in console log went page load it will say a message

window.addEventListener('load', function(){
    console.log('The page has loaded.');
});

// (8) when user right clicked console will tell you and how many times they clicked 

window.oncontextmenu = function() {
    console.log('The user has right clicked');
};

// (9) click on img will make it smaller
let anyImg = document.querySelectorAll('img');

for (let i=0;i < anyImg.length;i++){
    if (anyImg[i].className === 'funBusImg') {
        anyImg[i].addEventListener('click',function(event){
            event.preventDefault();
        });
    }
    else {
        anyImg[i].addEventListener('click', function(event){
            event.target.style.width = '60%';
        });
    }
}

// (10) 

document.querySelector('.nav a').addEventListener('click', function(event){
    event.preventDefault();
}); 