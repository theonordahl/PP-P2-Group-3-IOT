const int GREEN_PIN = 3;
const int BLUE_PIN = 5;
const int RED_PIN = 6;

const int PHOTO_SENSOR_PIN = A1;
int photo_sensor_value;

int tv_state = 1;

const byte numChars = 16;
char receivedChars[numChars];


void setup() {
  
  pinMode(GREEN_PIN, OUTPUT);   
  pinMode(BLUE_PIN, OUTPUT);
  pinMode(RED_PIN, OUTPUT);

  Serial.begin(9600);

}

void loop() {

  readinput();
  content();
//  if(receivedChars[0] != '\0'){
//     Serial.print(receivedChars);
//     
//     Serial.flush();
//     delay(3000); 
//    content();
//  }

  photo_sensor_value = analogRead(PHOTO_SENSOR_PIN);
  int val = map(photo_sensor_value, 0, 1023, 0, 255);
  
  if(val <= 100){
    displayRightColor(100);  
  }
  else if(val > 100 && val <= 150){
    displayRightColor(100);
  }
  else{
    displayRightColor(150);
  }
 
}

void content(){
  for(int i = 0; i < numChars; i++){
    
    if(receivedChars[i] != '\0'){

      if(receivedChars[i] == '1'){
         tv_state = 1;
      }
      if(receivedChars[i] == '2'){
         tv_state = 2;
       }
       if(receivedChars[i] == '3'){
         tv_state = 3;
       }

       Serial.print(receivedChars[i]);
       Serial.flush();
       delay(300);
    }
  }
}

void readinput(){

  char rc;
  static byte ndx = 0;
  char endMarker = '>';

  while(Serial.available() > 0){
      rc = Serial.read();
      
      if (rc != endMarker) {
          receivedChars[ndx] = rc;
          ndx++;
          if (ndx >= numChars) {
              ndx = numChars - 1;
          }
      }
      else {
         receivedChars[ndx] = '\0'; // terminate the string
         ndx = 0;
      } 
   }
    
}


void displayRightColor(int value){
  if(tv_state == 3){
      //Tv is on standby
      setColor(value, 0, 0);
    }
    if(tv_state == 1){
      //Tv is casting
      setColor(0, value, 0);
    }
    if(tv_state == 2){
      //Tv on channel
      setColor(0, 0, value);
    }
}

void setColor(int redValue, int greenValue, int blueValue){
   analogWrite(RED_PIN, redValue);
   analogWrite(GREEN_PIN, greenValue);
   analogWrite(BLUE_PIN, blueValue);
}
