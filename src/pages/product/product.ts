import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams,ToastController,AlertController } from 'ionic-angular';
import {ViewproductPage} from '../viewproduct/viewproduct';
import{CartPage} from '../cart/cart';
import{FourtwentyProvider} from '../../providers/fourtwenty/fourtwenty';


@IonicPage()
@Component({
 selector: 'page-product',
 templateUrl: 'product.html',
})
export class ProductPage {

 product:any

 productitem =[]

 cart_count: number = 0;

 total:number = 0;

 itemUpdated:any




 items = [];


disabled = false;

 base_url:any= "http://420api.rcmdash.co.za/";

 constructor(public navCtrl: NavController, public navParams: NavParams,public provider: FourtwentyProvider,public toastCtrl:ToastController,public alertCtrl: AlertController) {

   this.product =  navParams.get('product')
   console.log(this.product)

    console.log(this.base_url)



 }



 ///add item to cart

 addtocart(product){




 console.log(product)

 var item = product.price



 console.log("total",this.total)


 console.log(this.total)


 if(this.items.indexOf(product) === -1) {


   this.total = this.total + item

   console.log("t",this.total )




   this.items.push(product);

   console.log(this.items);


   const toast = this.toastCtrl.create({
     message: 'Item '+product.title+' added to cart'
     ,
     duration: 2000
   });
   toast.present();


 // total items






  //count number of items added to cart
   console.log("hello one",this.items.length)


   this.cart_count = this.items.length



 }

 else{
   console.log("error")

   const alert = this.alertCtrl.create({
     title: 'Error',
     subTitle: 'Already Added to Cart',
     buttons: ['OK']
   });
   alert.present();

 }



 }


 openCart(){




 console.log(this.items)


 if(this.items.length == 0){


   const alert = this.alertCtrl.create({
     title: 'Error',
     subTitle: 'Your cart is empty, please add some items before you processed',
     buttons: ['OK']
   });
   alert.present();



 }
 else{

    // update all quantity in an object array to 1
  for(var i=0; i < this.items.length; i++) {
   console.log(this.items[i]);
   this.items[i].quantity =  1

   this.items[i].number_of_items = this.items[i].price

   console.log("hello",this.items)



   console.log("modified",this.items[i])
   console.log(this.items)

}



this.navCtrl.push(CartPage,{
  productitems:this.items,
  total: this.total,

}


)
//clear added items after pushing to cart
this.cart_count = 0;
this.items =[];
this.total =0;



 }
 }

 viewproduct(product){


 // this.productitem.push(product)

 console.log("hello",this.items)

 this.navCtrl.push(ViewproductPage,{
   viewproduct:product,
   product:this.product
 })


 }




 ionViewDidLoad() {
   console.log('ionViewDidLoad ProductPage');
 }

}