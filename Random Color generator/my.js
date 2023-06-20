const div= document.querySelector(".container");

div.addEventListener("click", generateRandomColors);  // when clicked , random color is generated
   document.body.style.backgroundColor = generateColor();

function generateRandomColors(){
let hex= '#'+ Math.floor(Math.random()*16777215).toString(16);  // return random int and convert into string


div.style.backgroundColor = hex; 
}
