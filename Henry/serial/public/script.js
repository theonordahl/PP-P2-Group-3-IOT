var lastMsgEl = null;
var current = 0;
var flag = false;
if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);

function onDocumentReady() {
    // uni ip address = "10.2.16.54"
    //home ip 192.168.1.222:4000
    var socket = new ReconnectingWebsocket("ws://" + "10.2.16.54:4000" + "/serial");
    var sendFormEl = document.getElementById('sendForm');
    var lastMsg = null;
    lastMsgEl = document.getElementById('lastMsg');
    socket.onmessage = function(evt) {
        
        // Parse message, assuming <Text,Int,Float>
        var d = evt.data.trim();
        var intd = d.charAt(0);
        if(d != ''){
            console.log(d);
            if(intd != current){
                current = intd;
                console.log(intd + " = " + current);
    
                if(current == 1){
                    content.innerHTML = "";
                }
                if(current == 2){
                    tvStandbyMode(content);
                }
                if(current == 3){
                    castVideoFromMobile(content);
                }
                //lastMsgEl.innerHTML = "Sensor - " + d;
            }
        }   
        
    }
    socket.onopen = function(evt) {
        console.log("Socket opened");
    }

    // sendFormEl.addEventListener('submit', function(evt) {
    //     evt.preventDefault();
    //     var send = document.getElementById('sendtoSerial').value;
    //     socket.send(send);  
    // })

    // //event testing
    // var content = document.getElementById("content");
    //console.log(content);
    
        // var inputValue = document.getElementById("submitme");
        // inputValue.addEventListener("click", function(event){
        //     event.stopPropagation();
        //     var hidden = document.getElementById("m-hidden").value;
        //     console.log(hidden);
            
        //     if(hidden == 1){
        //         content.innerHTML = "";
        //     }
        //     if(hidden == 2){
        //         castVideoFromMobile(content);
        //     }
        // });
    
        // document.getElementById("cast").addEventListener("click", function(event){
        //     event.stopPropagation();
            
        //     var cast = document.getElementById("stop-cast").value;
        //     if(cast == 4){
        //         tvStandbyMode(content);
        //     }
        // });


        ///

        function castVideoFromMobile(content){
            content.innerHTML = "";
            var video = '<iframe width="700" height="500" src="https://www.youtube.com/embed/rtOvBOTyX00?rel=0&autoplay=1"' +  
            'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            content.innerHTML = video;
        }
        
        function tvStandbyMode(content){
            content.innerHTML = '<img src="images/dogbarking.gif" alt=""/>';
        }
}