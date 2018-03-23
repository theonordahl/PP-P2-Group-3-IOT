
<h2> Programming II Report </h2>

The different prototypes we built were to question certain assumptions and to get insights from test users on how chromecast should reveal itself in a targeted setting. I used cardboard and other materials to physical prototypes but in order to create unique interactions and sequence of events and feedbacks in sync, I programmed and implemented a connected system that involves, node.js websocket server application, native android mobile application, client web application and an arduino.

Coming up with codes that will actually create these sequence of interactions and feedbacks in a connected system was quite challenging but the limited knowledge of programming I acquired in this course gave me more power to do certain things I would not have done without this knowledge.

Since there is a limited to what ordinary physical prototype can do. The cardboard prototype I made was static but when I incorporate codes, all the hidden interaction came to live and it became easy to stimulate and get the kind of insights needed from a test user.

In order to make the interaction look natural, I decided to program a native app which will afford test users the chance to use the connected phone as they would in natural situation.

The automatic trigger of events that notifies users that there is a presences of chromecast when they entered in a setting was stimulated using the vibration sensor. Although the sensor works when it senses a vibration around it, it might not be the best way to stimulate such interaction but it actually created the effect I wanted.

I used a websocket server application runs on local node server, I struggled to connect an independent android mobile application to it.  After, searching online I find out that I needed to connect all the devices in the same network and use the network IP address in the websocket connection address for client devices.

After, I solved this issue I was faced with another issue which is connected to serial port communication. I started off with Arduino Uno since I wanted to use arduino board with more than six Pulse Width Modulation (PWM) ports. After connecting the arduino board to the websocket server, the arduino board does not receive any data from the server and does not also send data back to server.

It was quite frustrating and after trying all the available information I found online, it did not still work but when I moved the same arduino code to arduino Micro, the serial port communication started working perfectly. Up till now I have not understand why I had this issue with arduino uno board. 

I also find the node.js websocket library limiting when I wanted to store all the device that are already connected to the server port in a Javascript array but the array always returns null.

At the end, it was great that I was able to recreate the interaction I want to use to get user insights with help of programming the interaction through codes.
