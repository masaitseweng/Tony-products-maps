import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
// import {CheckoutPage} from '../pages/checkout/checkout';
// import{AutocompletePage} from '../pages/autocomplete/autocomplete';
import {FourtwentyProvider} from '../providers/fourtwenty/fourtwenty';
import {ProductPage} from '../pages/product/product';


@Component({
  templateUrl: 'app.html'

  
})


export class MyApp {

  @ViewChild(Nav) nav: Nav;


  // @ViewChild(Content) content: Content;



  // rootPage:any = HomePage;

  rootPage:any = LoginPage;
  // rootPage:any = CheckoutPage;
  categories:any

  link:any

  token:any


  base_url:any= "http://420api.rcmdash.co.za/";


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public provider:FourtwentyProvider,private alertCtrl: AlertController) {

  
    this.token = localStorage.getItem('token')
    console.log("local",this.token)
  

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }



  openHomePage(){
    console.log('hello')

    // this.nav.setRoot(HomePage)


  }

  openProduct(product){

    console.log(product._links.products.href)

    this.link = product._links.products.href
  
    console.log("hello")
  
  
    this.provider.getproduct(this.link,this.token).subscribe(data =>{
      console.log("inside provider",data._embedded.products)
    
      if(data._embedded.products.length != 0 ){


        var instock = data._embedded.products.filter(function(item){

          return item.availability !== "NO";
        })



           // tricker an error
      if(instock.length != 0){


        this.nav.push(ProductPage,{
          product:instock
        })
     
      
      }else{

        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Out Of Stock',
          buttons: ['Ok']
        });
        alert.present();



      }
  
 
  
      }
      else{
  
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'This category has no product',
          buttons: ['Ok']
        });
        alert.present();
  
      }
  
    })

  }


  openlogout(){

    console.log("hello logout")

    this.nav.setRoot(LoginPage)
  
   }

   myCallback(){
     console.log("hello")

     this.token = localStorage.getItem('token')
     console.log("local",this.token)
   
      
      
      if(this.token != null){
 
       console.log("hello",this.token)
 
       this.provider.getCategories(this.token).subscribe(data => {
         console.log(data._embedded.categories)
   
         this.categories = data._embedded.categories
   
         console.log("link home",this.base_url)
        
         
   
       } )
 
      }
      else{
 
       console.log("error",)
 
      }
      


   }
}

