import { Component, ViewChild} from '@angular/core';
import { NavController,NavParams,Slides,AlertController } from 'ionic-angular';
import {NewsletterPage} from '../newsletter/newsletter'; 
import{ProductPage} from '../product/product';
import {FourtwentyProvider} from '../../providers/fourtwenty/fourtwenty'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  @ViewChild('productSlides') productSlides: Slides;


 //declared variables

  categories:any

  link:any

  newsltter:any

  token:any ;

  base_url:any= "http://420api.rcmdash.co.za/";

  constructor(public navCtrl: NavController,public provider:FourtwentyProvider,public alertCtrl: AlertController, public navParams: NavParams) {


   //localstorage 
  this.token = localStorage.getItem('token')
  console.log("local",this.token)
   
  //passed token from login 
  this.token = navParams.get('token')
  console.log(this.token)



  this.provider.getCategories(this.token).subscribe(data => {
    console.log(data._embedded.categories)

    this.categories = data._embedded.categories
    console.log("link home",this.base_url)
   
  } )


    this.provider.getnewsletter(this.token).subscribe(data =>{

      console.log(data)

      this.newsltter =  data._embedded.posts

    })


    //this function allows for categories to slide
    setInterval(() => {

      if (this.productSlides.getActiveIndex() == this.productSlides.length() - 1)
        this.productSlides.slideTo(0, 2000);

      this.productSlides.slideNext(1000);
    }, 3000);


  }



 //product function 
 openProductPage(product){

  console.log("token",this.token)

  console.log(product._links.products.href)

  this.link = product._links.products.href

  console.log("hello", this.link)



  this.provider.getproduct(this.link,this.token).subscribe(data =>{
    console.log("inside provider",data._embedded.products)
  
    if(data._embedded.products.length != 0 ){


   //select only product that are available in stock      
      var instock = data._embedded.products.filter(function(item) {
        return item.availability !== "NO";
      });
      
      console.log("gee",instock);

      // tricker an error
      if(instock.length != 0){

        this.navCtrl.push(ProductPage,{
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



//display news feeds
 openNewsletterPage(product){
   console.log(product)

   this.navCtrl.push(NewsletterPage,{
     product:product
   })
 }



}
