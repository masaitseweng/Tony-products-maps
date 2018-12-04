import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-viewproduct',
  templateUrl: 'viewproduct.html',
})
export class ViewproductPage {

  viewproduct:any
  base_url:any= "http://420api.rcmdash.co.za/";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.viewproduct = navParams.get('viewproduct')
  console.log(this.viewproduct)

  console.log("hello",this.base_url)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewproductPage');
  }

}
