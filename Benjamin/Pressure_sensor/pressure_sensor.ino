int fsrPin =  0    ;     // Pressure sensor is connected to analog-0 input on the board
int fsrReading;
 
void setup(void) {
  // For debugging with the help of the serial monitor
  Serial.begin(9600);   
}
 
void loop(void) {
  fsrReading = analogRead(fsrPin);  
 
  Serial.print("Analog reading = ");
  Serial.print(fsrReading);     // Raw analog reading
 
  // This was to test the different states of pressure that the sensor detects
  if (fsrReading < 10) {
    Serial.println(" - No pressure");
  } else if (fsrReading < 350) {
    Serial.println(" - Light touch");
  } else if (fsrReading < 650) {
    Serial.println(" - Light squeeze");
  } else if (fsrReading < 95 0) {
    Serial.println(" - Medium squeeze");
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

  } else {
    Serial.println(" - Big squeeze");
  }
  delay(1000);
} 
