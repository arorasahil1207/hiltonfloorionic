import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
//insta support = interface spport
/**
 * Generated class for the InstasupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instasupport',
  templateUrl: 'instasupport.html',
})
export class InstasupportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private view :ViewController) {
  }
closeModal(){
  this.view.dismiss()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad InstasupportPage');
  }

}
