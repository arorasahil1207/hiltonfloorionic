import { Component } from '@angular/core';
import { IonicPage,NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the PrdsupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prdsupport',
  templateUrl: 'prdsupport.html',
})
export class PrdsupportPage {

  constructor(public navParams: NavParams,public view : ViewController) {
  }
  closeModal(){
    this.view.dismiss()
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdsupportPage');
  }

}
