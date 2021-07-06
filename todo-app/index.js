//
const input = document.getElementById("todo-input");
const addButton = document.getElementById("todo-addButton");
const main = document.getElementById("main");
const clearAll = document.getElementById("todo-clearAllButton");
const clearFinished = document.getElementById("todo-clearDoneButton");
const par = document.getElementById("paragraphs");
const localStorageButton = document.getElementById("todo-checkLocalStorage");

addButton.addEventListener("click", function(e,todo1){
    const todo = input.value;
    const todoType = "notDone";

    //for local storage
    if (todo && todoType){
        localStorage.setItem(todo, todoType);
        //location.reload();
    }
   addParagraph();    
});


clearFinished.addEventListener("click", function(){
    let allParagraphs = document.querySelectorAll("p");

    for(i=0; i<allParagraphs.length; i++){
        if(allParagraphs[i].style.textDecoration === "line-through"){
            allParagraphs[i].innerHTML = "";
        }
    }
});


clearAll.addEventListener("click", function(){
    let allParagraphs = document.querySelectorAll("p");

    for(i=0; i<allParagraphs.length; i++){
        allParagraphs[i].innerHTML = "";
    }
});


input.addEventListener("keyup", function(e){

    if (e.key == "Enter"){
        addButton.click();
    }
})

//local storage reverter
localStorageButton.addEventListener("click", function(e){
    
    for(let i=0; i<localStorage.length; i++){
        const todo = localStorage.key(i);
        console.log(todo);
        addParagraph(todo);

    }
})

function addParagraph(todoLS){
    let paragraph = document.createElement("p");
    if (todoLS){
        paragraph.innerText = todoLS;
        console.log(todoLS);
    }
    else{
        paragraph.innerText = input.value;
    }
    par.appendChild(paragraph);
    paragraph.addEventListener("click", function(){
        if (paragraph.style.textDecoration === "line-through"){
            paragraph.style["textDecoration"] = "none";
            paragraph.style["opacity"] =1;
            
        }
        else{
            paragraph.style["textDecoration"] = "line-through";
            paragraph.style["opacity"] =0.5;
        }
    })

}