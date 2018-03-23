function mailFunction(){
    document.getElementById("buttonImg").style.opacity = "0.6";
}

function mailFunction2(){
    document.getElementById("buttonImg").style.opacity = "1";
}


$(document).keypress(function(e) {
    var keyCode = e.keyCode;

      if(keyCode == 32 ){
      var req = new XMLHttpRequest();
      //I used the third party software from ifttt to trigger a notification on my phone to be able to really test my prototype.
      // using this with the arduino script I created it triggered a notificaiton to be recieved when a user walked in close enough proximity of the screen displaying this webiste.
      req.open("POST", "https://maker.ifttt.com/trigger/sensor_on/with/key/gl1UVPvTxXPYPXH8CsHqzVH_7nIMGoNz9YsFmcqfU5j", true);

      req.send(null);
      document.getElementById("buttonImg").style.opacity = "0.6";
      document.getElementById("blackScreen").style.opacity = "0";
      setTimeout(mailFunction2,400);
    }
});