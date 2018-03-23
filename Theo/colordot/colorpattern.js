console.log("lol");

var waitVar;

var time1 = 0
var time2 = 0
var time3 = 0
var time4 = 0

function colorPattern(){
var loop  = setInterval(colorPattern, 6000);

 waitVar = setTimeout(colorBlue,0);
waitVar = setTimeout(wait1,1500);
waitVar = setTimeout(colorYellow, 1500);
waitVar = setTimeout(wait2,3000);
waitVar = setTimeout(colorGreen,3000);
waitVar = setTimeout(wait3,4500);
waitVar = setTimeout(colorRed,4500);
waitVar = setTimeout(wait4,6000); 

}

function colorBlue(){
    document.getElementById("blueimg").style.opacity = "0.7";
}

function colorYellow(){
    document.getElementById("yellowimg").style.opacity = "0.7";
}

function colorGreen(){
    document.getElementById("greenimg").style.opacity = "0.7";
}

function colorRed(){
    document.getElementById("redimg").style.opacity = "0.7";
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
