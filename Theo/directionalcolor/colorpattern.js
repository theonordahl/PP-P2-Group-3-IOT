console.log("lol");

var waitVar;

var time1 = 0
var time2 = 0
var time3 = 0
var time4 = 0

function colorPattern(){
var loop  = setInterval(colorPattern, 4400);

waitVar = setTimeout(colorRed,0);
waitVar = setTimeout(wait4,1100);
waitVar = setTimeout(colorGreen, 1100);
waitVar = setTimeout(wait3,2200);
waitVar = setTimeout(colorYellow,2200);
waitVar = setTimeout(wait2,3300);
waitVar = setTimeout(colorBlue,3300);
waitVar = setTimeout(wait1,4400); 

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
