import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dk',
  templateUrl: 'dk.html',
})
export class DkPage {

  constructor(public view: ViewController, public navParams: NavParams) {
  }
closeModal(){
  this.view.dismiss()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DkPage');
  }

}
