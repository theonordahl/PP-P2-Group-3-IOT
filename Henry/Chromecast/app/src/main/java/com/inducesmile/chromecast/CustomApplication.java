package com.inducesmile.chromecast;

import android.app.Application;
import android.content.Context;

import org.java_websocket.client.WebSocketClient;


public class CustomApplication extends Application {

    private WebSocketClient mWebSocketClient;

    private String TAG = CustomApplication.class.getSimpleName();

    private static CustomApplication instance;

    public static Context getCustomApplication() {
        return instance;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        //connectWebSocket();
        instance = this;
    }

    public void setWebSocket(WebSocketClient mWebSocketClient){
        this.mWebSocketClient = mWebSocketClient;
    }

    public WebSocketClient getWebSocketClient(){
        return this.mWebSocketClient;
    }



}
