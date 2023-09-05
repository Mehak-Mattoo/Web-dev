
let winGif= document.querySelector("#win");
let reset= document.querySelector("#reset");
let clickNoise= new Audio("audio/gameNoise.mp3");
let gameOverNoise= new Audio("audio/gameOver.mp3");
let gameOver= false;
let currentTurn="X";





function changeTurn(){
    return  currentTurn==="X" ?"0":"X";
}
// checks who won
function checkWin(){
    let boxText= document.getElementsByClassName("boxText");
    let wins= [ // these numbers signify the winning situations
        [0,1 ,2], // below written logic explanation:
        [3,4,5],  // [e[0]]== first element in each of these arrays
        [6,7,8],  // if all three of them matches , then win occurs
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    wins.forEach(e=>{
if((boxText[e[0]].innerText===boxText[e[1]].innerText) && (boxText[e[2]].innerText===boxText[e[1]].innerText)&& (boxText[e[0]].innerText!==""  )){
    document.querySelector(".info").innerText=   boxText[e[0]].innerText +" won"
   winGif.style.display= "block"
  
   
    gameOver=true;
    
}
  

})

}

//gameOverNoise.play()

let boxes= document.getElementsByClassName("col");


Array.from(boxes).forEach(element=>{
    let boxText= element.querySelector(".boxText");
   element.addEventListener("click",()=>{
        if(boxText.innerText===""){
            boxText.innerText= currentTurn;
          currentTurn = changeTurn();
            clickNoise.play();
            checkWin();

            // if game is still going on, only then change the turn
            if(!gameOver){
            document.getElementsByClassName("info")[0].innerText= "Turn for: " +currentTurn;}
          

        }

        }
    
    
    )
})


reset.addEventListener("click", ()=>{
    let boxText= document.querySelectorAll(".boxText"); // using query selector all to remove data from every box
    Array.from(boxText).forEach(element=>{
    element.innerText= "";
    
    });

    currentTurn= "X"
    gameOver= false;
    if(!gameOver){
        document.getElementsByClassName("info")[0].innerText= "Turn for: " +currentTurn;}

        winGif.style.display= "none"

})





