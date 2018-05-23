webpackJsonp([13],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPackagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllPackagesPage = (function () {
    function AllPackagesPage(navCtrl, navParams, http, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.responseData = [];
        this.skips = 0;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            console.log("va" + val);
            console.log(_this.ID);
            _this.http.get('http://localhost:5000/allpackages', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } })
                .map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    _this.responseData.push(item);
                });
                console.log(response.content);
            });
        }, function (err) {
            console.log('error');
        });
    }
    AllPackagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllPackagesPage');
    };
    AllPackagesPage.prototype.openPackageDetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__["a" /* PackagedetailPage */], this.responseData[i]);
    };
    AllPackagesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.infiniteScroll = infiniteScroll;
        this.skips = 10;
        var length = this.responseData.length;
        setTimeout(function () {
            _this.http.get('http://localhost:5000/allpackages', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    _this.responseData.push(item);
                });
                if (response.content == '') {
                    console.log("End reached");
                }
            }, function (err) {
                console.log('error');
            });
            // for (let i = 0; i < 30; i++) {
            //   this.items.push( this.items.length );
            // }
            if (length == _this.responseData.length) {
                _this.presentErrorAlert("There are no more packages left to show");
                infiniteScroll.enable(false);
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 300);
    };
    AllPackagesPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AllPackagesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.responseData = [];
        this.skips = 0;
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                console.log("va" + val);
                console.log(_this.ID);
                _this.http.get('http://localhost:5000/allpackages', { params: { 'TransporterID': _this.ID, 'skips': _this.skips } })
                    .map(function (res) { return res.json(); }).subscribe(function (response) {
                    response.content.map(function (item) {
                        _this.responseData.push(item);
                    });
                    console.log(response.content);
                });
            }, function (err) {
                console.log('error');
            });
            refresher.complete();
            if (_this.infiniteScroll != null) {
                _this.infiniteScroll.enable(true);
            }
        }, 2000);
    };
    return AllPackagesPage;
}());
AllPackagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-all-packages',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\all-packages\all-packages.html"*/'<!--\n  Generated template for the AllPackagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  \n-->\n\n<ion-header>\n  <ion-navbar class="colornavbar">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drive and Deliver</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="background1">\n  <!-- <ion-card *ngFor="let item of responseData, let i= index">\n    <ion-fab right>\n      <button class="buttoncolor" ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n      <img src="assets/imgs/advance-card-map-madison.png">\n\n  \n\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n      <h2>To:</h2>\n      <p>{{item.PickAddress}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n      <h2>From:</h2>\n      <p>{{item.DestAddress}}</p>\n    </ion-item>\n\n    <ion-row>\n      <ion-col col-4>\n        <ion-item>\n          <h2></h2>\n          <p>RS:2500</p>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <label>Package Size:</label>\n          <h2 ion-text>{{item.PackageSize}}</h2>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-icon class="ioniconcolor1" name="md-car"></ion-icon>\n          <p>{{item.TransportType}}</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n    <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n      Accept\n    </button>\n\n\n  </ion-card> -->\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n      \n      <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n</ion-refresher>\n  <ion-card *ngFor="let item of responseData, let i= index">\n      <ion-fab right>\n        <button class="buttoncolor" ion-fab>\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-fab>\n      <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n      <ion-item >\n        <h2 >Fare</h2>\n        <ion-note item-end class="ioniconcolor1" style="font-size: 17px">{{item.Fare}}/-</ion-note>\n      </ion-item>\n      <ion-item >\n        <h2 >Transport Type:</h2>\n        <ion-note item-end class="ioniconcolor1"> {{item.VehicleType}} </ion-note>\n      </ion-item>\n      <ion-item >\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n        <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n        </h2>\n      </ion-item >\n  \n      <ion-item >\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n        <h2 class="ioniconcolor1">From: {{item.PickAddress}}\n        </h2>\n      </ion-item>\n  \n      <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n        View Details\n      </button>\n    </ion-card>\n  \n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\all-packages\all-packages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AllPackagesPage);

//# sourceMappingURL=all-packages.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnqueuedetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enqueue_enqueue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EnqueuedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnqueuedetailsPage = (function () {
    function EnqueuedetailsPage(navCtrl, navParams, geolocation, zone, loadingCtrl, platform, http, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.cancelledPackage = false;
        this.item = this.navParams.data;
        console.log(this.item.Status);
        if (this.item.Status == "Awaiting") {
            this.inProgress = false;
            this.cancellationOption = true;
        }
        else {
            this.inProgress = true;
            this.cancellationOption = false;
        }
        this.Source = new google.maps.LatLng(this.item.SourceLatitude, this.item.SourceLongitude);
        console.log(this.Source);
        this.Destination = new google.maps.LatLng(this.item.DestinationLatitude, this.item.DestinationLongitude);
        console.log(this.Destination);
        this.presentLoadingDefault();
        this.observer = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].interval(3000).subscribe(function () {
            _this.geolocation.getCurrentPosition().then(function (position) {
                console.log("ALoha" + position.coords.latitude, position.coords.longitude);
                _this.myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                if (_this.marker1 != null) {
                    _this.marker1.setMap(null);
                }
                _this.marker1 = new google.maps.Marker({
                    map: _this.map,
                    position: _this.myPosition,
                    draggable: false,
                });
            }),
                function (error) {
                    console.log(error);
                };
        });
        console.log("This is id" + this.ID);
    }
    EnqueuedetailsPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            //this.platform.ready().then(() => this.initializeMap());
            _this.platform.ready().then(function () { return _this.findPath(); });
            loading.dismiss();
        }, 2000);
    };
    EnqueuedetailsPage.prototype.findPath = function () {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('mapdetail'), {
            zoom: 9,
            center: { lat: 31.4826352, lng: 74.0712721 }
        });
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay.setMap(this.map);
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("ALoha" + position.coords.latitude, position.coords.longitude);
            _this.myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            if (_this.inProgress) {
                directionsService.route({
                    origin: _this.myPosition,
                    destination: _this.Destination,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                    }
                    else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
            }
            else {
                directionsService.route({
                    origin: _this.myPosition,
                    destination: _this.Source,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                    }
                    else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
            }
        }),
            function (error) {
                console.log(error);
            };
    };
    EnqueuedetailsPage.prototype.confirmPickUp = function (PackageID) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm PickUp',
            message: 'You have picked up the package?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //do nothing
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        console.log('Buy clicked');
                        alert.present();
                        var loading = _this.loadingCtrl.create({
                            content: 'Waiting for server response...',
                        });
                        loading.present();
                        _this.storage.get('ID').then(function (val) {
                            _this.ID = val;
                            var Userdata = {
                                'PackageID': PackageID,
                                'TransporterID': _this.ID,
                            };
                            _this.http.put('http://localhost:5000/confirmPickUp', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (response) {
                                if (response['status'] == 'success') {
                                    loading.dismiss();
                                    _this.presentNotification("Pick Up confirmed", "picked up");
                                    _this.inProgress = true;
                                    _this.cancellationOption = false;
                                    _this.findPath();
                                }
                                else {
                                    loading.dismiss();
                                    _this.presentNotification("testing", "Failed");
                                }
                            }, function (err) {
                                console.log('error');
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EnqueuedetailsPage.prototype.sendDelivertConfirmation = function (PackageID) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Waiting for token validation...',
        });
        loading.present();
        if (/^\d{10}$/.test(this.token)) {
            setTimeout(function () {
                _this.storage.get('ID').then(function (val) {
                    _this.ID = val;
                    var Userdata = {
                        'ID': _this.ID,
                        'token': _this.token,
                    };
                    _this.http.get('http://localhost:5000/deliveryCompleted', { params: { 'PackageID': PackageID, 'token': _this.token } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                        if (response.content == 'success') {
                            loading.dismiss();
                            _this.cancelledPackage = true;
                            _this.cancellationOption = false;
                            _this.presentNotification("The Package delivery is completed", "Success");
                            setTimeout(function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__enqueue_enqueue__["a" /* EnqueuePage */]);
                            }, 400);
                        }
                        else {
                            loading.dismiss();
                            _this.presentNotification("Token Mismatch", "Failed");
                        }
                    }, function (err) {
                        console.log('error');
                    });
                });
            }, 300);
        }
        else {
            loading.dismiss();
            this.presentNotification("Token consists of only 10 digit", "Re Check Token");
        }
    };
    EnqueuedetailsPage.prototype.cancelPackage = function (PackageID) {
        var loading = this.loadingCtrl.create({
            content: 'Waiting for token validation...',
        });
        //loading.present();
        this.cancelledPackage = true;
        this.cancellationOption = false;
        // setTimeout(() => {
        //   this.storage.get('ID').then((val) => {
        //     this.ID = val;
        //     let Userdata = {
        //       'PackageID': PackageID,
        //       'TransporterID': this.ID,
        //     };
        //     this.http.put('http://localhost:5000/cancelPackage', JSON.stringify(Userdata)).map(res => res.json()).subscribe(response => {
        //       if (response['status'] == 'success') {
        //         loading.dismiss();
        //         this.presentNotification("Package Cancelled", "Cancelled");
        //         setTimeout(() => {
        //           this.navCtrl.setRoot(EnqueuePage);
        //         }, 400);
        //       }
        //       else {
        //         loading.dismiss();
        //         this.presentNotification("testing", "Failed");
        //       }
        //     },
        //       err => {
        //         console.log('error');
        //       });
        //   });
        // }, 300);
    };
    EnqueuedetailsPage.prototype.ionViewWillLeave = function () {
        console.log("Looks like I'm about to leave :(");
        this.observer.unsubscribe();
    };
    EnqueuedetailsPage.prototype.presentNotification = function (text, header) {
        var alert = this.alertCtrl.create({
            title: header,
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    EnqueuedetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnqueuedetailsPage');
    };
    return EnqueuedetailsPage;
}());
EnqueuedetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-enqueuedetails',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\enqueuedetails\enqueuedetails.html"*/'<!--\n  Generated template for the EnqueuedetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Enqueue Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="background1">\n  <h2 *ngIf="cancelledPackage">Package Cancelled</h2>\n  <div *ngIf="inProgress">\n    <ion-card>\n      <ion-item>\n        <ion-icon class="iconsize" name="code" item-start></ion-icon>\n        <ion-label color="danger" stacked>Verification Code</ion-label>\n        <ion-input [(ngModel)]="token" placeholder="XXXXXXX"></ion-input>\n      </ion-item>\n    </ion-card>\n    <button ion-button full class="buttonitemblue" (click)="sendDelivertConfirmation(item.PackageID)">\n        Send Request\n      </button>\n    \n  </div>\n  <button ion-button full *ngIf="!inProgress" class="buttonitemblue" (click)="confirmPickUp(item.PackageID)">\n      Confirm Package Pickup\n    </button>\n  <ion-card id="mapdetail" #mapdetail></ion-card>\n  <ion-card><button class="buttonitemblue" ion-button full (click)=findPath()>Find Path</button></ion-card>\n  <ion-card>\n\n    <ion-item>\n      <h2>Package Name:</h2>\n      <ion-note class="ioniconcolor1" item-end>{{item.PackageName}} </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note class="ioniconcolor1">{{item.PackageDesc}}</ion-note>\n    </ion-item>\n    <ion-item>\n      <h2>Fare</h2>\n      <ion-note class="ioniconcolor1" item-end>{{item.Fare}}/-</ion-note>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n      <ion-note class="ioniconcolor1">To: {{item.DestAddress}}\n      </ion-note>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n      <ion-note class="ioniconcolor1">From: {{item.PickAddress}}\n      </ion-note>\n    </ion-item>\n  </ion-card>\n  <!--ADD NG IF TO CHECK STATUS UNTILL THE PACKAGE IS PICKED UP else show cancelation button-->\n  <ion-card>\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n  </ion-card>\n  <div *ngIf="cancellationOption">\n    <button ion-button full class="buttonitem" (click)="cancelPackage(item.PackageID)">\n      Cancel Package\n    </button>\n  </div>\n  \n\n\n\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\enqueuedetails\enqueuedetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], EnqueuedetailsPage);

// findPath() {
//   this.map = new google.maps.Map(document.getElementById('mapdetail'), {
//     zoom: 7,
//     center: { lat: 31.4826352, lng: 74.0712721 }
//   });
//   this.observer = Observable.interval(5000).subscribe(() => {//update timer to 20 seconds
//     this.geolocation.getCurrentPosition().then(
//       (position) => {
//         console.log(position.coords.latitude, position.coords.longitude);
//         let myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         console.log(JSON.parse(JSON.stringify(myPosition)));
//         let directionsService = new google.maps.DirectionsService;
//         let directionsDisplay = new google.maps.DirectionsRenderer;
//         if (this.marker1 != null && this.marker2 != null) {
//           this.marker1.setMap(null)
//           this.marker2.setMap(null)
//           console.log("hello");
//         }
//         directionsDisplay.setMap(this.map);
//         directionsService.route({
//           origin: myPosition,
//           destination: this.Destination,
//           travelMode: 'DRIVING'
//         }, function (response, status) {
//           if (status === 'OK') {
//             directionsDisplay.setDirections(response);
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
//       }),
//       (error) => {
//         console.log(error);
//       }
//   });
// } 
//# sourceMappingURL=enqueuedetails.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnroutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__packagedetail_packagedetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the EnroutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnroutePage = (function () {
    function EnroutePage(loadingCtrl, toastCtrl, app, navCtrl, zone, platform, alertCtrl, storage, actionSheetCtrl, geolocation, http) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.geolocation = geolocation;
        this.http = http;
        this.addressElement = null;
        this.addressElement1 = null;
        this.Source = null;
        this.Destination = null;
        this.responseDataEnroute = [];
        this.listSearch = '';
        this.search = false;
        this.switch = "map";
        this.regionals = [];
    }
    EnroutePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EnroutePage');
        this.platform.ready().then(function () { return _this.loadMaps(); });
        this.checkIfLocationChange();
    };
    EnroutePage.prototype.openPackageDetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__packagedetail_packagedetail__["a" /* PackagedetailPage */], this.responseDataEnroute[i]);
    };
    EnroutePage.prototype.ionViewDidLeave = function () {
        this.observer.unsubscribe();
    };
    EnroutePage.prototype.checkIfLocationChange = function () {
        var _this = this;
        var input = document.getElementById('s1');
        this.observer = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].interval(2000).subscribe(function () {
            if (_this.marker1 != null) {
                if (_this.Source != _this.marker1.getPosition()) {
                    _this.Source = _this.marker1.getPosition();
                    console.log(_this.Source);
                    console.log("RXJS1" + _this.marker1.getPosition());
                    var geocoder = new google.maps.Geocoder;
                    geocoder.geocode({ 'location': _this.Source }, function (results, status) {
                        if (status === 'OK') {
                            if (results[0]) {
                                //map.setZoom(11);
                                // let input = document.getElementById('s1');
                                input.innerText = results[0].formatted_address;
                                //infowindow.setContent(results[0].formatted_address);
                                //infowindow.open(map, marker123);
                            }
                        }
                    });
                }
            }
            if (_this.marker2 != null) {
                if (_this.Destination != _this.marker2.getPosition()) {
                    _this.Destination = _this.marker2.getPosition();
                    console.log(_this.Destination);
                    console.log("RXJS1" + _this.marker2.getPosition());
                    var geocoder = new google.maps.Geocoder;
                    geocoder.geocode({ 'location': _this.Destination }, function (results, status) {
                        if (status === 'OK') {
                            if (results[0]) {
                                //map.setZoom(11);
                                // let input = document.getElementById('s1');
                                input.innerText = results[0].formatted_address;
                                //infowindow.setContent(results[0].formatted_address);
                                //infowindow.open(map, marker123);
                            }
                        }
                    });
                }
            }
        });
    };
    EnroutePage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
            this.initAutocomplete();
        }
        else {
            this.errorAlert('Error', 'Something went wrong with the Internet Connection. Please check your Internet.');
        }
    };
    EnroutePage.prototype.errorAlert = function (title, message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.loadMaps();
                    }
                }
            ]
        });
        alert.present();
    };
    EnroutePage.prototype.initializeMap = function () {
        var _this = this;
        this.zone.run(function () {
            var mapEle = _this.mapElement.nativeElement;
            _this.map = new google.maps.Map(mapEle, {
                zoom: 12,
                center: { lat: 31.4826352, lng: 74.0712721 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                // styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: true,
                scaleControl: true,
            });
            _this.getCurrentPosition();
        });
    };
    EnroutePage.prototype.getCurrentPosition = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Searching Location ...'
        });
        //this.loading.present();
        var locationOptions = { timeout: 10000 };
        this.geolocation.getCurrentPosition(locationOptions).then(function (position) {
            console.log(position.coords.latitude, position.coords.longitude);
            _this.Source = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var options = {
                center: _this.Source,
                zoom: 12
            };
            _this.map.setOptions(options);
            _this.marker1 = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.Source,
                draggable: true
            });
            //   this.addMarker(myPos, "I am Here!");
            //this.loading.dismiss();
            console.log("this is the lat" + _this.marker1.getPosition().lat());
            console.log("this is the lng" + _this.marker1.getPosition().lng());
        }),
            function (error) {
                //     this.loading.dismiss().then(() => {
                //     this.showToast('Location not found. Please enable your GPS!');
                //     this.loading.dismiss();
                //     console.log(error);
                //   });
                console.log(error);
            };
    };
    EnroutePage.prototype.initAutocomplete = function () {
        var _this = this;
        this.addressElement1 = this.searchbar1.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement1).subscribe(function (location) {
            console.log('First Search', location);
            _this.Source = new google.maps.LatLng(location.lat(), location.lng());
            var options = {
                center: _this.Source,
                zoom: 13
            };
            _this.map.setOptions(options);
            _this.marker1.setMap(null);
            // this.addMarker(this.Origin, "Origin",this.marker1);
            _this.marker1 = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.Source,
                draggable: true
            });
            _this.addInfoWindow(_this.marker1, "Origin");
        });
        this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
        this.createAutocomplete(this.addressElement).subscribe(function (location) {
            console.log('Second Search', location);
            _this.Destination = new google.maps.LatLng(location.lat(), location.lng());
            var options = {
                center: _this.Destination,
                zoom: 13
            };
            _this.map.setOptions(options);
            // this.addMarker(this.Dest, "Destination",this.marker2  );
            _this.marker2 = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.Destination,
                draggable: true
            });
            _this.addInfoWindow(_this.marker2, "Destination");
        });
    };
    EnroutePage.prototype.findPath = function () {
        var _this = this;
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Reloading...',
        });
        this.map = new google.maps.Map(document.getElementById('mapEnroute'), {
            zoom: 9,
            center: { lat: 31.4826352, lng: 74.0712721 }
        });
        directionsDisplay.setMap(this.map);
        directionsService.route({
            origin: this.Source,
            destination: this.Destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        this.cityCircle1 = new google.maps.Circle({
            strokeColor: '#033860',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#2a4255',
            fillOpacity: 0.35,
            map: this.map,
            center: this.Destination,
            radius: 2000,
        });
        this.cityCircle2 = new google.maps.Circle({
            strokeColor: '#033860',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#2a4255',
            fillOpacity: 0.35,
            map: this.map,
            center: this.Source,
            radius: 2000,
        });
        //this.loading.present();
        this.radiusEarth = 2000;
        var Src = JSON.parse(JSON.stringify(this.Source));
        var Des = JSON.parse(JSON.stringify(this.Destination));
        var SourceLat = Src["lat"];
        var SourceLng = Src["lng"];
        var DestinationLat = Des["lat"];
        var DestinationLng = Des["lng"];
        this.responseDataEnroute = [];
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            _this.http.get('http://localhost:5000/enroutepackages', { params: { 'TransporterID': _this.ID, 'SourceLat': SourceLat, 'SourceLng': SourceLng, 'DestinationLat': DestinationLat, 'DestinationLng': DestinationLng, 'Radius': _this.radiusEarth } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                response.content.map(function (item) {
                    _this.responseDataEnroute.push(item);
                    var myPos = new google.maps.LatLng(Number(item['SourceLatitude']), Number(item['SourceLongitude']));
                    _this.addPackageMarker(myPos, _this.responseDataEnroute.indexOf(item), item['PackageName']);
                });
            });
        }, function (err) {
            console.log('error');
        });
        this.loading.dismiss();
    };
    EnroutePage.prototype.createAutocomplete = function (addressEl) {
        var autocomplete = new google.maps.places.Autocomplete(addressEl);
        autocomplete.bindTo('bounds', this.map);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (sub) {
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                console.log(place.formatted_address);
                //this.LocationText=autocomplete.gm_accessors_.place.fd.formattedPrediction;
                if (!place) {
                    sub.error({
                        message: 'Autocomplete returned place with no geometry'
                    });
                }
                else {
                    //console.log('Search', place.geometry.locat;
                    console.log('Search Lat', place.geometry.location.lat());
                    console.log('Search Lng', place.geometry.location.lng());
                    sub.next(place.geometry.location);
                    //sub.complete();
                }
            });
        });
    };
    // geocodeLatLng(latlng):any{
    //   let geocoder = new google.maps.Geocoder;
    //   geocoder.geocode({ 'location': latlng }, function (results, status) {
    //     if (status === 'OK') {
    //       if (results[0]) {
    //         //map.setZoom(11);
    //         return results[0].formatted_address;
    //         //infowindow.setContent(results[0].formatted_address);
    //         //infowindow.open(map, marker123);
    //       } else {
    //         window.alert('No results found');
    //         return "fails";
    //       }
    //     } else {
    //       window.alert('Geocoder failed due to: ' + status);
    //       return "fails";
    //     }
    //   });
    // }
    EnroutePage.prototype.addMarker = function (position, content, marker) {
        marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position,
            draggable: true
        });
        this.addInfoWindow(marker, content);
        return marker;
    };
    EnroutePage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    EnroutePage.prototype.viewPlace = function (id) {
        console.log('Clicked Marker', id);
    };
    EnroutePage.prototype.addPackageMarker = function (position, index, content) {
        var image = "assets/icon/package.png";
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position,
            title: "hello",
            icon: image,
        });
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        infoWindow.open(this.map, marker);
        this.addPackageMarkerEvent(marker, index);
        return marker;
    };
    EnroutePage.prototype.addPackageMarkerEvent = function (marker, index) {
        var _this = this;
        google.maps.event.addListener(marker, 'click', function () {
            _this.openPackageDetailsPage(index);
        });
    };
    EnroutePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    return EnroutePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('s1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* Input */])
], EnroutePage.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('mapEnroute'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], EnroutePage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], EnroutePage.prototype, "searchbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('searchbar1', { read: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
], EnroutePage.prototype, "searchbar1", void 0);
EnroutePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-enroute',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\enroute\enroute.html"*/'<!--\n  Generated template for the AllPackagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n  \n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drive and Deliver</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="background1">\n\n  <ion-card class="map">\n\n    <ion-searchbar  class="searchbars"  #searchbar1 placeholder="Enter Location:"></ion-searchbar>\n    <ion-item></ion-item>\n    <ion-searchbar class="searchbars" #searchbar placeholder="Enter Destination:"></ion-searchbar>\n    <ion-card id="mapEnroute" #mapEnroute></ion-card>\n    <button id="buttonSearch" ion-button (click)=findPath()>Find Path</button>\n    \n  </ion-card>\n\n  <ion-card id="divider"></ion-card>\n  <ion-item>\n    <ion-textarea id=\'s1\'></ion-textarea>\n  </ion-item>\n    \n\n\n\n\n  <ion-card *ngFor="let item of responseDataEnroute, let i= index">\n    <ion-fab right>\n      <button class="buttoncolor" ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n    <ion-item>\n      <h2>Fare</h2>\n      <ion-note item-end class="ioniconcolor1">{{item.Fare}}/-</ion-note>\n    </ion-item>\n    <ion-item>\n      <h2>Transport Type:</h2>\n      <ion-note item-end class="ioniconcolor1"> {{item.VehicleType}} </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n      <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n      </h2>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n      <h2 class="ioniconcolor1">From: {{item.PickAddress}}\n      </h2>\n    </ion-item>\n\n    <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n      View Details\n    </button>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\enroute\enroute.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], EnroutePage);

//# sourceMappingURL=enroute.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Firebase__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HelpPage = (function () {
    function HelpPage(navCtrl, navParams, platform, storage, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.storage = storage;
        this.geolocation = geolocation;
        this.markers = [];
        this.ref = __WEBPACK_IMPORTED_MODULE_3_Firebase__["database"]().ref('geolocations/');
        platform.ready().then(function () {
            _this.initMap();
        }); //add this
        this.ref.on('value', function (resp) {
            _this.deleteMarkers();
            snapshotToArray(resp).forEach(function (data) {
                // let image = 'assets/imgs/green-bike.png';
                var updatelocation = new google.maps.LatLng(data.latitude, data.longitude);
                _this.addMarker(updatelocation);
                //his.setMapOnAll(this.map);
                console.log("inside the top if");
                //  let image = 'assets/imgs/blue-bike.png';
                // updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
                // this.addMarker(updatelocation);
                // this.setMapOnAll(this.map);
                // console.log("inside the top else");
            });
        });
    }
    HelpPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                center: mylocation
            });
        });
        this.watch = this.geolocation.watchPosition();
        this.watch.subscribe(function (data) {
            _this.deleteMarkers();
            // you can set your id here
            _this.updateGeolocation("hello", data.coords.latitude, data.coords.longitude);
            var updatelocation = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
            // let image = 'assets/imgs/blue-bike.png';
            _this.addMarker(updatelocation);
            //this.setMapOnAll(this.map);
            console.log("workisdas");
        });
        //this.watch.unsubscribe();
    };
    HelpPage.prototype.addMarker = function (location) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
        });
        this.markers.push(marker);
    };
    HelpPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    HelpPage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    HelpPage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    HelpPage.prototype.updateGeolocation = function (uuid, lat, lng) {
        // if(localStorage.getItem('sdas')) {
        __WEBPACK_IMPORTED_MODULE_3_Firebase__["database"]().ref('geolocations/' + "MY ID").set({
            ID: "Ad",
            latitude: lat,
            longitude: lng
        });
        console.log("inside if" + localStorage.getItem('mykey'));
        // } else {
        //   let newData = this.ref.push();
        //   newData.set({
        //     ID: "Ad",
        //     latitude: lat,
        //     longitude: lng
        //   });
        //   console.log("inside else");
        //   localStorage.setItem('mykey', newData.key);
        // }
    };
    return HelpPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HelpPage.prototype, "mapElement", void 0);
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\help\help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div #map id="map"></div>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\help\help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], HelpPage);

var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        //console.log("value of item"+childSnapshot.toJSON());
        item.key = childSnapshot.key;
        //  console.log("value of item.key"+item.key);
        if (item.ID == "Ad") {
            console.log(item.longitude);
            returnArr.push(item);
            console.log("hello hey whtsupp");
        }
    });
    return returnArr;
};
//# sourceMappingURL=help.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__packagedetail_packagedetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NearbyPage = (function () {
    function NearbyPage(loadingCtrl, toastCtrl, app, nav, zone, platform, alertCtrl, storage, actionSheetCtrl, geolocation, navCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.nav = nav;
        this.zone = zone;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.http = http;
        this.listSearch = '';
        this.radius = 1000;
        this.search = false;
        this.switch = "map";
        this.responseDataNearby = [];
        this.regionals = [];
    }
    NearbyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NearbyPage');
        this.platform.ready().then(function () { return _this.loadMaps(); });
    };
    NearbyPage.prototype.openPackageDetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__packagedetail_packagedetail__["a" /* PackagedetailPage */], this.responseDataNearby[i]);
    };
    NearbyPage.prototype.viewPlace = function (id) {
        console.log('Clicked Marker', id);
    };
    NearbyPage.prototype.loadMaps = function () {
        if (!!google) {
            this.initializeMap();
        }
        /*
              console.log('The Source'+this.Source);
              console.log('The Destination'+this.Destination);
              let distance=google.maps.geometry.spherical.computeDistanceBetween(this.Source,this.Destination);
              console.log('distance',distance);
          */
    };
    NearbyPage.prototype.reload = function () {
        var _this = this;
        if (Number.isInteger(parseInt(this.rad))) {
            this.loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: 'Reloading...',
            });
            // this.loading.present();
            this.radius = (this.rad * 1000);
            if (this.markers != null) {
                this.markers.setMap(null);
                this.cityCircle.setMap(null);
            }
            this.getCurrentPositions();
            // this.loading.dismissAll();
            this.responseDataNearby = [];
            this.storage.get('ID').then(function (val) {
                _this.ID = val;
                _this.http.get('http://localhost:5000/nearbypackages', { params: { 'TransporterID': _this.ID, 'Lat': _this.currentLat, 'Long': _this.currentLong, 'Radius': _this.rad } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                    response.content.map(function (item) {
                        _this.responseDataNearby.push(item);
                        var myPos = new google.maps.LatLng(Number(item['SourceLatitude']), Number(item['SourceLongitude']));
                        _this.addPackageMarker(myPos, _this.responseDataNearby.indexOf(item), item['PackageName']);
                    });
                    // this.loading.dismiss();
                });
            }, function (err) {
                console.log('error');
            });
        }
        else {
            this.presentErrorAlert("Enter a number");
        }
    };
    NearbyPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Wrong input',
            subTitle: text,
            buttons: ['Dismiss'],
        });
        alert.present();
    };
    NearbyPage.prototype.initializeMap = function () {
        var _this = this;
        this.zone.run(function () {
            var mapEle = _this.mapElement.nativeElement;
            _this.map = new google.maps.Map(mapEle, {
                zoom: 12,
                center: { lat: 31.4826352, lng: 74.0712721 },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                // styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }],
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                zoomControl: true,
                scaleControl: true,
            });
            _this.getCurrentPositions();
        });
    };
    //Center zoom
    //http://stackoverflow.com/questions/19304574/center-set-zoom-of-map-to-cover-all-visible-markers
    // go show currrent location
    NearbyPage.prototype.getCurrentPositions = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log("hello" + position.coords.latitude, position.coords.longitude);
            _this.currentLat = position.coords.latitude;
            _this.currentLong = position.coords.longitude;
            var myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var options = {
                center: myPos,
                zoom: 12
            };
            _this.map.setOptions(options);
            _this.markers = _this.addMarker(myPos, "I am Here!");
            _this.cityCircle = new google.maps.Circle({
                strokeColor: '#033860',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#2a4255',
                fillOpacity: 0.35,
                map: _this.map,
                center: myPos,
                radius: _this.radius,
            });
        }, function (error) {
            console.log(error);
        });
    };
    NearbyPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    NearbyPage.prototype.addMarker = function (position, content) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position
        });
        this.addInfoWindow(marker, content);
        return marker;
    };
    NearbyPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    NearbyPage.prototype.addPackageMarker = function (position, index, content) {
        var image = "assets/icon/package.png";
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: position,
            title: "hello",
            icon: image,
        });
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        infoWindow.open(this.map, marker);
        this.addPackageMarkerEvent(marker, index);
        return marker;
    };
    NearbyPage.prototype.addPackageMarkerEvent = function (marker, index) {
        var _this = this;
        google.maps.event.addListener(marker, 'click', function () {
            _this.openPackageDetailsPage(index);
        });
    };
    return NearbyPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('mapNearby'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
], NearbyPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('distanceInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */])
], NearbyPage.prototype, "inputElement", void 0);
NearbyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-nearby',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\nearby\nearby.html"*/'<!--\n    Generated template for the AllPackagesPage page.\n\n    See http://ionicframework.com/docs/components/#navigation for more info on\n    Ionic pages and navigation.\n    \n  -->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Drive and Deliver</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="background1">\n  <ion-card id="mapNearby" #mapNearby></ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col col-9>\n        <ion-input id="distanceInput" [(ngModel)]="rad" placeholder="Distance in kms(1 default)" type="text"></ion-input>\n      </ion-col>\n      <ion-col col-3>\n        <button id="goButton" (click)="reload()" ion-button>GO!</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  \n  <ion-card id="divider"></ion-card>\n\n\n  <ion-card *ngFor="let item of responseDataNearby, let i= index">\n      <ion-fab right>\n        <button class="buttoncolor" ion-fab>\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-fab>\n      <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n      <ion-item >\n        <h2 >Fare</h2>\n        <ion-note item-end class="ioniconcolor1">{{item.Fare}}/-</ion-note>\n      </ion-item>\n      <ion-item >\n        <h2 >Transport Type:</h2>\n        <ion-note item-end class="ioniconcolor1"> {{item.VehicleType}} </ion-note>\n      </ion-item>\n      <ion-item >\n        <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n        <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n        </h2>\n      </ion-item >\n  \n      <ion-item >\n        <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n        <h2 class="ioniconcolor1">From: {{item.PickAddress}}\n        </h2>\n      </ion-item>\n  \n      <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n        View Details\n      </button>\n    </ion-card>  \n  </ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\nearby\nearby.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
], NearbyPage);

//# sourceMappingURL=nearby.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign_up_sign_up__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, http, storage, alertCtrl, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.data = this.formBuilder.group({
            Email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^.{6,15}$')])],
        });
        this.submitAttempted = false;
        this.Email = this.data.controls['Email'];
        this.Password = this.data.controls['Password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logForm = function () {
        var _this = this;
        this.submitAttempted = true;
        if (this.Email.hasError('required') || this.Email.hasError('email')) {
            console.log("Email error");
            return;
        }
        else if (this.Password.hasError('required') || this.Password.hasError('pattern')) {
            console.log("password error");
            return;
        }
        var Userdata = {
            'Email': this.Email.value,
            'Password': this.Password.value,
        };
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        setTimeout(100);
        // this.storage.set('Name',this.Email.value);
        // this.storage.set('Password',this.Password.value);
        console.log(Userdata);
        this.http.post('http://localhost:5000/login', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
            var responseData = data;
            if (responseData.Error != "none") {
                _this.presentErrorAlert(responseData.Error);
                _this.loading.dismissAll();
            }
            else {
                _this.storage.set('Name', responseData.content[0].Name);
                _this.storage.set('Email', responseData.content[0].Email);
                _this.storage.set('Password', responseData.content[0].Password);
                _this.storage.set('ID', responseData.content[0].ID);
                _this.storage.set('Rating', responseData.content[0].Rating);
                _this.storage.set('FCMToken', responseData.content[0].FCMToken);
                _this.storage.set('ProfileImage', responseData.content[0].ProfileImage);
                var Notifications = [];
                _this.storage.set('NotificationData', Notifications);
                _this.events.publish('user:loggedin', "yo");
                _this.loading.dismissAll();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            }
        }, function (err) {
            console.log('error');
        });
        return;
    };
    LoginPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    LoginPage.prototype.signuppage = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Drive And Deliver</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="forms">\n    <form [formGroup]="data" (ngSubmit)="logForm()">\n      <ion-item>\n        <ion-label color="primary" floating>Email</ion-label>\n        <ion-input type="email" formControlName="Email"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="Email.hasError(\'required\') && submitAttempted">\n        <p ion-text color="danger">*Please enter email</p>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" floating>Password</ion-label>\n        <ion-input type="password" formControlName="Password"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="(Password.hasError(\'pattern\') && Password.touched) ||(submitAttempted && Password.hasError(\'required\')) ">\n        <p ion-text color="danger"> *Password minimum length 6</p>\n      </ion-item>\n\n      <ion-row>\n          <button ion-button color="secondary" type="submit" block>Login</button>\n      </ion-row>\n    </form>\n    <button ion-button (click)="signuppage()" block>SignUp</button>\n  </div>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, formBuilder, alertCtrl, http, storage, fcm, events) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.fcm = fcm;
        this.events = events;
        this.lastImage1 = null;
        this.lastImage2 = null;
        this.lastImage3 = null;
        //formbuilder used for error checking and validation of data at client side
        this.data = this.formBuilder.group({
            lastImage1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastImage2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastImage3: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            transportType: ['transportyype', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!transportyype).)*$')]],
            Email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            CNIC: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$')])],
            Phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('03[0-9]{9}$')])],
            Address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            CarRegistrationNo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[A-Z]{3}(( ([0]{1}[7-9]{1}|[1]{1}[0-9]{1})[A,B]{0,1} | ))[0-9]{1,4}$')])],
            Password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^.{6,15}$')])],
            Date: ['date', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!date).)*$')])],
            Month: ['month', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!month).)*$')])],
            Year: ['year', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!year).)*$')])],
            Gender: ['gender', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^((?!gender).)*$')])],
        });
        //bind the variables to input elements in the form making error checking and data access easier
        this.Name = this.data.controls['Name'];
        this.transportType = this.data.controls['transportType'];
        this.Email = this.data.controls['Email'];
        this.CNIC = this.data.controls['CNIC'];
        this.Phone = this.data.controls['Phone'];
        this.Address = this.data.controls['Address'];
        this.CarRegistrationNo = this.data.controls['CarRegistrationNo'];
        this.Password = this.data.controls['Password'];
        this.submitAttempted = false;
        this.Date = this.data.controls['Date'];
        this.Month = this.data.controls['Month'];
        this.Year = this.data.controls['Year'];
        this.Gender = this.data.controls['Gender'];
    }
    SignUpPage.prototype.logForm = function () {
        var _this = this;
        this.submitAttempted = true; //set true for error checking after user has entered all information
        //error checking for all fields in the signup form
        if (this.Name.hasError('required')) {
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Email.hasError('required') || this.Email.hasError('email')) {
            //console.log("Email error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.CNIC.hasError('required') || this.CNIC.hasError('pattern')) {
            //console.log("CNIC error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Phone.hasError('required') || this.Phone.hasError('pattern')) {
            //console.log("Phone number error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.CarRegistrationNo.hasError('required') || this.CarRegistrationNo.hasError('pattern')) {
            //console.log("Car registration error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Date.hasError('pattern') || this.Month.hasError('pattern') || this.Year.hasError('pattern')) {
            //console.log(" Date Month Year error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Gender.hasError('pattern')) {
            //console.log("Gender error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.transportType.hasError('pattern')) {
            //console.log("transportType error");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        else if (this.Password.hasError('required') || this.Password.hasError('pattern')) {
            //console.log("Passworderror");
            this.presentErrorAlert("Some values have been entered Incorectly");
            return;
        }
        this.loading = this.loadingCtrl.create({
            content: 'Creating Profile...',
        });
        console.log(this.transportType);
        console.log("ALosda");
        if (this.lastImage1 == null || this.lastImage2 == null || this.lastImage3 == null) {
            if (this.lastImage1 == null) {
                this.presentErrorAlert("Profile image missing");
            }
            if (this.lastImage2 == null) {
                this.presentErrorAlert("Liscence Image Missing");
            }
            if (this.lastImage3 == null) {
                this.presentErrorAlert("Vehicle Registration Image Missing");
            }
        }
        this.fcm.getToken().then(function (token) {
            _this.Token = token;
            _this.loading.present(); //show loading that request has been sent and response is bieng awaited for
            _this.upload();
            var Userdata = {
                'ID': 0,
                'Name': _this.Name.value,
                'Email': _this.Email.value,
                'TransportType': _this.transportType.value,
                'CNIC': _this.CNIC.value,
                'Phone': _this.Phone.value,
                'Address': _this.Address.value,
                'CarRegistrationNo': _this.CarRegistrationNo.value,
                'Password': _this.Password.value,
                'Date': _this.Date.value,
                'Month': _this.Month.value,
                'Year': _this.Year.value,
                'Gender': _this.Gender.value,
                'Clearence Due': 0,
                'Rating': 0,
                'ActivePackages': 0,
                'CancelledPackages': 0.0,
                'FCMToken': _this.Token,
                'ProfileImage': _this.lastImage1,
            };
            _this.http.post('http://localhost:5000/signup', JSON.stringify(Userdata)).map(function (res) { return res.json(); }).subscribe(function (data) {
                var responseData = data;
                console.log(responseData.Error);
                if (responseData.Error != "none") {
                    _this.presentErrorAlert(responseData.Error);
                }
                else {
                    _this.storage.set('Name', _this.Name.value);
                    _this.storage.set('Email', _this.Email.value);
                    _this.storage.set('Password', _this.Password.value);
                    _this.storage.set('ID', _this.id);
                    _this.storage.set('Rating', 0);
                    _this.storage.set('FCMToken', _this.Token);
                    _this.storage.set('ProfileImage', _this.lastImage1);
                    var Notifications = [];
                    _this.storage.set('NotificationData', Notifications);
                    _this.events.publish('user:loggedin', "yo");
                    _this.loading.dismissAll();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]);
                }
            }, function (err) {
                console.log('error');
            });
            //ALL things are now set just need to send data to the back end check for valid!!!/
        });
    };
    SignUpPage.prototype.upload = function () {
        var fileTransfer = this.transfer.create();
        var options1 = {
            fileKey: 'file',
            fileName: this.lastImage1,
            headers: {}
        };
        fileTransfer.upload(this.pathForImage(this.lastImage1), 'http://localhost:5000/imageupload?type=' + 'Profile', options1, true)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log("ALosda1");
            console.log(err);
        });
        var options2 = {
            fileKey: 'file',
            fileName: this.lastImage2,
            headers: {}
        };
        fileTransfer.upload(this.pathForImage(this.lastImage2), 'http://localhost:5000/imageupload?type=' + 'Liscence', options2, true)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log("ALosda2");
            console.log(err);
        });
        var options3 = {
            fileKey: 'file',
            fileName: this.lastImage3,
            headers: {}
        };
        fileTransfer.upload(this.pathForImage(this.lastImage3), 'http://localhost:5000/imageupload?type=' + 'VehicleRegistration', options3, true)
            .then(function (data) {
            console.log(data);
        }, function (err) {
            console.log("ALosd3");
            console.log(err);
        });
    };
    SignUpPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page);
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    //________________________________________________________CODE FOR CAMERA PHOTOES____________________________________
    SignUpPage.prototype.presentActionSheet = function (id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, id);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, id);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SignUpPage.prototype.takePicture = function (sourceType, id) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), id);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), id);
            }
        }, function (err) {
            _this.presentErrorAlert('Error while selecting image.');
        });
    };
    SignUpPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    SignUpPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, id) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            switch (id) {
                case 1:
                    _this.lastImage1 = newFileName;
                    break;
                case 2:
                    _this.lastImage2 = newFileName;
                    break;
                case 3:
                    _this.lastImage3 = newFileName;
                    break;
            }
        }, function (error) {
            _this.presentErrorAlert('Error while storing file.');
        });
    };
    SignUpPage.prototype.presentErrorAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    // Always get the accurate path to your apps folder
    SignUpPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-up',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\sign-up\sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SignUp</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-item>\n  <ion-label floating>Pickup Address: </ion-label>\n  <ion-textarea></ion-textarea>\n</ion-item>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <ion-icon class="photo1" *ngIf="lastImage1==null" name="add-circle" large></ion-icon>\n      <img src="{{pathForImage(lastImage1)}}" class="avatar1" *ngIf="lastImage1!=null">\n    </ion-avatar>\n    <h2>Take a Selfie!</h2>\n    <button ion-button icon-left (click)="presentActionSheet(1)">\n      <ion-icon name="camera"></ion-icon>Select Image\n    </button>\n  </ion-item>\n\n  <!-- Image Liscence input -->\n  <ion-item>\n    <h2>Liscence</h2>\n    <ion-avatar item-start>\n      <ion-icon class="photo1" *ngIf="lastImage2==null" name="add-circle" large></ion-icon>\n      <img src="{{pathForImage(lastImage2)}}" class="avatar1" *ngIf="lastImage2 !=null">\n    </ion-avatar>\n    <button ion-button icon-left (click)="presentActionSheet(2)">\n      <ion-icon name="camera"></ion-icon>Select Image\n    </button>\n  </ion-item>\n\n  <!-- Image Car registration papers input -->\n  <ion-item>\n    <ion-avatar item-start>\n      <ion-icon class="photo1" *ngIf="lastImage3==null" name="add-circle" large></ion-icon>\n      <img src="{{pathForImage(lastImage3)}}" class="avatar1" *ngIf="lastImage3!=null">\n    </ion-avatar>\n    <h2>Vehicle Registration</h2>\n    <button ion-button icon-left (click)="presentActionSheet(3)">\n      <ion-icon name="camera"></ion-icon>Select Image\n    </button>\n  </ion-item>\n\n  <form [formGroup]="data" (ngSubmit)="logForm()">\n    <!-- Name input -->\n    <ion-item>\n      <ion-label color="primary" floating>Name</ion-label>\n      <ion-input type="text" formControlName="Name"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="Name.hasError(\'required\') && submitAttempted">\n      <p ion-text color="danger">*Please enter full name</p>\n    </ion-item>\n\n\n    <!-- Email input -->\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input type="email" formControlName="Email"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="Email.hasError(\'required\') && submitAttempted">\n      <p ion-text color="danger">*Please enter email</p>\n    </ion-item>\n    <ion-item *ngIf="Email.hasError(\'email\') && Email.touched">\n      <p ion-text color="danger">*Please enter proper email</p>\n    </ion-item>\n\n    <!-- CNIC input -->\n    <ion-item>\n      <ion-label color="primary" floating>CNIC</ion-label>\n      <ion-input formControlName="CNIC" type="text"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="(CNIC.hasError(\'required\')  && submitAttempted)">\n      <p ion-text color="danger">*Please enter CNIC</p>\n    </ion-item>\n    <ion-item *ngIf="  CNIC.hasError(\'pattern\') && CNIC.touched">\n      <p ion-text color="danger"> *Please enter CNIC with dashes included</p>\n    </ion-item>\n\n    <!-- Phone Number input -->\n    <ion-item>\n      <ion-label color="primary" floating>Phone Number</ion-label>\n      <ion-input formControlName="Phone" type="text"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="Phone.hasError(\'required\')  && submitAttempted">\n      <p ion-text color="danger">*Please enter phone number</p>\n    </ion-item>\n    <ion-item *ngIf="Phone.hasError(\'pattern\')  && Phone.touched">\n      <p ion-text color="danger"> *Please enter proper phone number(no +92)</p>\n    </ion-item>\n\n    <!-- Address input -->\n    <ion-item>\n      <ion-label color="primary" floating>Address</ion-label>\n      <ion-textarea formControlName="Address"></ion-textarea>\n    </ion-item>\n    <ion-item *ngIf="Address.hasError(\'required\')  && submitAttempted">\n      <p ion-text color="danger">*Please enter Address</p>\n    </ion-item>\n\n\n    <!-- Gender input -->\n    <ion-item>\n      <ion-label color="primary">Gender</ion-label>\n      <ion-select formControlName="Gender">\n        <ion-option value="gender" selected>Gender</ion-option>\n        <ion-option value="male">Male</ion-option>\n        <ion-option value="female">Female</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf="Gender.hasError(\'pattern\')  && submitAttempted">\n      <p ion-text color="danger">*Please select Gender</p>\n    </ion-item>\n    <ion-item>\n\n      <!-- Date of Birth input -->\n      <ion-label color="primary">D.O.B</ion-label>\n      <ion-select formControlName="Date">\n        <ion-option value="date" selected>Date</ion-option>\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n        <ion-option value="4">4</ion-option>\n        <ion-option value="5">5</ion-option>\n        <ion-option value="6">6</ion-option>\n        <ion-option value="7">7</ion-option>\n        <ion-option value="8">8</ion-option>\n        <ion-option value="9">9</ion-option>\n        <ion-option value="10">10</ion-option>\n        <ion-option value="11">11</ion-option>\n        <ion-option value="12">12</ion-option>\n        <ion-option value="13">13</ion-option>\n        <ion-option value="14">14</ion-option>\n        <ion-option value="15">15</ion-option>\n        <ion-option value="16">16</ion-option>\n        <ion-option value="17">17</ion-option>\n        <ion-option value="18">18</ion-option>\n        <ion-option value="19">19</ion-option>\n        <ion-option value="20">20</ion-option>\n        <ion-option value="21">21</ion-option>\n        <ion-option value="22">22</ion-option>\n        <ion-option value="23">23</ion-option>\n        <ion-option value="24">24</ion-option>\n        <ion-option value="25">25</ion-option>\n        <ion-option value="26">26</ion-option>\n        <ion-option value="27">27</ion-option>\n        <ion-option value="28">28</ion-option>\n        <ion-option value="29">29</ion-option>\n        <ion-option value="30">30</ion-option>\n        <ion-option value="31">31</ion-option>\n      </ion-select>\n      <ion-select formControlName="Month">\n        <ion-option value="month" selected>Month</ion-option>\n        <ion-option value="Janaury">Janaury</ion-option>\n        <ion-option value="February">February</ion-option>\n        <ion-option value="March">March</ion-option>\n        <ion-option value="April">April</ion-option>\n        <ion-option value="May">May</ion-option>\n        <ion-option value="June">June</ion-option>\n        <ion-option value="July">July</ion-option>\n        <ion-option value="August">August</ion-option>\n        <ion-option value="September">September</ion-option>\n        <ion-option value="October">October</ion-option>\n        <ion-option value="November">November</ion-option>\n        <ion-option value="December">December</ion-option>\n      </ion-select>\n      <ion-select formControlName="Year">\n        <ion-option value="year" selected>Year</ion-option>\n        <ion-option value="1947">1947</ion-option>\n        <ion-option value="1948">1948</ion-option>\n        <ion-option value="1949">1949</ion-option>\n        <ion-option value="1950">1950</ion-option>\n        <ion-option value="1951">1951</ion-option>\n        <ion-option value="1952">1952</ion-option>\n        <ion-option value="1953">1953</ion-option>\n        <ion-option value="1954">1954</ion-option>\n        <ion-option value="1955">1955</ion-option>\n        <ion-option value="1956">1956</ion-option>\n        <ion-option value="1957">1957</ion-option>\n        <ion-option value="1958">1958</ion-option>\n        <ion-option value="1959">1959</ion-option>\n        <ion-option value="1960">1960</ion-option>\n        <ion-option value="1961">1961</ion-option>\n        <ion-option value="1962">1962</ion-option>\n        <ion-option value="1963">1963</ion-option>\n        <ion-option value="1964">1964</ion-option>\n        <ion-option value="1965">1965</ion-option>\n        <ion-option value="1966">1966</ion-option>\n        <ion-option value="1967">1967</ion-option>\n        <ion-option value="1968">1968</ion-option>\n        <ion-option value="1969">1969</ion-option>\n        <ion-option value="1970">1970</ion-option>\n        <ion-option value="1971">1971</ion-option>\n        <ion-option value="1972">1972</ion-option>\n        <ion-option value="1973">1973</ion-option>\n        <ion-option value="1974">1974</ion-option>\n        <ion-option value="1975">1975</ion-option>\n        <ion-option value="1976">1976</ion-option>\n        <ion-option value="1977">1977</ion-option>\n        <ion-option value="1978">1978</ion-option>\n        <ion-option value="1979">1979</ion-option>\n        <ion-option value="1980">1980</ion-option>\n        <ion-option value="1981">1981</ion-option>\n        <ion-option value="1982">1982</ion-option>\n        <ion-option value="1983">1983</ion-option>\n        <ion-option value="1984">1984</ion-option>\n        <ion-option value="1985">1985</ion-option>\n        <ion-option value="1986">1986</ion-option>\n        <ion-option value="1987">1987</ion-option>\n        <ion-option value="1988">1988</ion-option>\n        <ion-option value="1989">1989</ion-option>\n        <ion-option value="1990">1990</ion-option>\n        <ion-option value="1991">1991</ion-option>\n        <ion-option value="1992">1992</ion-option>\n        <ion-option value="1993">1993</ion-option>\n        <ion-option value="1994">1994</ion-option>\n        <ion-option value="1995">1995</ion-option>\n        <ion-option value="1996">1996</ion-option>\n        <ion-option value="1997">1997</ion-option>\n        <ion-option value="1998">1998</ion-option>\n        <ion-option value="1999">1999</ion-option>\n        <ion-option value="2000">2000</ion-option>\n        <ion-option value="2001">2001</ion-option>\n        <ion-option value="2002">2002</ion-option>\n        <ion-option value="2003">2003</ion-option>\n        <ion-option value="2004">2004</ion-option>\n        <ion-option value="2005">2005</ion-option>\n        <ion-option value="2006">2006</ion-option>\n        <ion-option value="2007">2007</ion-option>\n        <ion-option value="2008">2008</ion-option>\n        <ion-option value="2009">2009</ion-option>\n        <ion-option value="2010">2010</ion-option>\n        <ion-option value="2011">2011</ion-option>\n        <ion-option value="2012">2012</ion-option>\n        <ion-option value="2013">2013</ion-option>\n        <ion-option value="2014">2014</ion-option>\n        <ion-option value="2015">2015</ion-option>\n        <ion-option value="2016">2016</ion-option>\n        <ion-option value="2017">2017</ion-option>\n        <ion-option value="2018">2018</ion-option>\n      </ion-select>\n      \n    </ion-item>\n    <ion-item *ngIf="(this.Date.hasError(\'pattern\') || this.Month.hasError(\'pattern\') || this.Year.hasError(\'pattern\'))  && submitAttempted">\n      <p ion-text color="danger">*Please Enter proper DOB</p>\n    </ion-item>\n    <ion-item>\n      <!-- Transport Type  input -->\n      <ion-label color="primary">Transport Type</ion-label>\n      <ion-select formControlName="transportType">\n        <ion-option value="transportyype" selected>Vehicle</ion-option>\n        <ion-option value="Bike">Bike</ion-option>\n        <ion-option value="Car">Car</ion-option>\n        <ion-option value="Pick Up">Pick Up</ion-option>\n        <ion-option value="Truck">Truck</ion-option>\n      </ion-select>\n      </ion-item>\n      <ion-item *ngIf="this.transportType.hasError(\'pattern\')  && submitAttempted">\n        <p ion-text color="danger">*Please select a vehicly type</p>\n      </ion-item>\n    \n\n    <!-- Vehicle Registration No input -->\n    <ion-item>\n      <ion-label color="primary" floating>Vehicle Registration No.</ion-label>\n      <ion-input type="text" formControlName="CarRegistrationNo"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="CarRegistrationNo.hasError(\'required\')  && submitAttempted">\n      <p ion-text color="danger">*Please enter Vehicle registration number</p>\n    </ion-item>\n    <ion-item *ngIf="CarRegistrationNo.hasError(\'pattern\')  && CarRegistrationNo.touched">\n      <p ion-text color="danger"> *Please enter proper Vehicle registration number</p>\n    </ion-item>\n    \n    <!-- Password input -->\n    <ion-item>\n      <ion-label color="primary" floating>Password</ion-label>\n      <ion-input type="password" formControlName="Password"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="(Password.hasError(\'pattern\') && Password.touched) ||(submitAttempted && Password.hasError(\'required\')) ">\n      <p ion-text color="danger"> *Password minimum length 6</p>\n    </ion-item>\n    <button ion-button type="submit" block>Create Profile</button>\n  </form>\n  <!-- <button ion-button (click)="imageupload()" block>Create Profile</button> -->\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\sign-up\sign-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], SignUpPage);

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, fcm, alertCtrl, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.NotificationData = [];
        //  this.onNotification();
        console.log(this.navParams.data);
        this.storage.get('NotificationData').then(function (val) {
            _this.NotificationData = val;
            _this.NotificationData.push(_this.navParams.data);
        });
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    // onNotification() {
    //   this.fcm.getToken().then(token=>{
    //     console.log(token);
    //     this.Token=token;
    //   });
    //   this.fcm.onNotification().subscribe(data => {
    //     if (data.wasTapped) {
    //       this.NotificationData.push(data);
    //       this.openPage(NotificationsPage);
    //     } else {
    //       this.NotificationData.push(data);
    //     };
    //   })
    // }
    NotificationsPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page);
    };
    NotificationsPage.prototype.showNotification = function (noti) {
        var alert = this.alertCtrl.create({
            title: 'Notification',
            subTitle: noti,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    NotificationsPage.prototype.sendNotify = function () {
        var _this = this;
        this.storage.get('FCMToken').then(function (val) {
            _this.Token = val;
            var data = {
                'TransporterID': _this.ID,
                'FCMToken': _this.Token,
            };
            _this.http.post('http://localhost:5000/notify', JSON.stringify(data)).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.showNotification(data);
                console.log(data);
            }, function (err) {
                console.log('error');
            });
        });
        // this.http.get('http://localhost:5000/notify').map(res => res.json()).subscribe(response => {
        //   },
        //     err => {
        //       console.log('error');
        //     });
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\notifications\notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--ADD FOR LOOP Over data here-->\n\n<ion-content class="background1">\n  <ion-card *ngFor="let item of NotificationData, let i= index">\n    <ion-card>\n      <ion-row>\n        <ion-col col-2>\n          <ion-icon class="icon" name="paper-plane"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <h3>This is a comment orem ipsum dolor sit amet</h3>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-card>\n\n\n  <ion-card>\n    <p class="token">{{Token}}</p>\n  </ion-card>\n  <button ion-button (click)="sendNotify()"></button>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PendingRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingRequestsPage = (function () {
    function PendingRequestsPage(navCtrl, navParams, http, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.responseDataPending = [];
        this.getPackages();
    }
    PendingRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingRequestsPage');
    };
    PendingRequestsPage.prototype.openPackageDetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__packagedetail_packagedetail__["a" /* PackagedetailPage */], this.responseDataPending[i]);
    };
    PendingRequestsPage.prototype.getPackages = function () {
        var _this = this;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            console.log(_this.ID);
            _this.http.get('http://localhost:5000/pendingpackages', { params: { 'TransporterID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                if (response.content == "failed") {
                    _this.responseDataPending = [];
                    _this.presentAlert("No Pending Packages Found");
                }
                else {
                    response.content.map(function (item) {
                        _this.responseDataPending.push(item);
                    });
                    console.log(response.content[0]);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    PendingRequestsPage.prototype.presentAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: text,
            buttons: ['Dismiss'],
        });
        alert.present();
    };
    return PendingRequestsPage;
}());
PendingRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pending-requests',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\pending-requests\pending-requests.html"*/'<!--\n  Generated template for the PendingRequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>PendingRequests</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background1">\n  <ion-card *ngFor="let item of responseDataPending, let i= index">\n    <ion-fab right>\n      <button class="buttoncolor" ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n    <ion-item >\n      <h2 >Name</h2>\n      <ion-note item-end class="ioniconcolor1" style="font-size: 17px">{{item.PackageName}}/-</ion-note>\n    </ion-item>\n    <ion-item >\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n      <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n      </h2>\n    </ion-item >\n\n    <ion-item >\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n      <h2 class="ioniconcolor1">From: {{item.PickAddress}}\n      </h2>\n    </ion-item>\n\n    <button ion-button full class="buttonitem" (click)="openPackageDetailsPage(i)">\n      View Details\n    </button>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\pending-requests\pending-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], PendingRequestsPage);

//# sourceMappingURL=pending-requests.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        /*get Transporter ID from localstorage and  request data and put it into variables to show in view________________*/
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            _this.http.get('http://localhost:5000/getransporterdata', { params: { 'TransporterID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response.content);
                _this.name = response.content[0].Name;
                console.log(_this.name);
                _this.contantInfo = response.content[0].Phone;
                console.log(_this.contantInfo);
                _this.rating = response.content[0].Rating;
                console.log(_this.rating);
                _this.clearenceDue = response.content[0].ClearenceDue;
                console.log(_this.clearenceDue);
                _this.cancelledPackages = response.content[0].CancelledPackages;
                _this.activePackages = response.content[0].ActivePackages;
                console.log(_this.cancelledPackages);
                _this.profileImage = response.content[0].ProfileImage;
            }, function (err) {
                console.log('error');
            });
        });
        /*_______________________________________________________________________________________________________________*/
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="background1">\n  <ion-card class="cards">\n    <ion-item>\n      <ion-avatar item-start>\n        <img class="imagePackage" src="http://localhost:5000/getProfilePhoto/{{profileImage}}" />\n      </ion-avatar>\n      <label class="headerlabel">Name</label>\n      <p>{{name}}</p>\n      <label class="headerlabel">Contact Info</label>\n      <p>{{contantInfo}}</p>\n      <label class="headerlabel">Rating</label>\n      <p>★ {{rating}}</p>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col col-6 class="card2">\n        <label class="headerlabel">Deliveries Done</label>\n        <ion-row class="badge">\n          <ion-badge class="badgevalues">0</ion-badge>\n          <!-- {{DeliveriesDone}} -->\n        </ion-row>\n      </ion-col>\n      <ion-col col-6 class="card2">\n        <label class="headerlabel">Clearence Due</label>\n        <ion-row class="badge">\n          <ion-badge class="badgevalues">{{clearenceDue}}</ion-badge>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 class="card2">\n        <label class="headerlabel">Active Pakages</label>\n        <ion-row class="badge">\n          <ion-badge class="badgevalues">{{activePackages}}</ion-badge>\n        </ion-row>\n      </ion-col>\n      <ion-col col-6 class="card2">\n        <label class="headerlabel">Cancelled Packages</label>\n        <ion-row class="badge">\n          <ion-badge class="badgevalues">{{cancelledPackages}}</ion-badge>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      Put Stars here\n    </ion-card-header>\n    <ion-card-content>\n      <p>This is a comment orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sem dolor. Proin lobortis dolor\n        quis est elementum, in feugiat quam maximus.</p>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-packages/all-packages.module": [
		460,
		12
	],
	"../pages/enqueue/enqueue.module": [
		462,
		11
	],
	"../pages/enqueuedetails/enqueuedetails.module": [
		461,
		10
	],
	"../pages/enroute/enroute.module": [
		463,
		9
	],
	"../pages/help/help.module": [
		464,
		8
	],
	"../pages/home/home.module": [
		465,
		7
	],
	"../pages/login/login.module": [
		466,
		6
	],
	"../pages/nearby/nearby.module": [
		467,
		5
	],
	"../pages/notifications/notifications.module": [
		468,
		4
	],
	"../pages/packagedetail/packagedetail.module": [
		469,
		3
	],
	"../pages/pending-requests/pending-requests.module": [
		470,
		2
	],
	"../pages/profile/profile.module": [
		472,
		1
	],
	"../pages/sign-up/sign-up.module": [
		471,
		0
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
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(315);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_enroute_enroute__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_nearby_nearby__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_enqueuedetails_enqueuedetails__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_packagedetail_packagedetail__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pending_requests_pending_requests__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_all_packages_all_packages__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_enqueue_enqueue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_notifications_notifications__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_help_help__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_fcm__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_enroute_enroute__["a" /* EnroutePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_nearby_nearby__["a" /* NearbyPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_enqueuedetails_enqueuedetails__["a" /* EnqueuedetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_all_packages_all_packages__["a" /* AllPackagesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_enqueue_enqueue__["a" /* EnqueuePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                tabsPlacement: 'top',
            }, {
                links: [
                    { loadChildren: '../pages/all-packages/all-packages.module#AllPackagesPageModule', name: 'AllPackagesPage', segment: 'all-packages', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enqueuedetails/enqueuedetails.module#EnqueuedetailsPageModule', name: 'EnqueuedetailsPage', segment: 'enqueuedetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enqueue/enqueue.module#EnqueuePageModule', name: 'EnqueuePage', segment: 'enqueue', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enroute/enroute.module#EnroutePageModule', name: 'EnroutePage', segment: 'enroute', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nearby/nearby.module#NearbyPageModule', name: 'NearbyPage', segment: 'nearby', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/packagedetail/packagedetail.module#PackagedetailPageModule', name: 'PackagedetailPage', segment: 'packagedetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pending-requests/pending-requests.module#PendingRequestsPageModule', name: 'PendingRequestsPage', segment: 'pending-requests', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_enroute_enroute__["a" /* EnroutePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_nearby_nearby__["a" /* NearbyPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_enqueuedetails_enqueuedetails__["a" /* EnqueuedetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_packagedetail_packagedetail__["a" /* PackagedetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_all_packages_all_packages__["a" /* AllPackagesPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_enqueue_enqueue__["a" /* EnqueuePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_fcm__["a" /* FCM */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_interval__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pending_requests_pending_requests__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_enqueue_enqueue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_help_help__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Firebase__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var config = {
    apiKey: "AIzaSyDK3eYlkVHJTY83OOYXVIZQRq5C549pBcc",
    authDomain: "transporterdnd.firebaseapp.com",
    databaseURL: "https://transporterdnd.firebaseio.com",
    projectId: "transporterdnd",
    storageBucket: "transporterdnd.appspot.com",
    messagingSenderId: "680127595430"
};
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events, storage, fcm, alertCtrl, http, geolocation) {
        var _this = this;
        this.events = events;
        this.storage = storage;
        this.fcm = fcm;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.geolocation = geolocation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */];
        this.NotificationData = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_16_Firebase__["initializeApp"](config);
        this.loggedIn = false;
        this.Name = "";
        this.pages = [
            { title: 'All Packages', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */] },
            { title: 'Pending Requests', component: __WEBPACK_IMPORTED_MODULE_8__pages_pending_requests_pending_requests__["a" /* PendingRequestsPage */] },
            { title: 'Enqueue Packages', component: __WEBPACK_IMPORTED_MODULE_10__pages_enqueue_enqueue__["a" /* EnqueuePage */] },
            { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */] },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_12__pages_help_help__["a" /* HelpPage */] },
        ];
        this.events.subscribe('user:loggedin', function (text) {
            _this.storage.get('Name').then(function (val) {
                _this.Name = val;
                _this.showNotification("thy name" + _this.Name);
            });
            _this.showNotification("thy name" + _this.Name);
            _this.storage.get('ProfileImage').then(function (val) {
                _this.profileImage = val;
            });
            //this.onNotification();
            _this.loggedIn = true;
            console.log(_this.loggedIn);
        });
        //   Observable.interval(5000).subscribe(() => {//update timer to 20 seconds
        //   this.geolocation.getCurrentPosition().then(
        //     (position) => {
        //       console.log(position.coords.latitude, position.coords.longitude);
        //       let myPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //       console.log(JSON.parse(JSON.stringify(myPosition)));
        //       this.storage.get('ID').then((val) => {
        //         let data = {
        //           'TransporterID':val,
        //           'Latitude':position.coords.latitude,
        //           'Longitude':position.coords.longitude,
        //         }
        //       this.http.post('http://localhost:5000/trackUser', JSON.stringify(data)).map(res => res.json()).subscribe(data => {
        //       },
        //         err => {
        //           console.log('error');
        //         });
        //       });
        //     }),
        //     (error) => {
        //       console.log(error);
        //     }
        // });
        //this.trackUser();
    }
    MyApp.prototype.ionViewDidLoad = function () {
    };
    // trackUser(): Observable<any> {
    //   return new
    // }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]);
    };
    MyApp.prototype.logout = function () {
        this.loggedIn = false;
        this.storage.set('Name', "");
        this.storage.set('Email', "");
        this.storage.set('Password', "");
        this.storage.set('ID', "");
        this.storage.set('Rating', "");
        this.storage.set('ProfileImage', "");
        this.storage.set('FCMToken', "");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.onNotification = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            console.log(token);
            _this.Token = token;
        });
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                _this.NotificationData.push(data);
                console.log(data);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */], _this.NotificationData);
            }
            else {
                _this.showNotification(data);
                console.log(data);
                _this.NotificationData.push(data);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */], _this.NotificationData);
            }
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                var data = {
                    'ID': _this.ID,
                    'appType': "Transporter",
                    'FCMToken': token,
                };
                _this.http.post('http://localhost:5000/updateToken', JSON.stringify(data)).map(function (res) { return res.json(); }).subscribe(function (data) {
                }, function (err) {
                    console.log('error');
                });
            });
        });
    };
    MyApp.prototype.showNotification = function (noti) {
        var alert = this.alertCtrl.create({
            title: 'Notification',
            subTitle: noti,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({template:/*ion-inline-start:"Y:\Angular\Transporter\src\app\app.html"*/'<ion-menu *ngIf="loggedIn"  swipeEnable="true" [content]="content">\n    <ion-header class="themeblue">\n        <ion-item class="themeblue" no-lines>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-avatar item-start>\n                        <img class="imagePackage" *ngIf="loggedIn" src="http://localhost:5000/getProfilePhoto/{{profileImage}}" />\n                    </ion-avatar>\n                </ion-col>\n                <ion-col align-self-center col-6>\n                    <h2 class="textcol">{{Name}}</h2>\n                    <button class="buttontheme" ion-button icon-left menuClose (click)="openProfile()">\n                        <ion-icon name="person"></ion-icon>Profile\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n\n    </ion-header>\n    <ion-content class="buttontheme">\n\n        <ion-row>\n            <ion-col col-2 align-self-center>\n                <ion-icon class="textcol iconsize" name="ios-home"></ion-icon>\n            </ion-col>\n            <ion-col col-10>\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[0])">\n                    All Packages\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-2 align-self-center>\n                <ion-icon class="textcol iconsize" name="bookmarks"></ion-icon>\n            </ion-col>\n            <ion-col col-10>\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[1])">\n                    Pending Requests\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-2 align-self-center>\n                <ion-icon class="textcol iconsize" name="calendar"></ion-icon>\n            </ion-col>\n            <ion-col col-10>\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[2])">\n                    Enqueue Packages\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-2 align-self-center>\n                <ion-icon class="textcol iconsize" name="chatbubbles"></ion-icon>\n            </ion-col>\n            <ion-col col-10>\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[3])">\n                    Notifications\n                </button>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-2 align-self-center>\n                <ion-icon class="textcol iconsize" name="help-circle"></ion-icon>\n            </ion-col>\n            <ion-col col-10>\n                <button no-lines class="buttontheme textcol" mode="md" menuClose ion-item (click)="openPage(pages[4])">\n                    Help\n                </button>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-footer class="themeblue">\n            <button ion-button full ion-button class="buttontheme" menuToggle (click)="logout()">\n                Log Out\n            </button>\n        </ion-footer>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"Y:\Angular\Transporter\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PackagedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PackagedetailPage = (function () {
    function PackagedetailPage(navCtrl, navParams, geolocation, zone, loadingCtrl, platform, http, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.item = this.navParams.data;
        console.log(this.item);
        this.Source = new google.maps.LatLng(this.item.SourceLatitude, this.item.SourceLongitude);
        console.log(this.Source);
        this.Destination = new google.maps.LatLng(this.item.DestinationLatitude, this.item.DestinationLongitude);
        console.log(this.Destination);
        this.presentLoadingDefault();
        this.notRequested = true;
        console.log(this.ID);
    }
    PackagedetailPage.prototype.presentLoadingDefault = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            //this.platform.ready().then(() => this.initializeMap());
            _this.platform.ready().then(function () { return _this.findPath(); });
            loading.dismiss();
        }, 2000);
    };
    PackagedetailPage.prototype.findPath = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('mapdetail'), {
            zoom: 9,
            center: { lat: 31.4826352, lng: 74.0712721 }
        });
        directionsDisplay.setMap(map);
        directionsService.route({
            origin: this.Source,
            destination: this.Destination,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    PackagedetailPage.prototype.sendRequest = function (PackageID, PackageName) {
        var _this = this;
        setTimeout(function () {
            _this.storage.get('ID').then(function (val) {
                _this.ID = val;
                _this.http.get('http://localhost:5000/requestDelivery', { params: { 'PackageID': PackageID, 'PackageName': PackageName, 'TransporterID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                    if (response.content == 'requested') {
                        _this.notRequested = false;
                        _this.presentNotification("Request has been sent, awaiting response from Package sender", "Success");
                    }
                    else if (response.content == 'failed') {
                        _this.presentNotification("Request denied the package has already been booked", "Failed");
                    }
                    else {
                        _this.presentNotification("Request already made", "Rerequest ");
                    }
                }, function (err) {
                    console.log('error');
                });
            });
        }, 300);
    };
    PackagedetailPage.prototype.presentNotification = function (text, header) {
        var alert = this.alertCtrl.create({
            title: header,
            subTitle: text,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return PackagedetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('mapdetail'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PackagedetailPage.prototype, "mapElement", void 0);
PackagedetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-packagedetail',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\packagedetail\packagedetail.html"*/'<!--\n  Generated template for the PackagedetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Package Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="background1">  \n      <ion-card id="mapdetail" #mapdetail></ion-card>\n  <ion-card>\n    <ion-item>\n      <h2>Package Name:</h2>\n      <ion-note class="ioniconcolor1" item-end>{{item.PackageName}} </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-note class="ioniconcolor1">{{item.PackageDesc}}</ion-note>\n    </ion-item>\n    <ion-item>\n      <h2>Fare</h2>\n      <ion-note class="ioniconcolor1" item-end>{{item.Fare}}/-</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <h2>Package Size:</h2>\n      <ion-note class="ioniconcolor1" item-end>{{item.PackageSize}} </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <h2>Delivery Type:</h2>\n      <ion-note class="ioniconcolor1" item-end>{{item.TransportType}}</ion-note>\n    </ion-item>\n    <ion-item>\n      <h2>Vehicle Type:</h2>\n      <ion-note class="ioniconcolor1" item-end> {{item.VehicleType}} </ion-note>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n      <ion-note class="ioniconcolor1">To: {{item.DestAddress}}\n      </ion-note>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-icon class="ioniconcolor1" name="radio-button-off" item-left large></ion-icon>\n      <ion-note class="ioniconcolor1">From: {{item.PickAddress}}\n      </ion-note>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n  </ion-card>\n  <button *ngIf="notRequested" ion-button full class="buttonitem" (click)="sendRequest(item.PackageID,item.PackageName)">\n      Send Request\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\packagedetail\packagedetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], PackagedetailPage);

//# sourceMappingURL=packagedetail.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enroute_enroute__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nearby_nearby__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_packages_all_packages__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.allpackagespage = __WEBPACK_IMPORTED_MODULE_4__all_packages_all_packages__["a" /* AllPackagesPage */];
        this.nearbypage = __WEBPACK_IMPORTED_MODULE_3__nearby_nearby__["a" /* NearbyPage */];
        this.enroutepage = __WEBPACK_IMPORTED_MODULE_2__enroute_enroute__["a" /* EnroutePage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs  >\n  <ion-tab [root]="allpackagespage" tabTitle="All" tabIcon="paper" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="nearbypage" tabTitle="Nearby" tabIcon="compass" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="enroutepage" tabTitle="Enroute" tabIcon="briefcase" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnqueuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enqueuedetails_enqueuedetails__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EnqueuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnqueuePage = (function () {
    function EnqueuePage(navCtrl, navParams, http, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.responseDataEnqueue = [];
        this.getPackages();
    }
    EnqueuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnqueuePage');
    };
    EnqueuePage.prototype.openEnqueuedetailsPage = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__enqueuedetails_enqueuedetails__["a" /* EnqueuedetailsPage */], this.responseDataEnqueue[i]);
    };
    EnqueuePage.prototype.getPackages = function () {
        var _this = this;
        this.storage.get('ID').then(function (val) {
            _this.ID = val;
            _this.http.get('http://localhost:5000/enquedpackages', { params: { 'TransporterID': _this.ID } }).map(function (res) { return res.json(); }).subscribe(function (response) {
                if (response.content == "failed") {
                    _this.responseDataEnqueue = [];
                    _this.presentAlert("No Enqueued Packages Found");
                }
                else {
                    response.content.map(function (item) {
                        _this.responseDataEnqueue.push(item);
                    });
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    EnqueuePage.prototype.presentAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: text,
            buttons: ['Dismiss'],
        });
        alert.present();
    };
    return EnqueuePage;
}());
EnqueuePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-enqueue',template:/*ion-inline-start:"Y:\Angular\Transporter\src\pages\enqueue\enqueue.html"*/'<!--\n  Generated template for the EnqueuePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar class="headertop">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Enqueue Packages</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="background1">\n  <ion-card *ngFor="let item of responseDataEnqueue, let i= index">\n    <ion-fab right>\n      <button class="buttoncolor" ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n    <img class="imagePackage" src="http://localhost:5000/uploads/{{item.PImage}}" />\n    <ion-item >\n      <h2 >Name</h2>\n      <ion-note item-end class="ioniconcolor1" style="font-size: 17px">{{item.PackageName}}/-</ion-note>\n    </ion-item>\n    <ion-item >\n      <ion-icon class="ioniconcolor1" name="pin" item-start large></ion-icon>\n      <h2 class="ioniconcolor1">To: {{item.DestAddress}}\n      </h2>\n    </ion-item >\n    <button ion-button full class="buttonitem" (click)="openEnqueuedetailsPage(i)">\n      View Details\n    </button>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"Y:\Angular\Transporter\src\pages\enqueue\enqueue.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], EnqueuePage);

//# sourceMappingURL=enqueue.js.map

/***/ })

},[296]);
//# sourceMappingURL=main.js.map