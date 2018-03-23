package com.inducesmile.chromecast;

import android.Manifest;
import android.app.Notification;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.hardware.Camera;
import android.media.MediaPlayer;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Vibrator;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;

import java.net.URI;
import java.net.URISyntaxException;

import br.com.goncalves.pugnotification.notification.PugNotification;
import github.nisrulz.lantern.Lantern;

public class MainActivity extends AppCompatActivity {

    private final String TAG = MainActivity.class.getSimpleName();

    private WebSocketClient mWebSocketClient;

    private Camera cam;

    private Bitmap icon;

    private String currentStatus = "-1";

    private Vibrator v;

    private int currentNotificationID = 0;

    private TextView textView;

    private final String VIBRATE = "Vibrate";

    private static final int NOTIFICATION_ID = 2;

    private static final String NOTIFICATION_CHANNEL_ID = "my_notification_channels";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
             //  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults);
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            return;
        }
        Lantern.getInstance().init(MainActivity.this);

        v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
        icon = BitmapFactory.decodeResource(this.getResources(), R.mipmap.ic_launcher);

        textView = (TextView)findViewById(R.id.messages);

        Button videoBtn = (Button)findViewById(R.id.video);
        videoBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent videoIntent = new Intent(MainActivity.this, VideoActivity.class);
                startActivity(videoIntent);
            }
        });

        Button connectBtn = (Button)findViewById(R.id.websocket);
        connectBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                textView.setText("Server connected");
                connectWebSocket();
                ((CustomApplication)CustomApplication.getCustomApplication()).setWebSocket(mWebSocketClient);
            }
        });

        Button closeConnection = (Button)findViewById(R.id.end_connection);
        closeConnection.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                textView.setText("Server close");

                if(mWebSocketClient != null){
                    textView.setText("Server close");
                    mWebSocketClient.send("1>");
                    //mWebSocketClient.close();
                }
            }
        });
    }

    private void connectWebSocket() {
        URI uri;
        try {
            uri = new URI("ws://10.2.16.54:4000/serial");
        } catch (URISyntaxException e) {
            e.printStackTrace();
            return;
        }

        mWebSocketClient = new WebSocketClient(uri) {
            @Override
            public void onOpen(ServerHandshake serverHandshake) {
                Log.i("WebSocket", "Opened");
                mWebSocketClient.send("Hello from " + Build.MANUFACTURER + " " + Build.MODEL);
            }

            @Override
            public void onMessage(String s) {
                final String message = s;

                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        textView.setText(message);

                        if(message.contains(VIBRATE)){
                            //vibrate a phone
                            v.vibrate(2000);
                        }

                        if(message.contains("Sound")){
                            //vibrate a phone
                            playSound();
                        }

                        if(message.contains("Flashlight")){
                            //phone flash light
                            flashLightOn();

                        }

                        if(message.contains("Ringing")) {
                            //phone ring
                            turnOnRinging();
                        }
                    }
                });
            }

            @Override
            public void onClose(int i, String s, boolean b) {
                Log.i("WebSocket", "Closed " + s);
            }

            @Override
            public void onError(Exception e) {
                Log.i("WebSocket", "Error " + e.getMessage());
            }
        };
        mWebSocketClient.connect();

    }

    private void flashLightOn(){
        Lantern.getInstance().turnOnFlashlight(MainActivity.this);
    }

    private void turnOnRinging(){
        Uri uri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_RINGTONE);
        Ringtone ringtone = RingtoneManager.getRingtone(MainActivity.this, uri);
        ringtone.play();
    }


    private void playSound(){
        MediaPlayer mediaPlayer = MediaPlayer.create(MainActivity.this, R.raw.dogs);
        mediaPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
            @Override
            public void onPrepared(MediaPlayer mediaPlayer) {
                mediaPlayer.start();
            }
        });
    }

    private void notifyMe(){
        PugNotification.with(MainActivity.this)
                .load()
                .title("Arduino")
                .message("Testing notification")
                .bigTextStyle("Project brief is confusing")
                .smallIcon(R.drawable.pugnotification_ic_launcher)
                .largeIcon(R.drawable.pugnotification_ic_launcher)
                .flags(Notification.DEFAULT_ALL)
                .simple()
                .build();
    }

}
