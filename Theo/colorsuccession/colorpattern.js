console.log("lol");

var waitVar;

var time1 = 0
var time2 = 0
var time3 = 0
var time4 = 0

function colorPattern(){
var loop  = setInterval(colorPattern, 4400);

 waitVar = setTimeout(colorBlue,0);
waitVar = setTimeout(wait1,1100);
waitVar = setTimeout(colorYellow, 1100);
waitVar = setTimeout(wait2,2200);
waitVar = setTimeout(colorGreen,2200);
waitVar = setTimeout(wait3,3300);
waitVar = setTimeout(colorRed,3300);
waitVar = setTimeout(wait4,4400); 
/*
time1 = (Math.random() * 1400) + 500;
time2 = (Math.random() * 1400) + 500;
time3 = (Math.random() * 1400) + 500;
time4 = (Math.random() * 1400) + 500;

waitVar = setTimeout(colorBlue,0);
waitVar = setTimeout(wait1, time1);
waitVar = setTimeout(colorYellow, time1);
waitVar = setTimeout(wait2, time2);
waitVar = setTimeout(colorGreen, time2);
waitVar = setTimeout(wait3, time3);
waitVar = setTimeout(colorRed, time3);
waitVar = setTimeout(wait4, time4); */
}

function colorBlue(){
    document.getElementById("blueimg").style.opacity = "1";
}

function colorYellow(){
    document.getElementById("yellowimg").style.opacity = "1";
}

function colorGreen(){
    document.getElementById("greenimg").style.opacity = "1";
}

function colorRed(){
    document.getElementById("redimg").style.opacity = "1";
}


function wait1(){
    document.getElementById("blueimg").style.opacity = "0";
 }

 function wait2(){
    document.getElementById("yellowimg").style.opacity = "0";
 }

 function wait3(){
    document.getElementById("greenimg").style.opacity = "0";
 }

 function wait4(){
    document.getElementById("redimg").style.opacity = "0";
 }





colorPattern();
