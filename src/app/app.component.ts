import { EnroutePage } from './../pages/enroute/enroute';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { ListPage } from '../pages/list/list';
import { NearbyPage } from '../pages/nearby/nearby';
import { Http } from '@angular/http';
import { EnqueuedetailsPage } from '../pages/enqueuedetails/enqueuedetails';
import { PackagedetailPage } from '../pages/packagedetail/packagedetail';
import { PendingRequestsPage } from '../pages/pending-requests/pending-requests';
import { ProfilePage } from '../pages/profile/profile';
import { AllPackagesPage } from '../pages/all-packages/all-packages';
import { EnqueuePage } from '../pages/enqueue/enqueue';
import { NotificationsPage } from '../pages/notifications/notifications';
import { HelpPage } from '../pages/help/help';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import * as firebase from 'Firebase';
var config = {
  apiKey: "AIzaSyDK3eYlkVHJTY83OOYXVIZQRq5C549pBcc",
  authDomain: "transporterdnd.firebaseapp.com",
  databaseURL: "https://transporterdnd.firebaseio.com",
  projectId: "transporterdnd",
  storageBucket: "transporterdnd.appspot.com",
  messagingSenderId: "680127595430"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any }>;
  Name: string;
  NotificationData = [];
  Token: any;
  ID: any;
  profileImage: any;
  loggedIn: Boolean;
  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public events: Events,
    public storage: Storage,
    private fcm: FCM,
    private alertCtrl: AlertController,
    public http: Http,
    public geolocation: Geolocation, ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();  
    });
    firebase.initializeApp(config);
    this.loggedIn=false;
    this.Name = "";
    this.pages = [
      { title: 'All Packages', component: HomePage },
      { title: 'Pending Requests', component: PendingRequestsPage },
      { title: 'Enqueue Packages', component: EnqueuePage },
      { title: 'Notifications', component: NotificationsPage },
      { title: 'Help', component: HelpPage },
    ];

    this.events.subscribe('user:loggedin', (text) => {
     
      
      this.storage.get('Name').then((val) => {
        this.Name = val;
        this.showNotification("thy name"+this.Name);
        
      });
      this.showNotification("thy name"+this.Name);
      this.storage.get('ProfileImage').then((val) => {
        this.profileImage = val;
      });
      //this.onNotification();
      this.loggedIn=true;
      console.log(this.loggedIn)
    
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
  ionViewDidLoad(){
    
  }

  // trackUser(): Observable<any> {

  //   return new
  // }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
  openProfile() {
    this.nav.push(ProfilePage);
  }
  logout() {
    this.loggedIn=false;  
    
    this.storage.set('Name', "");
    this.storage.set('Email', "");
    this.storage.set('Password', "")
    this.storage.set('ID', "");
    this.storage.set('Rating', "");
    this.storage.set('ProfileImage', "");
    this.storage.set('FCMToken', "");
    
    this.nav.setRoot(LoginPage);
  }
  onNotification() {
    this.fcm.getToken().then(token => {
      console.log(token);
      this.Token = token;
    });

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        this.NotificationData.push(data);
        console.log(data);
        this.nav.setRoot(NotificationsPage, this.NotificationData);
      } else {
        this.showNotification(data);
        console.log(data);
        this.NotificationData.push(data);
        this.nav.setRoot(NotificationsPage, this.NotificationData);
      }
    });
    this.fcm.onTokenRefresh().subscribe(token => {
      this.storage.get('ID').then((val) => {
        this.ID = val;
        let data = {
          'ID': this.ID,
          'appType':"Transporter",
          'FCMToken':token,
        };
        this.http.post('http://localhost:5000/updateToken', JSON.stringify(data)).map(res => res.json()).subscribe(data => {
        },
          err => {
            console.log('error');
          });
      });
    });
  }

  showNotification(noti) {
    let alert = this.alertCtrl.create({
      title: 'Notification',
      subTitle: noti,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}

