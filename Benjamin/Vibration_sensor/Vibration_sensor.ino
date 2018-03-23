#include <Keyboard.h>

int count = 0;
int ledPin = 13; //Pin 13 is used for the LED ligth
int shockPin = 10; // Use Pin 10 as Input
int shockVal = HIGH;
boolean bAlarm = false;
const int buttonPin = 2;   // input pin for pushbutton

unsigned long lastShockTime; // Record the time that we measured a shock

int shockAlarmTime = 350; // Number of milli seconds to keep the shock alarm high

void setup ()
{
  Serial.begin(9600);  
  pinMode (shockPin, INPUT) ; // input from the vibration sensor
  Keyboard.begin();
  pinMode(buttonPin, INPUT_PULLUP); // input from button
}
void loop ()
{
  int buttonState = digitalRead(buttonPin);
  shockVal = digitalRead (shockPin) ; // read the value from the sensor

  //I had two versions of my prototype, one that tested sensors and one that tested buttons. This function is for the button part.
  if(buttonState == HIGH){
    Keyboard.press(0x20); //Presses the space key
    Keyboard.release(0x20); //Releases the space key
    // fade in                              
    for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    analogWrite(ledPin, fadeValue);
    delay(30);
    } 
    // fade out
    for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    analogWrite(ledPin, fadeValue);
    delay(30);
    }
  }
  
  //This is for the sensor version of the prototype
  if (shockVal == LOW) // If we are in an alarm state
  {
    lastShockTime = millis(); // record the time of the shock
    // This is so you dont scroll on the output screen
    if (!bAlarm){
      Serial.println("Shock Alarm");

    if(count == 0){
    Keyboard.press(0x20);
    Keyboard.release(0x20); 
    count++;
    }

    // fade in                              
    for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    analogWrite(ledPin, fadeValue);
    delay(30);
    } 
  // fade out
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    analogWrite(ledPin, fadeValue);
    delay(30);
    }
  bAlarm = true;
    }
  }
  else
  {
    //To give indication of when the sensor is not triggering actions
    if( (millis()-lastShockTime) > shockAlarmTime  &&  bAlarm){
      Serial.println("no alarm");
      bAlarm = false;
      count = 0;
    }
  }
}



