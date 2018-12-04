webpackJsonp([9],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutocompletePage = /** @class */ (function () {
    function AutocompletePage(viewCtrl, zone, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // service = new google.maps.places.AutocompleteService();
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder;
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
    }
    AutocompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
    };
    AutocompletePage.prototype.selectSearchResult = function (item) {
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
    };
    AutocompletePage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input, componentRestrictions: { country: 'ZA' } }, function (predictions, status) {
            _this.autocompleteItems = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    _this.autocompleteItems.push(prediction);
                });
            });
        });
    };
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-autocomplete',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/pages/autocomplete/autocomplete.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-searchbar hideCancelButton="false" [(ngModel)]="autocomplete.input" (ionInput)="updateSearchResults()" placeholder="Search for a place"></ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="dismiss()">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-list [hidden]="autocompleteItems.length == 0">\n    <ion-item *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResult(item)">\n      <p>{{ item.description }}</p>\n    </ion-item>\n    <ion-item>\n      <img src="https://developers.google.com/maps/documentation/places/images/powered-by-google-on-white.png" alt="" />\n    </ion-item>\n  </ion-list>'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/pages/autocomplete/autocomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_checkout__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, alertCtrl, toastCtrl) {
        //  this.show = true;
        //  this.show1 = false;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.countqty = 1;
        this.itemarray = [];
        this.base_url = "http://420api.rcmdash.co.za/";
        this.qty = 1;
        this.productitems = navParams.get('productitems');
        console.log("hello", this.productitems);
        this.product = navParams.get('productitems');
        console.log("product", this.product);
        console.log("price", this.productitems.price);
        console.log(this.base_url);
        this.total = navParams.get('total');
        console.log("total", this.total);
    }
    CartPage.prototype.changeadd = function (item) {
        // this.show = false;
        // this.show1 = true;
        if (item.quantity >= 10) {
            console.log("error");
        }
        else {
            item.quantity = item.quantity + 1;
            item.number_of_items = item.quantity;
            item.number_of_items = item.number_of_items * item.price;
            console.log("check", item.number_of_items);
            item.number_of_items = item.number_of_items;
            this.total = this.total + item.price;
            console.log("item.price", item.price);
            console.log("", item.quantity);
            console.log("", item.quantity);
            this.countqty = item.quantity;
        }
    };
    CartPage.prototype.changeRemove = function (item) {
        var _this = this;
        console.log("hello", item);
        if (item.quantity != 1) {
            item.quantity = item.quantity - 1;
            item.number_of_items = item.quantity;
            item.number_of_items = item.number_of_items * item.price;
            console.log("check", item.number_of_items);
            item.number_of_items = item.number_of_items;
            this.total = this.total - item.price;
            console.log("item.price", item.price);
            console.log("", item.quantity);
            console.log("", item.quantity);
            this.countqty = item.quantity;
        }
        else {
            console.log("hello", item);
            console.log("error");
            // this.productitems.splice(0,item)
            console.log("removed", this.productitems);
            var alert_1 = this.alertCtrl.create({
                title: 'Warning!!',
                subTitle: 'Are you sure you want to remove this item',
                buttons: [{
                        text: 'ok',
                        role: 'cancel',
                        handler: function () {
                            var idx = _this.productitems.indexOf(item); // 1
                            console.log("idx", idx);
                            // be careful, .indexOf() will return -1 if the item is not found
                            if (idx !== -1) {
                                _this.productitems.splice(idx, 1);
                                if (_this.productitems.length == 0) {
                                    var toast = _this.toastCtrl.create({
                                        message: 'All items removed',
                                        duration: 3000
                                    });
                                    toast.present();
                                    _this.total = _this.total - item.price;
                                    console.log("test T", _this.total);
                                    console.log("te");
                                }
                                else {
                                    _this.total = _this.total - item.price;
                                    console.log("test T", _this.total);
                                    console.log("te");
                                }
                            }
                        }
                    },
                    {
                        text: 'cancel',
                        handler: function () {
                            console.log('Buy clicked');
                        }
                    }]
            });
            alert_1.present();
        }
    };
    CartPage.prototype.removeFromCart = function (item) {
        var _this = this;
        console.log(item);
        var idx = this.productitems.indexOf(item); // 1
        console.log("idx", idx);
        var alert = this.alertCtrl.create({
            title: 'Warning!!',
            subTitle: 'Are you sure you want to remove this item',
            buttons: [
                {
                    text: 'ok',
                    handler: function () {
                        console.log('Disagree clicked');
                        //rm total quantity from price
                        _this.total = _this.total - item.number_of_items;
                        _this.productitems.splice(idx, 1);
                        console.log("rm", _this.productitems);
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage.prototype.checkout = function () {
        if (this.productitems.length == 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'All items removed please add items before you proceed',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__checkout_checkout__["a" /* CheckoutPage */], {
                product: this.productitems
            });
        }
    };
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
        this.setBackButtonAction();
    };
    //Method to override the default back button action
    CartPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            //Write here wherever you wanna do
            _this.productitems = [];
            _this.navCtrl.pop(_this.productitems);
            // this
            console.log("back buttomn");
            console.log("back rm", _this.productitems);
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Navbar */])
    ], CartPage.prototype, "navBar", void 0);
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/pages/cart/cart.html"*/'\n<ion-header>\n\n  <ion-navbar color="fourtwenty">\n    <ion-title>My Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="login-content">\n\n\n    <ion-list>\n        <ion-item-divider text-center color="fourtwentylight">\n          Items In My Cart\n        </ion-item-divider>\n        <ion-item-divider color="light" [hidden]="!showEmptyCartMessage">\n          <small>There are no products in your cart.</small>\n        </ion-item-divider>\n    \n        <ion-card color="fourtwenty" *ngFor="let item of productitems; let i = index">\n          <ion-item color="fourtwenty" >\n    \n            <ion-thumbnail item-right>\n              <img [src]="base_url+item.imageUrl" />\n            </ion-thumbnail>\n            \n            <h2>{{ item.title }}</h2>\n\n\n            <p ><span  >{{item.number_of_items }}&nbsp;</span></p>\n          </ion-item>\n\n          <ion-item class="compact">\n            <ion-row no-padding>\n              <ion-col col-8 no-padding>\n                <button clear color="danger" ion-button icon-only (click)="changeRemove(item)">\n                  <ion-icon name="remove-circle"></ion-icon>\n                </button>\n                <button ion-button color="dark" clear>{{item.quantity}}</button>\n                <button clear color="danger" ion-button icon-only (click)="changeadd(item)">\n                  <ion-icon name="add-circle"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-4 style="text-align: right;">\n                <button ion-button small outline (click)="removeFromCart(item)" style="width: 64px;" color="danger">Remove</button>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-list>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="fourtwenty">\n  \n      <ion-row no-padding >\n        <ion-col no-padding>\n          <button style="color:#ffffff;" ion-button  block clear>TOTAL {{ currency_symbol }} {{ total | number}}</button>\n        </ion-col>\n        <ion-col no-padding>\n          <button style="color:#ffffff; border:1px solid #ffffff;" ion-button  block outline (click)="checkout()">Checkout</button>\n        </ion-col>\n      </ion-row>\n  \n    </ion-toolbar>\n  </ion-footer>\n\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocomplete_autocomplete__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fourtwenty_fourtwenty__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams, geolocation, toastCtrl, alertCtrl, modalCtrl, provider, googlemaps, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.provider = provider;
        this.googlemaps = googlemaps;
        this.loadingCtrl = loadingCtrl;
        this.geocoder = new google.maps.Geocoder;
        this.Lats = "";
        this.Longs = "";
        // @ViewChild('map') mapElement: ElementRef;
        // map: any;
        this.start = 'chicago, il';
        this.end = 'chicago, il';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.token = localStorage.getItem('token');
        console.log("token", this.token);
        this.product = navParams.get('product');
        console.log("hello", this.product);
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    CheckoutPage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: -26.270760, lng: 28.112268 }
        });
        this.directionsDisplay.setMap(this.map);
    };
    CheckoutPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    CheckoutPage.prototype.Manuallylocation = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__autocomplete_autocomplete__["a" /* AutocompletePage */]);
        var me = this;
        modal.onDidDismiss(function (data) {
            var loader = _this.loadingCtrl.create({
                content: "Please wait...",
            });
            loader.present();
            console.log(data.description);
            console.log("product", _this.orderproduct);
            for (var i = 0; i < _this.product.length; i++) {
                _this.productID = _this.product[i].id;
                _this.producttittle = _this.product[i].title;
                _this.productdescription = _this.product[i].description;
                _this.productprice = _this.product[i].price;
                _this.productquantity = _this.product[i].quantity;
                _this.productimageUrl = _this.product[i].imageUrl;
            }
            [{ "id": _this.productID, "title": _this.producttittle, "description": _this.productdescription, "price": _this.productprice, "quantity": _this.productquantity, "img": _this.productimageUrl, "Total": 300 }];
            _this.orderproduct = { "location": data.description, "products_in_order": _this.product };
            console.log("testing", _this.orderproduct);
            console.log("inside test", _this.orderproduct);
            _this.provider.postorder(_this.orderproduct).subscribe(function (data) {
                console.log("inside provider");
                _this.order = data;
                console.log("", _this.order);
                if (_this.order.statusText === "OK") {
                    loader.dismiss();
                    console.log("token pass yto home page", _this.token);
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Thank You',
                        subTitle: 'Your order has been placed for delivery. Have a great day!!',
                        buttons: [{
                                text: 'OK',
                                role: 'cancel',
                                handler: function () {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], {
                                        token: _this.token
                                    });
                                }
                            }]
                    });
                    alert_1.present();
                }
                else {
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                console.log("token pass yto home page", _this.token);
                var alert = _this.alertCtrl.create({
                    title: 'Thank You',
                    subTitle: 'Your order has been placed for delivery. Have a great day!!',
                    buttons: [{
                            text: 'OK',
                            role: 'cancel',
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], {
                                    token: _this.token
                                });
                            }
                        }]
                });
                alert.present();
            });
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CheckoutPage.prototype, "mapElement", void 0);
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/pages/checkout/checkout.html"*/'\n<ion-header>\n\n  <ion-navbar color="fourtwenty">\n    <ion-title>Location</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n\n\n  \n        <div #map id="map"></div>\n\n\n        \n    <ion-item-divider  color="fourtwenty">\n       Delivery Address\n      </ion-item-divider>\n\n\n           <p padding>\n            <button ion-button block color="fourtwenty"  (click)="Manuallylocation()">Select Location Manually</button>\n          </p>\n\n\n          <ion-card color="fourtwenty">\n            <ion-card-header text-center>\n              Payment Details\n            </ion-card-header>\n            <ion-card-content>\n            <p>Please understand we do not accept card or eft as a payment.</p><br>\n            <p>We ask our clients to please provide cash on delivery</p>\n            </ion-card-content>\n          </ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_fourtwenty_fourtwenty__["a" /* FourtwentyProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsletterPage = /** @class */ (function () {
    function NewsletterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.base_url = "http://420api.rcmdash.co.za/";
        this.product = navParams.get('product');
        console.log(this.product);
        console.log(this.base_url);
    }
    NewsletterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsletterPage');
    };
    NewsletterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newsletter',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/pages/newsletter/newsletter.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{product.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    <ion-card>\n        <img [src]="base_url+product.imageUrl"/>\n        <ion-card-content>\n          <ion-card-title text-center>\n            {{product.title}}\n            </ion-card-title>\n          <p>\n              {{product.description}}\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n\n<style>\n  \n  .card-title-md {\n    display: block;\n    font-size: 2.4rem;\n    line-height: 1.2;\n    color: #222;\n    margin: 2px 0;\n    font-weight: bold;\n    padding: 8px 0;\n}\n</style>\n\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/pages/newsletter/newsletter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], NewsletterPage);
    return NewsletterPage;
}());

//# sourceMappingURL=newsletter.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewproductPage = /** @class */ (function () {
    function ViewproductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.base_url = "http://420api.rcmdash.co.za/";
        this.viewproduct = navParams.get('viewproduct');
        console.log(this.viewproduct);
        console.log("hello", this.base_url);
    }
    ViewproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewproductPage');
    };
    ViewproductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewproduct',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/pages/viewproduct/viewproduct.html"*/'\n<ion-header>\n\n  <ion-navbar color="fourtwenty">\n    <ion-title>{{viewproduct.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    <ion-card>\n        <img [src]="base_url+viewproduct.imageUrl"/>\n        <ion-card-content>\n          <ion-card-title text-center style="font-weight: bold;\n    color: green;">\n            {{viewproduct.title}}\n            </ion-card-title>\n          <p style="text-align: center;">\n              {{viewproduct.description}}\n          </p>\n          <p style="text-align: center; font-weight: bold;font-size: 30px;">\n             <span [innerHTML]="">R{{viewproduct.price}}</span></p>\n          <p>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n\n\n  <style type="text/css">\n    .content-md {\nbackground-image: url(http://rightclickerstesting.co.za/rcm5dane/loginbg.png) !important;\n}\n\n</style>'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/pages/viewproduct/viewproduct.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ViewproductPage);
    return ViewproductPage;
}());

//# sourceMappingURL=viewproduct.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_fourtwenty_fourtwenty__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, provider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.userData = { "usernameOrEmail": "", "password": "" };
        console.log(this.userData);
    }
    LoginPage.prototype.onLogin = function (userData) {
        var _this = this;
        console.log("hello", userData);
        this.provider.postsignin(userData).subscribe(function (reslogin) {
            _this.logindetails = reslogin;
            console.log(_this.logindetails.accessToken);
            _this.token = _this.logindetails.accessToken;
            if (_this.logindetails.accessToken) {
                localStorage.setItem('token', _this.logindetails.accessToken);
                // this.storage.set('token',this.logindetails.accessToken)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
                    token: _this.token
                });
                // let alert = this.alertCtrl.create({
                //   title: 'You have successfully logged in',
                //   subTitle: '',
                //   buttons: [ {
                //     text: 'Login',
                //     role: 'cancel',
                //     handler: () => {
                //       // console.log('Cancel clicked');
                //       this.navCtrl.setRoot(HomePage,
                //         {
                //           token : this.token
                //         })
                //     }
                //   },
                //   {
                //     text: 'Remember me',
                //     handler: () => {
                //       console.log('remember me');
                //     }
                //   }]
                // });
                // alert.present();
            }
            else {
                console.log("error");
            }
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Log in failed',
                subTitle: 'There is a problem with your username or password. Please try again!! ',
                buttons: [{
                        text: 'ok',
                        role: 'cancel',
                        handler: function () {
                            // console.log('Cancel clicked');
                            // this.navCtrl.setRoot(HomePage)
                            // localStorage.setItem('remembermetoken',this.logindetails.accessToken);
                        }
                    }]
            });
            alert.present();
            // console.log("error")
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n<!-- \n    <ion-row class="logo-row">\n      <ion-col></ion-col>\n      <ion-col width-67>\n        \n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row> -->\n\n    <div class="img-logo">\n            <img src="assets/imgs/420-logo.jpg"> \n    </div>\n\n  \n\n    <div class="login-box">\n\n\n                      \n      <form >\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              \n                    <ion-item>\n                            <ion-label stacked color="danger">Username</ion-label>\n                            <ion-input [(ngModel)]="userData.usernameOrEmail"  name="username" type="text"  spellcheck="false" autocapitalize="off" required>\n                            </ion-input>\n                        </ion-item>\n              \n                        <ion-item>\n                                <ion-label stacked color="danger">Password</ion-label>\n                                <ion-input [(ngModel)]="userData.password"  name="password" type="password"  required>\n                                </ion-input>\n                            </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col class="signup-col">\n\n                <ion-col>\n                        <button ion-button color="danger" (click)="onLogin(userData)" type="submit" block>Login</button>\n                    </ion-col>\n          </ion-col>\n        </ion-row>\n        \n      </form>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_fourtwenty_fourtwenty__["a" /* FourtwentyProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/autocomplete/autocomplete.module": [
		286,
		8
	],
	"../pages/cart/cart.module": [
		287,
		7
	],
	"../pages/checkout/checkout.module": [
		288,
		6
	],
	"../pages/login/login.module": [
		289,
		5
	],
	"../pages/menu/menu.module": [
		290,
		0
	],
	"../pages/newsletter/newsletter.module": [
		291,
		4
	],
	"../pages/product/product.module": [
		292,
		3
	],
	"../pages/rememberme/rememberme.module": [
		293,
		2
	],
	"../pages/viewproduct/viewproduct.module": [
		294,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemembermePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemembermePage = /** @class */ (function () {
    function RemembermePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RemembermePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RemembermePage');
    };
    RemembermePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rememberme',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/pages/rememberme/rememberme.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>rememberme</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/pages/rememberme/rememberme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RemembermePage);
    return RemembermePage;
}());

//# sourceMappingURL=rememberme.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_newsletter_newsletter__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_product__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viewproduct_viewproduct__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_fourtwenty_fourtwenty__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_checkout__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_autocomplete_autocomplete__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_maps__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_rememberme_rememberme__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_newsletter_newsletter__["a" /* NewsletterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_viewproduct_viewproduct__["a" /* ViewproductPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_rememberme_rememberme__["a" /* RemembermePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/autocomplete/autocomplete.module#AutocompletePageModule', name: 'AutocompletePage', segment: 'autocomplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newsletter/newsletter.module#NewsletterPageModule', name: 'NewsletterPage', segment: 'newsletter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rememberme/rememberme.module#RemembermePageModule', name: 'RemembermePage', segment: 'rememberme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewproduct/viewproduct.module#ViewproductPageModule', name: 'ViewproductPage', segment: 'viewproduct', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_newsletter_newsletter__["a" /* NewsletterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_viewproduct_viewproduct__["a" /* ViewproductPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_autocomplete_autocomplete__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_rememberme_rememberme__["a" /* RemembermePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_maps__["a" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_fourtwenty_fourtwenty__["a" /* FourtwentyProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fourtwenty_fourtwenty__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_product_product__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';

// import {CheckoutPage} from '../pages/checkout/checkout';
// import{AutocompletePage} from '../pages/autocomplete/autocomplete';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, provider, alertCtrl) {
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        // @ViewChild(Content) content: Content;
        // rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.base_url = "http://420api.rcmdash.co.za/";
        this.token = localStorage.getItem('token');
        console.log("local", this.token);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openHomePage = function () {
        console.log('hello');
        // this.nav.setRoot(HomePage)
    };
    MyApp.prototype.openProduct = function (product) {
        var _this = this;
        console.log(product._links.products.href);
        this.link = product._links.products.href;
        console.log("hello");
        this.provider.getproduct(this.link, this.token).subscribe(function (data) {
            console.log("inside provider", data._embedded.products);
            if (data._embedded.products.length != 0) {
                var instock = data._embedded.products.filter(function (item) {
                    return item.availability !== "NO";
                });
                // tricker an error
                if (instock.length != 0) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_product_product__["a" /* ProductPage */], {
                        product: instock
                    });
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Out Of Stock',
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'This category has no product',
                    buttons: ['Ok']
                });
                alert_2.present();
            }
        });
    };
    MyApp.prototype.openlogout = function () {
        console.log("hello logout");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.myCallback = function () {
        var _this = this;
        console.log("hello");
        this.token = localStorage.getItem('token');
        console.log("local", this.token);
        if (this.token != null) {
            console.log("hello", this.token);
            this.provider.getCategories(this.token).subscribe(function (data) {
                console.log(data._embedded.categories);
                _this.categories = data._embedded.categories;
                console.log("link home", _this.base_url);
            });
        }
        else {
            console.log("error");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/app/app.html"*/'<ion-menu (ionOpen)="myCallback()"  [content]="mycontent" type="overlay">\n\n    \n    \n  \n  <ion-header >\n    <ion-toolbar color="fourtwenty">\n      <ion-title text-center>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="card-background-page">\n\n\n\n\n    <ion-list>\n\n\n\n\n\n      <ion-item (click)="openHomePage()" menuClose >\n        <ion-icon ios="ios-home-outline" md="md-home" item-left large></ion-icon>\n        <h2>Home</h2>  \n      </ion-item>\n\n\n      <ion-item (click)="openlogout()" menuClose >\n        <ion-icon ios="ios-lock" md="md-lock" item-left large></ion-icon>\n        <h2>Logout</h2>    \n      </ion-item>\n\n\n      <ion-list style="margin-bottom:0;">\n        <ion-item-divider text-center color="fourtwenty">Categories</ion-item-divider>\n      </ion-list>\n\n\n      <ion-item *ngFor="let data of categories" (click)="openProduct(data)" menuClose >\n        <ion-icon ios="ios-cart" md="md-cart" item-left large></ion-icon>\n        <h2 color="fourtwenty">{{data.category_name}}</h2>    \n      </ion-item>\n\n    </ion-list>\n\n\n  </ion-content>\n\n</ion-menu>\n \n\n<ion-nav [root]="rootPage" #mycontent swipeBackEnabled="false"></ion-nav>\n\n\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_fourtwenty_fourtwenty__["a" /* FourtwentyProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FourtwentyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FourtwentyProvider = /** @class */ (function () {
    function FourtwentyProvider(http) {
        this.http = http;
        //local storage
        this.token = localStorage.getItem("token");
        console.log("token", this.token);
    }
    FourtwentyProvider_1 = FourtwentyProvider;
    //login api
    FourtwentyProvider.prototype.postsignin = function (login) {
        var res = this.http.post(FourtwentyProvider_1.base_url + "/api/auth/signin", login).map(function (res) { return res.json(); });
        return res;
    };
    //category api
    FourtwentyProvider.prototype.getCategories = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + token);
        var res = this.http.get(FourtwentyProvider_1.base_url + "/api/data/categories", { headers: headers }).map(function (res) { return res.json(); });
        this.respond = res;
        return res;
    };
    FourtwentyProvider.prototype.getnewsletter = function (token) {
        //headers 
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + token);
        var res = this.http.get(FourtwentyProvider_1.base_url + "/api/data/posts", { headers: headers }).map(function (res) { return res.json(); });
        return res;
    };
    //product api
    FourtwentyProvider.prototype.getproduct = function (url, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + token);
        console.log('token', token);
        var res = this.http.get(url, { headers: headers }).map(function (res) { return res.json(); });
        return res;
    };
    FourtwentyProvider.prototype.postorder = function (prodcut) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        var res = this.http.post(FourtwentyProvider_1.base_url + "/api/order/create", prodcut, { headers: headers });
        return res;
    };
    //declared variables
    FourtwentyProvider.base_url = "http://420api.rcmdash.co.za/";
    FourtwentyProvider = FourtwentyProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], FourtwentyProvider);
    return FourtwentyProvider;
    var FourtwentyProvider_1;
}());

//# sourceMappingURL=fourtwenty.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewproduct_viewproduct__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fourtwenty_fourtwenty__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, navParams, provider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.productitem = [];
        this.cart_count = 0;
        this.total = 0;
        this.items = [];
        this.disabled = false;
        this.base_url = "http://420api.rcmdash.co.za/";
        this.product = navParams.get('product');
        console.log(this.product);
        console.log(this.base_url);
    }
    ///add item to cart
    ProductPage.prototype.addtocart = function (product) {
        console.log(product);
        var item = product.price;
        console.log("total", this.total);
        console.log(this.total);
        if (this.items.indexOf(product) === -1) {
            this.total = this.total + item;
            console.log("t", this.total);
            this.items.push(product);
            console.log(this.items);
            var toast = this.toastCtrl.create({
                message: 'Item ' + product.title + ' added to cart',
                duration: 2000
            });
            toast.present();
            // total items
            //count number of items added to cart
            console.log("hello one", this.items.length);
            this.cart_count = this.items.length;
        }
        else {
            console.log("error");
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Already Added to Cart',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    ProductPage.prototype.openCart = function () {
        console.log(this.items);
        if (this.items.length == 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Your cart is empty, please add some items before you processed',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            // update all quantity in an object array to 1
            for (var i = 0; i < this.items.length; i++) {
                console.log(this.items[i]);
                this.items[i].quantity = 1;
                this.items[i].number_of_items = this.items[i].price;
                console.log("hello", this.items);
                console.log("modified", this.items[i]);
                console.log(this.items);
            }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */], {
                productitems: this.items,
                total: this.total,
            });
            //clear added items after pushing to cart
            this.cart_count = 0;
            this.items = [];
            this.total = 0;
        }
    };
    ProductPage.prototype.viewproduct = function (product) {
        // this.productitem.push(product)
        console.log("hello", this.items);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__viewproduct_viewproduct__["a" /* ViewproductPage */], {
            viewproduct: product,
            product: this.product
        });
    };
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/pages/product/product.html"*/'<ion-header #head>\n    <ion-navbar color="fourtwenty">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Home</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="openCart()">\n          <ion-icon name="cart"></ion-icon>\n        </button>\n        <ion-badge color="fourtwentylight">{{cart_count}}</ion-badge>\n      </ion-buttons>\n  \n    </ion-navbar>\n    <ion-toolbar color="fourtwenty">\n      <ion-searchbar [showCancelButton]="shouldShowCancel" debounce="100" placeholder="Search a product" animated="true" [(ngModel)]="searchQuery"\n        (search)="onSearch($event)" (ionCancel)="onCancel($event)">\n      </ion-searchbar>\n    </ion-toolbar>\n      <ion-card >\n        <ion-slides >\n          <ion-slide >   \n            <img src="assets/imgs/420-logo.jpg">\n          </ion-slide>    \n        </ion-slides>\n      </ion-card>\n    \n  </ion-header>\n\n<ion-content no-padding  overflow-scroll="true">\n\n\n      <ion-list style="margin-bottom:0;">\n          <ion-item-divider text-center color="fourtwenty">Product</ion-item-divider>\n        </ion-list>\n\n\n        <ion-list *ngFor="let product of product">\n            <ion-item>\n              <ion-thumbnail item-start>\n                  <img [src]="base_url+product.imageUrl" />\n              </ion-thumbnail>\n\n              <!-- <h2>My Neighbor Totoro</h2> -->\n              <h2><span [innerHTML]="product.title"></span></h2>\n              <p><span [innerHTML]="">R{{product.price}}</span></p>\n\n              <button ion-button icon clear item-right>\n\n                  <ion-icon  (click)="viewproduct(product)">\n                    <p style="color: #007957;\n      font-family: sans-serif;">View</p>\n                  </ion-icon>\n  \n                </button> \n  \n                <button  [disabled]="disabled"  ion-button icon clear item-right >\n                    <ion-icon   (click)="addtocart(product)"><p style="color: #007957;\n      font-family: sans-serif;">Add</p></ion-icon>\n                  </button> \n\n                  <!-- <button ion-button [disabled]="disabled" (click)="disabled=true">\n                    Click me to disable\n                    </button> -->\n\n            </ion-item>\n          </ion-list>\n\n\n</ion-content>\n\n<style> \n.slide-zoom {\n  height: 200px !important;\n}\n\n</style>\n\n\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_fourtwenty_fourtwenty__["a" /* FourtwentyProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newsletter_newsletter__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fourtwenty_fourtwenty__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, provider, alertCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.base_url = "http://420api.rcmdash.co.za/";
        //localstorage 
        this.token = localStorage.getItem('token');
        console.log("local", this.token);
        //passed token from login 
        this.token = navParams.get('token');
        console.log(this.token);
        this.provider.getCategories(this.token).subscribe(function (data) {
            console.log(data._embedded.categories);
            _this.categories = data._embedded.categories;
            console.log("link home", _this.base_url);
        });
        this.provider.getnewsletter(this.token).subscribe(function (data) {
            console.log(data);
            _this.newsltter = data._embedded.posts;
        });
        //this function allows for categories to slide
        setInterval(function () {
            if (_this.productSlides.getActiveIndex() == _this.productSlides.length() - 1)
                _this.productSlides.slideTo(0, 2000);
            _this.productSlides.slideNext(1000);
        }, 3000);
    }
    //product function 
    HomePage.prototype.openProductPage = function (product) {
        var _this = this;
        console.log("token", this.token);
        console.log(product._links.products.href);
        this.link = product._links.products.href;
        console.log("hello", this.link);
        this.provider.getproduct(this.link, this.token).subscribe(function (data) {
            console.log("inside provider", data._embedded.products);
            if (data._embedded.products.length != 0) {
                //select only product that are available in stock      
                var instock = data._embedded.products.filter(function (item) {
                    return item.availability !== "NO";
                });
                console.log("gee", instock);
                // tricker an error
                if (instock.length != 0) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_product__["a" /* ProductPage */], {
                        product: instock
                    });
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Out Of Stock',
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'This category has no product',
                    buttons: ['Ok']
                });
                alert_2.present();
            }
        });
    };
    //display news feeds
    HomePage.prototype.openNewsletterPage = function (product) {
        console.log(product);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__newsletter_newsletter__["a" /* NewsletterPage */], {
            product: product
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('productSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], HomePage.prototype, "productSlides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/420 final/src/pages/home/home.html"*/'<ion-header #head>\n  <ion-navbar color="fourtwenty">\n    <button  ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n    <ion-card >\n        <ion-slides >\n          <ion-slide >   \n            <img src="assets/imgs/420-logo.jpg">\n          </ion-slide>    \n        </ion-slides>\n      </ion-card>\n\n\n\n <ion-list style="margin-bottom:0;">\n    <ion-item-divider text-center color="fourtwenty">Categories</ion-item-divider>\n  </ion-list>\n\n   \n\n    <ion-row >\n      <ion-slides slidesPerView=2 #productSlides>\n        <ng-container *ngFor="let product of categories; let i = index">\n          <ion-slide>\n            <ion-row>\n              <ion-col>\n                <ion-card no-padding (click)="openProductPage(product)">\n                  <ion-chip item-right style="position: absolute; top: 5px; right:5px; font-size: 10px" *ngIf="product.on_sale && product.sale_price">\n                    <ion-label color="danger" style="margin-right: 5px;">hfhf</ion-label>\n                    <ion-icon name="pricetag" color="danger"></ion-icon>\n                  </ion-chip>\n                  <img  [src]="base_url+product.imageUrl" />\n                  <p style="text-align: center; margin: 5px; font-weight:bold;color:#007956"> {{ product.category_name }} </p>     \n                  <ion-row>\n                    <ion-col col-auto>        \n                    </ion-col>   \n                  </ion-row>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-slide>\n        </ng-container>\n      </ion-slides>\n    </ion-row>\n\n \n <ion-list style="margin-bottom:0;">\n    <ion-item-divider text-center color="fourtwenty">420 News</ion-item-divider>\n  </ion-list>\n\n  <ion-grid >\n    <ion-row>\n      <ion-col col-6 *ngFor="let product of newsltter" text-wrap>\n        <ion-card no-padding (click)="openNewsletterPage(product)">\n          <ion-chip item-right style="position: absolute; top: 5px; right:5px; font-size: 10px" >\n          </ion-chip>\n          <img [src]="base_url+product.imageUrl" />\n          <p style="text-align: center; margin: 5px; font-weight:bold;color:#007956">{{product.title}}</p>\n          <ion-row>\n            <ion-col >\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/420 final/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_fourtwenty_fourtwenty__["a" /* FourtwentyProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map