import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../models/users";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  //Creating alert
  alert(message: string){
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  //Function to log the user in
  async loginUser(user: User){
    try {
    const result = this.fire.auth.signInWithEmailAndPassword(user.email, user.password);
    if (result) {
      //this.alert('You are now logged in!')
      //Navigating to inside of the app
      this.navCtrl.setRoot('MenuPage');
    }
  } catch (e) {
    this.alert(e.message);
    console.error(e);
  }
}

  //Function to move to the register page
  doRegister(){
    this.navCtrl.push('RegisterPage');
  }

}