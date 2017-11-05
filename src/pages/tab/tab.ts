import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})

//Setting roots
export class TabPage {
  tab1Root='AboutPage';
  tab2Root='ContactPage';
  tab3Root='CvPage';
  tab4Root='HobbiesPage';
  tab5Root='ProjectsPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
