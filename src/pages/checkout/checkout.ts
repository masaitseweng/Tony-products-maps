import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController,LoadingController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import {AutocompletePage} from '../autocomplete/autocomplete';
import {FourtwentyProvider} from '../../providers/fourtwenty/fourtwenty';
import {HomePage} from '../../pages/home/home';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';


// import { OperationsProvider } from "../../providers/operations/operations";
// import firebase from 'firebase';
// import { LoginProvider } from '../../providers/login/login';

declare var google;

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {


  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;



  options: GeolocationOptions;
  currentPos: Geoposition;
  geocoder = new google.maps.Geocoder;
  position: any;
  distance: any;
  saved: any;
  uid: any;
  Lats: string = "";
  Longs: string = "";
  destinationPlace: any;
  userData: any;
  order:any

  product:any
  orderproduct:any

  productID:any

producttittle :any
productdescription:any
productprice:any

productquantity:any
productimageUrl:any

// @ViewChild('map') mapElement: ElementRef;
// map: any;
start = 'chicago, il';
end = 'chicago, il';
directionsService = new google.maps.DirectionsService;
directionsDisplay = new google.maps.DirectionsRenderer;

token:any



  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public toastCtrl: ToastController, private alertCtrl: AlertController, private modalCtrl: ModalController,public provider:FourtwentyProvider,public googlemaps:GoogleMaps,public loadingCtrl: LoadingController) {


   this.token =  localStorage.getItem('token') 

   console.log("token",this.token)

    this.product = navParams.get('product')

    console.log("hello",this.product)
  
  }


  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: -26.270760, lng: 28.112268}
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }



  Manuallylocation() {

   

    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {


      const loader = this.loadingCtrl.create({
        content: "Please wait...",
        // duration: 3000
      });

      loader.present();

      console.log(data.description)

   
      console.log("product",this.orderproduct)

      for(let i=0; i<this.product.length; i++){

        this.productID = this.product[i].id
        this.producttittle = this.product[i].title
        this.productdescription  = this.product[i].description
        this.productprice  = this.product[i].price

        this.productquantity  = this.product[i].quantity
        this.productimageUrl  = this.product[i].imageUrl

  }

  [{"id":this.productID,"title":this.producttittle,"description":this.productdescription,"price":this.productprice,"quantity":this.productquantity,"img":this.productimageUrl ,"Total":300} ]

   this.orderproduct = {"location":data.description,"products_in_order":this.product}
  console.log("testing",this.orderproduct)

    console.log("inside test",this.orderproduct)

      this.provider.postorder(this.orderproduct).subscribe(data =>{

        console.log("inside provider")


        this.order = data


      
              
                  

      
        console.log("",this.order)

        if(this.order.statusText ===  "OK"){

          loader.dismiss()

   
        console.log("token pass yto home page",this.token)
 
          let alert = this.alertCtrl.create({
            title: 'Thank You',
            subTitle: 'Your order has been placed for delivery. Have a great day!!',
            buttons: [ {
              text: 'OK',
              role: 'cancel',
              handler: () => {
      
                this.navCtrl.setRoot(HomePage,{
                  token:this.token
                })
              }
            }]
          });
          alert.present();

        }

        else{

        }


      },
      (err) => {
        console.log(err)

        loader.dismiss()

        console.log("token pass yto home page",this.token)
  
        let alert = this.alertCtrl.create({
          title: 'Thank You',
          subTitle: 'Your order has been placed for delivery. Have a great day!!',
          buttons: [ {
            text: 'OK',
            role: 'cancel',
            handler: () => {
    
              this.navCtrl.setRoot(HomePage,{
                token:this.token
              })
            }
          }]
        });
        alert.present();
        
      });
    
      


    });
    modal.present();




  }


}

