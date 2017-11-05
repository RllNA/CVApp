import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, AlertController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';

//Interface for the items
export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

//Connected to the tabs
rootPage="TabPage";

@ViewChild(Nav) nav:Nav;

//Setting parameters for the items
pages: PageInterface[]=[
  { title: 'About', pageName: 'TabPage', tabComponent: 'AboutPage', index: 0},
  { title: 'Contact', pageName: 'TabPage', tabComponent: 'ContactPage', index: 1},
  { title: 'CV', pageName: 'TabPage', tabComponent: 'CvPage', index: 2},
  { title: 'Hobbies', pageName: 'TabPage', tabComponent: 'HobbiesPage', index: 3},
  { title: 'Projects', pageName: 'TabPage', tabComponent: 'ProjectPage', index: 4},
]

  //Creating alert
  alert(message: string){
    this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  //function for the navigation to the selected page
  openPage(page: PageInterface){
    let params={};

    if(page.index){
      params={tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index !=undefined){
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }

  }
  
  //function for the color of active page
  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();

    if(childNav){
      if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
        return 'primary';
      }
      return;
    }
    
  }

  //Function to log the user out of the app
  logoutUser(){
    try {
    const result = this.fire.auth.signOut;
    if(result){
      this.alert('You have now logged out.');
      this.navCtrl.setRoot('LoginPage');
    }
  }
  catch(e){
    this.alert(e.message);
  }
}

}
