import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase';
import {AngularFireModule} from '@angular/fire';
const firebaseConfig = {
  apiKey: 'AIzaSyDd1H3t9qksj13AqIVogVyK8vg7hwskY_M',
  authDomain: 'ionic-consumo-api.firebaseapp.com',
  projectId: 'ionic-consumo-api',
  storageBucket: 'ionic-consumo-api.appspot.com',
  messagingSenderId: '496747516660',
  appId: '1:496747516660:web:9ec6fa4767ea8a4f9704a1',
  measurementId: 'G-K5NYFYP6TS'
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
