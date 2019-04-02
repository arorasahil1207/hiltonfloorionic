import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import {ModalPage} from '../modal/modal';
import {RpaPage} from '../rpa/rpa';
import {EngsupportPage} from '../engsupport/engsupport';
import {InstasupportPage} from '../instasupport/instasupport';
import {PrdsupportPage} from '../prdsupport/prdsupport';
import {PmsPage} from '../pms/pms';
import {TestlabPage} from '../testlab/testlab';
import { DkPage} from '../dk/dk';
import {CommandPage} from '../command/command';
import {LevelonePage}  from '../levelone/levelone';
import {LeveltwoPage} from '../leveltwo/leveltwo';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modal : ModalController,private tts:TextToSpeech) {

  }
try(){
  this.tts.speak("hello world")
  .then(()=>{
    console.log("working");
  })

  alert("working")
}
  admNonPms(){
    
    const myModal = this.modal.create(ModalPage);
    myModal.present();

  }

// async admNonPms():Promise<any>{

//     const myModal = this.modal.create(ModalPage);
//     myModal.present();
// }

  //adm - rpa modal

  admRpa(){
    const myRpa = this.modal.create(RpaPage);
    myRpa.present();
  }
  engSupport(){
    const engSupport =this.modal.create(EngsupportPage);

    engSupport.present();
  }
  instaSupport(){
    const instaSupport =this.modal.create(InstasupportPage);

    instaSupport.present();
  }
  prdSupport(){
    const prdSupport =this.modal.create(PrdsupportPage);
    prdSupport.present();
  }
  pms(){
    const pms =this.modal.create(PmsPage)
    pms.present()
  }

  testLab(){
      const lab = this.modal.create(TestlabPage);
      lab.present();
  }
  dk(){
    const dk = this.modal.create(DkPage);
    dk.present()
  }
  command(){
    const command = this.modal.create(CommandPage);
    command.present();
}
one(){
  const one = this.modal.create(LevelonePage)
  one.present()
}
two(){
  const two = this.modal.create(LeveltwoPage)
  two.present()
}
}
