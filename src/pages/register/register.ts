import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/users';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

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

  //function to register a new user
  async registerUser(user: User){
    try {
    const result = this.fire.auth.createUserWithEmailAndPassword(user.email, user.password);
    if(result){
      this.alert('You have successfully registered!');
      //Directing the user back to the login page
      this.navCtrl.setRoot('LoginPage');
    }
    }
    catch(e){
      this.alert(e.message);
      console.error(e);
    }
  }
}
