import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public database: AngularFireDatabase) { }

  //Retrieving the list of items
  getListItems(){
    return this.database.list('/listItems/');
  }

  //Adding a new item
  addItem(name){
    this.database.list('/listItems/').push(name);
  }

  //Removing an item
  removeItem(id){
    this.database.list('/listItems/').remove(id);
  }
}
