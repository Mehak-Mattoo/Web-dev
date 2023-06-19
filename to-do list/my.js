

let add = document.getElementById("add-button");
let parentList = document.getElementById("parent-List");

add.addEventListener("click", addItems);

function addItems(e) {

if(parentList.children[0].className=="emptyTasks"){
parentList.children[0].remove();}

  let currentBtn = e.currentTarget; // grabbing the input
  let input = currentBtn.previousElementSibling;
 

  let newList = document.createElement("li");
  newList.classList.add("list-group-item");
  newList.innerHTML = `<h4>${input.value}</h4>
  <button id="edit-button" onclick="editTask(this)">Edit</button>
  <button id="remove-button" onclick="removeTask(this)">X</button>`

  parentList.appendChild(newList);
}

function removeTask(currentTask){
  currentTask.parentElement.remove();
  if(parentList.children.length<=0){
    let image = document.createElement("img");
    image.src= "icons/end.png"
    document.body.appendChild(image);

    image.style.marginLeft= "40%";
    image.style.width= "25%";
    

 
   
  }
}

function editTask(currentTask){

  if(currentTask.textContent=="Done"){
    currentTask.textContent= "Edit"


    let currString= currentTask.previousElementSibling.value;
    let currHeading= document.createElement('h4');

    currHeading.className= "list-container"
    currHeading.textContent= currString;

    currentTask.parentElement.replaceChild(currHeading, currentTask.previousElementSibling) ;

  }

  else{
currentTask.textContent= "Done"
  let currString= currentTask.previousElementSibling.textContent;
  let input= document.createElement("input");
  input.type= "text";
  input.placeholder= "Modify your task";
  input.className = "form-control"

  input.value= currString;
  currentTask.parentElement.replaceChild(input, currentTask.previousElementSibling) }

}