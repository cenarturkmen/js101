// variables
const input = document.getElementById("todo-input");
const addButton = document.getElementById("todo-addButton");
const main = document.getElementById("main");
const clearAll = document.getElementById("todo-clearAllButton");
const clearFinished = document.getElementById("todo-clearDoneButton");
const par = document.getElementById("paragraphs");
const localStorageButton = document.getElementById("todo-checkLocalStorage");

// add todo
addButton.addEventListener("click", function(e,todo1){
    const todo = input.value;
    const todoType = "notDone";

    //for local storage
    if (todo && todoType){
        localStorage.setItem(todo, todoType);
    }
   addParagraph();   
});

// clear done tasks
clearFinished.addEventListener("click", function(){
    let allParagraphs = document.querySelectorAll("p");

    for(i=0; i<allParagraphs.length; i++){
        if(allParagraphs[i].style.textDecoration === "line-through"){
            allParagraphs[i].innerHTML = "";
        }
    }
});

// clear all tasks also local storage
clearAll.addEventListener("click", function(){
    let allParagraphs = document.querySelectorAll("p");

    for(i=0; i<allParagraphs.length; i++){
        allParagraphs[i].innerHTML = "";
    }
    localStorage.clear();
});

// if you press enter then this function trigger addButton
input.addEventListener("keyup", function(e){

    if (e.key == "Enter"){
        addButton.click();
    }
})

//local storage reverter
localStorageButton.addEventListener("click", function(e){
    
    for(let i=0; i<localStorage.length; i++){
        const todo = localStorage.key(i);
        if (localStorage.getItem(todo) == "notDone"){
            addParagraph(todo);
        }
        else{
            addParagraph(todo, 2);
        }
    }
})

// addButton and localStorageButton use this. 
function addParagraph(todoLS, notDone){
    let paragraph = document.createElement("p");
    if (todoLS){
        paragraph.innerText = todoLS;

        if (notDone){
            paragraph.style["textDecoration"] = "line-through";
            paragraph.style["opacity"] =0.5;
        }
    }
    else{
        paragraph.innerText = input.value;
        input.value = "";
    }

    par.appendChild(paragraph);
    
    paragraph.addEventListener("click", function(){
        if (paragraph.style.textDecoration === "line-through"){
            paragraph.style["textDecoration"] = "none";
            paragraph.style["opacity"] =0.90;
            localStorage.setItem(paragraph.innerText, "notDone");
            console.log(paragraph.innerText, localStorage.getItem(paragraph.innerText)); 
        }
        else{
            paragraph.style["textDecoration"] = "line-through";
            paragraph.style["opacity"] =0.5;
            localStorage.setItem(paragraph.innerText, "Done");
            console.log(paragraph.innerText, localStorage.getItem(paragraph.innerText));
        }
    })
}