var minute = 29;
var second = 59;
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const endButton = document.querySelector("#end")
var clock;

startButton.addEventListener("click", function(){
    clock = setInterval(function(){
        document.querySelector("#timer").innerHTML = minute + " : " + second;
        second--;
        if (second==0 ){
            minute--;
            second = 60;
            if (minute == 0){
                alert("Time is up");
                minute = 30;
            }
        }
    },1500);
});

pauseButton.addEventListener("click", function(){
    clearInterval(clock);
    
})

endButton.addEventListener("click", function(){
    clearTimeout(clock);
    second= 01;
    minute = 30;
    document.querySelector("#timer").innerHTML = minute + " : " + second;
})