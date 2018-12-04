import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Navbar,ToastController } from 'ionic-angular';
import {CheckoutPage} from '../checkout/checkout';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  @ViewChild(Navbar) navBar: Navbar;

  productitems:any

  countqty:number = 1;

  itemprice:number 

  itemarray =[]

  projects:any

  itemUpdated:any

  base_url:any= "http://420api.rcmdash.co.za/";

  qty : number = 1

  total:any

  priceobject:any

  testing:number

  show : any;
   show1 : any;

   product:any

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public toastCtrl: ToastController) {


  //  this.show = true;
  //  this.show1 = false;



  
    this.productitems = navParams.get('productitems')
    console.log("hello",this.productitems)
    

   this.product = navParams.get('productitems')
   console.log("product",this.product)
  

    console.log("price",this.productitems.price)


    

    console.log(this.base_url)

    this.total = navParams.get('total')
    console.log("total",this.total)
  
  }


  changeadd(item){


  

    // this.show = false;
    // this.show1 = true;


 


  if(item.quantity >= 10){

    console.log("error")

  }
  else{

    item.quantity = item.quantity + 1
    item.number_of_items = item.quantity 
  

    item.number_of_items = item.number_of_items * item.price
  
    console.log("check",item.number_of_items)
  
    item.number_of_items = item.number_of_items
  
   
  
   this.total = this.total + item.price
  
    console.log("item.price",item.price)
    console.log("",item.quantity)
  
  
    console.log("",item.quantity)
  
    this.countqty = item.quantity

  }


 
  }




  changeRemove(item){


   console.log("hello",item)


 if(item.quantity != 1){

 

  item.quantity = item.quantity - 1

  item.number_of_items = item.quantity 
  

  item.number_of_items = item.number_of_items * item.price

  console.log("check",item.number_of_items)

  item.number_of_items = item.number_of_items

 

 this.total = this.total - item.price

 

  console.log("item.price",item.price)
  console.log("",item.quantity)


  console.log("",item.quantity)

  this.countqty = item.quantity

 }
 else{

  console.log("hello",item)

  console.log("error")

  // this.productitems.splice(0,item)

  console.log("removed",this.productitems)

  let alert = this.alertCtrl.create({
    title: 'Warning!!',
    subTitle: 'Are you sure you want to remove this item',
    buttons: [  {
      text: 'ok',
      role: 'cancel',
      handler: () => {

var idx = this.productitems.indexOf(item); // 1

console.log("idx", idx)

// be careful, .indexOf() will return -1 if the item is not found

if (idx !== -1) {
  this.productitems.splice(idx, 1);

    

   if(this.productitems.length == 0 ){

    const toast = this.toastCtrl.create({
      message: 'All items removed',
      duration: 3000
    });
    toast.present();

    this.total = this.total - item.price
    
    console.log("test T",this.total)

    console.log("te")
     



   }
   else{

    this.total = this.total - item.price
    
    console.log("test T",this.total)

    console.log("te")

   }
  


}
      }
    },
    {
      text: 'cancel',
      handler: () => {
        console.log('Buy clicked');
      }
    }]
  });
  alert.present();





 }


 

  }


  removeFromCart(item){

    console.log(item)

    var idx = this.productitems.indexOf(item); // 1

    console.log("idx", idx)

    const alert = this.alertCtrl.create({
      title: 'Warning!!',
      subTitle: 'Are you sure you want to remove this item',
      buttons: [
        {
          text: 'ok',
          handler: () => {
             console.log('Disagree clicked');

             //rm total quantity from price
    
             this.total = this.total - item.number_of_items

            this.productitems.splice(idx, 1);

            console.log("rm",this.productitems)
          }
        }
      ]


    });
    alert.present();





  }

  checkout(){

    if(this.productitems.length == 0){

      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'All items removed please add items before you proceed',
        buttons: ['OK']
      });
      alert.present();

    }
    else{

      this.navCtrl.push(CheckoutPage,{
        product:this.productitems
      })

    }

  
    
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');

    this.setBackButtonAction()
   


  }

   //Method to override the default back button action
   setBackButtonAction(){
    this.navBar.backButtonClick = () => {
    //Write here wherever you wanna do

     this.productitems = [];

       this.navCtrl.pop(this.productitems)
      // this
      console.log("back buttomn")
            
      console.log("back rm",this.productitems) 
     
    }

    
 }






}
