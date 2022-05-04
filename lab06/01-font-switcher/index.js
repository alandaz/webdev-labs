let headfontsize = 2.0; 
let parafontsize = 1.0; 

const makeBigger = () => {
   headfontsize = headfontsize + .2; 
   parafontsize += .1; 
   document.querySelector("h1").style.fontSize = headfontsize.toString() + 'em';
   document.querySelector("p").style.fontSize = parafontsize.toString() + 'em';
};

const makeSmaller = () => {
   headfontsize = headfontsize - .2; 
   parafontsize -= .1; 
   document.querySelector("h1").style.fontSize = headfontsize.toString() + 'em';
   document.querySelector("p").style.fontSize = parafontsize.toString() + 'em';
}; 
 

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

