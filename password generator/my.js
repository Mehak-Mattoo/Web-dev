let upper= document.querySelector("#upper");
let lower= document.querySelector("#lower");
let numBtn = document.querySelector("#numbers");
let symBtn= document.querySelector("#symbol");
let container= document.querySelector(".main-container")
let ans= document.createElement("p");
let remark= document.createElement("p");

upper.addEventListener("click", generateUpr);
lower.addEventListener("click", generateLowr);
numBtn.addEventListener("click", generateNum);
symBtn.addEventListener("click", generateSymbols);

ans.innerText= "Your Password:  "

function generateUpr(){
    const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result='';
    for (let index = 0; index < upperCase.length; index++) {
       result+= upperCase.charAt(Math.floor(Math.random()*upperCase.length))}

       upper.style.background="rgb(135, 185, 115)";
    ans.innerText+=  result.substring(0,4);
}


function generateLowr(){
    
const lowerCase ='abcdefghijklmnopqrstuvwxyz';
    let result='';
    for (let index = 0; index < lowerCase.length; index++) {
       result+= lowerCase.charAt(Math.floor(Math.random()*lowerCase.length))}
        
    lower.style.background="rgb(135, 185, 115)";
    ans.innerText+= result.substring(0,4);

}

function generateNum(){
    let random= Math.floor(Math.random()*100+1);
    
     ans.innerText+= random;
     numBtn.style.background="rgb(135, 185, 115)";
    }



function generateSymbols(){
    const symbols ='~[!@.#{$%<,^&*(_+}\]:">?)/;';
    let result='';
    for (let index = 0; index < symbols.length; index++) {
       result+= symbols.charAt(Math.floor(Math.random()*symbols.length))
        
    } symBtn.style.background="rgb(135, 185, 115)";
  
    ans.innerText+= result.substring(0,2);
}

ans.style.background= "rgb(140, 171, 255)"
ans.style.borderRadius= "1rem"; 
ans.style.padding= "1rem"; 
ans.style.color= "black";
ans.style.textAlign= "center";


container.appendChild(ans);