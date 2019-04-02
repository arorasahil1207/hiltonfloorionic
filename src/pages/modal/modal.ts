import { Component } from '@angular/core';
import { IonicPage, NavParams ,ViewController} from 'ionic-angular';
// import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public view: ViewController, public navParams: NavParams) {
  }
  closeModal(){
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
