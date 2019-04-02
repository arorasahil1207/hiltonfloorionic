import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PmsPage } from './pms';

@NgModule({
  declarations: [
    PmsPage,
  ],
  imports: [
    IonicPageModule.forChild(PmsPage),
  ],
})
export class PmsPageModule {}
