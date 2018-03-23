# Prototypes Final Project P2

Through out the course of this project I worked on a total of 4 different prototypes containing programming elements. Three of which being very similar in what their purpose is, focusing on color and patterns in succession. And the final one exploring chords, notes and connectivity together. 

## Color and Pattern Prototypes

These are not interactive in any way, but where used to test the impression of different color patterns on users. The folders containing these are: colorsuccession, colordot and directionalcolor.

## Sound-Connectivity Prototype

### Setup

The only prototype requiring setup beforehand is the sound-connectivity one. This includes installing websockets from npm. 

Open up your command line interface and locate the sound-connectivity folder.

In the directory you've got this sample:

`$ npm install`

This will install the necessary packages from npm.

To run the sound-connectivity example you will need a Mac, a PC and a smartphone. 

### Running

Once set up, you can boot up your server with

`$ npm start`

It will continue running. To stop it again, press CTRL+C (PC) or CMD+C (Mac).

After having started the server connect to the local Webserver that you are now hosting.

It should look like this:

`Webserver started: http://localhost:4040`

4040 is the port my server is running on, yours might be different.

To connect your other other devices to the server they must all be on the same wifi. After having made sure this is the case, find your IP adress and connect to the server by typing it in the browser of the other devices, followed by a colon and then the port.

### Running tests

To run the test, use the phone device and press the film projector chrome logo.

I would recommend to zoom out as much as possible in the browsers of the different devices, since at this state, the logo is far to big.


### Uses

* [reconnecting-websocket](https://github.com/pladaria/reconnecting-websocket) wrapper (v3.2.2)

### Read more

* [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
* [express-ws](https://www.npmjs.com/package/express-ws)
