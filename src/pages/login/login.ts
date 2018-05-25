import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  login(event) {
    if (!event.error) {
      this.toastCtrl.create({
        message: `Welcome to Beep, ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('EditProfilePage');
    } else {
      this.toastCtrl.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
