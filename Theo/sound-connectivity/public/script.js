console.log('hi');



var x = document.getElementById("myAudio1"); 

function sound1(){
    x.play(); 
    console.log("lol");
}

var y = document.getElementById("myAudio2"); 

function sound2(){
    y.play(); 
    console.log("lol");
}

var z = document.getElementById("myAudio3"); 

function sound3(){
     z.play(); 
    console.log("lol");
}



var a = document.getElementById("myAudio1Chord"); 
var b = document.getElementById("myAudio2Chord"); 
var c = document.getElementById("myAudio3Chord"); 

function sound4(){
  a.play();
  b.play();
  c.play();
}



//This bit is to identify the type of OS and device the code is running on

var OSName="Unknown OS";

if (navigator.appVersion.indexOf("Win")!=-1) {
  OSName="Windows";
  }
else if (navigator.appVersion.indexOf("Mac")!=-1) { 
  OSName="MacOS";
  }
else {
OSName="Android/IOS";
}

console.log('Your OS: '+OSName);

var device ="Unknown device"
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
device="Mobile device"
}
else{
device="Desktop"
}

console.log("Your device: "+device);



//Based on which OS and device, it will play a corresponding note. 

function soundRelative(){
if (OSName == "MacOS" && device == "Desktop"){
setTimeout(sound1,2000);
}
else if(OSName == "Windows" && device == "Desktop"){
setTimeout(sound2,1000);
}
else if(OSName == "Android/IOS" && device == "Mobile device"){
sound3();
}
}




var socket = null;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
  // Note the resource URL should match the config in app.js
  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);

  // Connection has been established
  socket.onopen = function(evt) {
    console.log('Web socket opened: ' + url);
  };

  // Received a message, when a device receives a message it will run the soundRelative function
  socket.onmessage = function(evt) {
    console.log(new Date().toLocaleTimeString() + '< ' + evt.data); // Show raw messages as received
    logReceived(evt.data);
    soundRelative();
    

    // To convert text back to an object (if it was sent with 'sendObject'):
    //var o = JSON.parse(evt.data);
    //console.log(o);
  };

  // Demo sending a message
  document.getElementById('sendForm').addEventListener('submit', function(evt) {
    evt.preventDefault();
    var text = "hello";
    
    // This is where we actually send something
    send(text);
  });

}

function sendObject(o) {
  // Create a string version of the object
  send(JSON.stringify(o));
}

function send(str) {
  console.log(new Date().toLocaleTimeString() +  '> ' + str);
  socket.send(str);
}

function logReceived(d) {
  document.getElementById('lastMsg').innerHTML = d + '<br />' + document.getElementById('lastMsg').innerHTML;
}

function spinFunc(){
  document.getElementById("imgSend1").style.animation = "spin 3s linear infinite";

}