let input = document.getElementById("todo-input");
let addButton = document.getElementById("todo-addButton");
let main = document.getElementById("main");
let clearAll = document.getElementById("todo-clearAllButton");
let clearFinished = document.getElementById("todo-clearDoneButton");
let par = document.getElementById("paragraphs");
addButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");
    paragraph.innerText = input.value;
    par.appendChild(paragraph);
    input.value = "";

    paragraph.addEventListener("click", function(){
        if (paragraph.style.textDecoration === "line-through"){
            paragraph.style.textDecoration = "none";}
        else{
            paragraph.style.textDecoration = "line-through";
        }
    })
});
clearFinished.addEventListener("click", function(){
    let allParagraphs = document.querySelectorAll("p");
    console.log("test1");
    for(i=0; i<allParagraphs.length; i++){
        if(allParagraphs[i].style.textDecoration === "line-through"){
            allParagraphs[i].innerHTML = "";
            console.log("test2");
        }
    }
});


clearAll.addEventListener("click", function(){
    let allParagraphs = document.querySelectorAll("p");
    console.log(allParagraphs.length);
    for(i=0; i<allParagraphs.length; i++){
        allParagraphs[i].innerHTML = "";
    }
});
