import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestlabPage } from './testlab';

@NgModule({
  declarations: [
    TestlabPage,
  ],
  imports: [
    IonicPageModule.forChild(TestlabPage),
  ],
})
export class TestlabPageModule {}
