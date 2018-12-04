import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-newsletter',
  templateUrl: 'newsletter.html',
})
export class NewsletterPage {

  base_url:any= "http://420api.rcmdash.co.za/";

  
  product:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.product = navParams.get('product')
   console.log(this.product )

   console.log(this.base_url)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsletterPage');
  }

}
