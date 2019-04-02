import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LevelonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-levelone',
  templateUrl: 'levelone.html',
})
export class LevelonePage {

  constructor(public view: ViewController, public navParams: NavParams) {
  }
closeModa(){
  this.view.dismiss()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LevelonePage');
  }

}
