
<h2>Prototype for connected devices in PP-P2 courses</h2>

Android app and Arduino micro were connected to Node.js websocket server application through which the devices talk to eachother

A simple native android application was developed which is connected to the node.js websocket using Java websocket library. The node.js websocket is also connected to the arduino micro through serial port communication. The websocket server uses serialport node.js library to communicate with the arduino micro.

The android app sends message through the websocket server app which relays the message to arduino and in turn the arduino sends message to the android app through the server.

Android application was built because it gives us the access to test some of the mobile device awareness attributess like turning on the flashlight, default notification, sound and ringing of a mobile device from arduino

RGB LEDs were connected to the arduino and the color of the LED lights indicator the state of chromecast device connected to the TV and it is in sync with trigger awareness on the mobile device.

<h2>Installing</h2>

<h4>Node.js websocket application installation</h4>

Clone the folder called serial from this repository to your local repository.

Open command line interface and navigate to the serial folder

Run the command below to install the project dependency libraries from npm

<code> npm node install </code>

Start the application with the command below

<code> npm node app </code>

<br/>

<h4>Arduino installation </h4>

Open the arduino IDE and code the content of the rgb file inside the arduino folder to your IDE

Connect your arduino board and upload the code to the board


<br/>

<h4>Android application installation </h4>

Open the android native application folder in Android Studio

Connect an android phone through a usb port

Click install app to install the app to your mobile device


<h2>Add websocket link</h2>

For clients connection to the websocket server, make sure that if the node server is hosted locally, that all the connected devices all using the network IP address instead of localhost like below

<code> "ws://" + "10.2.16.54:4000" + "/serial" </code>
