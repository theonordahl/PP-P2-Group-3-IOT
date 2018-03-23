package com.inducesmile.chromecast;

import android.Manifest;
import android.content.pm.PackageManager;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;

import github.nisrulz.lantern.Lantern;

public class VideoActivity extends AppCompatActivity {

    private final String TAG = VideoActivity.class.getSimpleName();

    private WebView videoWeb;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_video);

        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults);
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            return;
        }

        Lantern.getInstance().init(VideoActivity.this);


        videoWeb = (WebView)findViewById(R.id.web);

        videoWeb.getSettings().setJavaScriptEnabled(true);
        videoWeb.getSettings().setLoadWithOverviewMode(true);
        videoWeb.setWebViewClient(new WebViewClient());
        videoWeb.setBackgroundColor(0x00000000);

        videoWeb.setWebViewClient(new WebViewClient(){
            @Override
            public void onPageFinished(WebView webView, String url) {
                super.onPageFinished(webView, url);

            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return false;
            }
        });

        videoWeb.getSettings().setBuiltInZoomControls(true);
        videoWeb.loadUrl("https://youtu.be/rtOvBOTyX00");


        Button closeBtn = (Button)findViewById(R.id.stop_cast);
        closeBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //stop casting
                ((CustomApplication)CustomApplication.getCustomApplication()).getWebSocketClient().close();
            }
        });

        Button standby = (Button)findViewById(R.id.stand_by);
        standby.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ((CustomApplication)CustomApplication.getCustomApplication()).getWebSocketClient().send("2>");
                playSound();
                flashLightOn();
            }
        });


        Button castBtn = (Button)findViewById(R.id.cast_btn);
        castBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // send data to the server
                ((CustomApplication)CustomApplication.getCustomApplication()).getWebSocketClient().send("3>");
            }
        });
    }

    private void playSound(){
        MediaPlayer mediaPlayer = MediaPlayer.create(VideoActivity.this, R.raw.dogs);
        mediaPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
            @Override
            public void onPrepared(MediaPlayer mediaPlayer) {
                mediaPlayer.start();
            }
        });
    }

    private void flashLightOn(){
        Lantern.getInstance().turnOnFlashlight(VideoActivity.this);
    }


}
