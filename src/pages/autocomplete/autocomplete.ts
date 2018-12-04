import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-autocomplete',
  templateUrl: 'autocomplete.html',
})
export class AutocompletePage {

  autocompleteItems;
  autocomplete;
  // service = new google.maps.places.AutocompleteService();

  GoogleAutocomplete = new google.maps.places.AutocompleteService();
  geocoder = new google.maps.Geocoder;


  constructor(public viewCtrl: ViewController, private zone: NgZone, public navCtrl: NavController, public navParams: NavParams) {

    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }

  selectSearchResult(item) {
    this.viewCtrl.dismiss(item);

    this.autocompleteItems = [];

    // this.geocoder.geocode({ 'placeId': item.place_id }, (results, status) => {

    //   if (status === 'OK' && results[0]) {
    //     let position = {
    //       lat: results[0].geometry.location.lat,
    //       lng: results[0].geometry.location.lng
    //     };
    //     let marker = new google.maps.Marker({
    //       position: results[0].geometry.location
    //     });
    //     console.log(marker.position.lat())
    //     console.log(marker.position.lng());
    //   }
    // })
  }

  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input, componentRestrictions: { country: 'ZA' } },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
  }


}