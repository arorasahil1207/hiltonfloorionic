import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DkPage } from './dk';

@NgModule({
  declarations: [
    DkPage,
  ],
  imports: [
    IonicPageModule.forChild(DkPage),
  ],
})
export class DkPageModule {}
