var min = 0
var sec = 0
var milisec = 0
var hours = 0

var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var milliseconds = document.getElementById("milisec")
var countHours = document.getElementById("hours")

var interval;

function timer(){
    milisec++
    milliseconds.innerHTML=milisec
if(milisec>=100){
    sec++
    seconds.innerHTML=sec
    milisec=0
}else if (sec>=60){
    min++
    minutes.innerHTML=min
    sec=0

}else if (min>=60){
    hours++
    countHours.innerHTML=hours
    min=0

}   

}


function start(){
    interval=setInterval(timer,10)

}
function stop(){
    clearInterval(interval)
}
function reset(){
    min=0
    sec=0
    milisec=0
    hours=0
    milliseconds.innerHTML=milisec
    seconds.innerHTML=sec
    minutes.innerHTML=min
    countHours.innerHTML=hours
    stop()
}

