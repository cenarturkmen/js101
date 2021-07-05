//
const input = document.getElementById("todo-input");
const addButton = document.getElementById("todo-addButton");
const main = document.getElementById("main");
const clearAll = document.getElementById("todo-clearAllButton");
const clearFinished = document.getElementById("todo-clearDoneButton");
const par = document.getElementById("paragraphs");


addButton.addEventListener("click", function(){
    let paragraph = document.createElement("p");

    paragraph.innerText = input.value;
    par.appendChild(paragraph);
    input.value = "";
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