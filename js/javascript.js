const timer = 2000;

const glitch1 = document.querySelector('.gl1');
const glitch2 = document.querySelector('.gl2');
const glitch3 = document.querySelector('.gl3');
const glitch4 = document.querySelector('.gl4');

// ----- 1
function show() {
    glitch1.classList.remove('hide');
}
show();

function hide() {
    glitch1.classList.add('hide');
}
setTimeout(hide, 2000);

// ----- 2
function show2() {
    glitch2.classList.remove('hide');
}
setTimeout(show2, 2001);

function hide2() {
    glitch2.classList.add('hide');
}
setTimeout(hide2, 4000);

// ----- 3
function show3() {
    glitch3.classList.remove('hide');
}
setTimeout(show3, 4001);

function hide3() {
    glitch3.classList.add('hide');
}
setTimeout(hide3, 6000);

// ----- 4
function show4() {
    glitch4.classList.remove('hide');
}
setTimeout(show4, 6001);

function hide4() {
    glitch4.classList.add('hide');
}
setTimeout(hide4, 8000);

// ----- 5
function show5() {
    glitch1.classList.remove('hide');
}
setTimeout(show5, 8001);

