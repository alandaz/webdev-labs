/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultbutton = () => {
   document.querySelector("body").className = ' '; 
   
};

const oceanbutton = () => {
   document.querySelector("body").className = 'ocean';
  
};

const desertbutton = () => {
   document.querySelector("body").className = 'desert';
};
const highcontrastbutton = () => {
   document.querySelector("body").className = 'high-contrast';
};


document.querySelector("#default").addEventListener('click', defaultbutton);
document.querySelector("#ocean").addEventListener('click', oceanbutton);
document.querySelector("#desert").addEventListener('click', desertbutton);
document.querySelector("#high-contrast").addEventListener('click', highcontrastbutton);
