import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewsletterPage} from '../pages/newsletter/newsletter';
import {ProductPage} from '../pages/product/product';
import {ViewproductPage} from '../pages/viewproduct/viewproduct';
import {IonicStorageModule} from '@ionic/storage';
import {CartPage} from '../pages/cart/cart';
import {LoginPage} from '../pages/login/login';
import { FourtwentyProvider } from '../providers/fourtwenty/fourtwenty';

import {HttpModule} from '@angular/http';
import {CheckoutPage} from '../pages/checkout/checkout';

import { Geolocation } from '@ionic-native/geolocation';

import{AutocompletePage} from '../pages/autocomplete/autocomplete';

import {GoogleMaps} from '@ionic-native/google-maps';
import {RemembermePage} from '../pages/rememberme/rememberme';



@NgModule({
  
  declarations: [
    MyApp,
    HomePage,
    NewsletterPage,
    ProductPage,
    ViewproductPage,
    CartPage,
    LoginPage,
    CheckoutPage,
    AutocompletePage,
    RemembermePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

    IonicStorageModule.forRoot(),
   
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsletterPage,
    ProductPage,
    ViewproductPage,
    CartPage,
    LoginPage,
    CheckoutPage,
    AutocompletePage,
    RemembermePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FourtwentyProvider,
    Geolocation

  ]
})
export class AppModule {}
