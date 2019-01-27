/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// Sterrenbeoordeling
var img = document.querySelector('#leeg');

function changeImg() {
   img.src = '../images/gevuld.png';
}

img.addEventListener('click', changeImg);


// Foto1
var beroemd = document.querySelector('#foto1');

function draaiOm() {
   beroemd.src = '../images/omgekeerd.png';
}

beroemd.addEventListener('click', draaiOm);

// Foto2
var beroemd2 = document.querySelector('#foto2');

function draaiOm2() {
   beroemd2.src = '../images/omgekeerd2.png';
}

beroemd2.addEventListener('click', draaiOm2);

// Foto3
var beroemd3 = document.querySelector('#foto3');

function draaiOm3() {
   beroemd3.src = '../images/omgekeerd3.png';
}

beroemd3.addEventListener('click', draaiOm3);
