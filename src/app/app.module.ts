import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {FrontPage} from '../pages/front/front';
import { HomePage } from '../pages/home/home';

import {ModalPage} from '../pages/modal/modal';

import {RpaPage} from '../pages/rpa/rpa';

import {EngsupportPage} from '../pages/engsupport/engsupport';

import {InstasupportPage} from '../pages/instasupport/instasupport';

import {PrdsupportPage} from '../pages/prdsupport/prdsupport';


import {PmsPage} from '../pages/pms/pms';

import {TestlabPage} from '../pages/testlab/testlab';
import {DkPage} from '../pages/dk/dk';
import {CommandPage} from '../pages/command/command';
import {LevelonePage} from '../pages/levelone/levelone';
import {LeveltwoPage} from '../pages/leveltwo/leveltwo';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@NgModule({

  declarations: [
    MyApp,
    FrontPage,
    HomePage,
    ModalPage,
    RpaPage,
    EngsupportPage,
    InstasupportPage,
    PrdsupportPage,
    PmsPage,
    TestlabPage,
    DkPage,
    CommandPage,
    LevelonePage,
    LeveltwoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FrontPage,
    HomePage,
    ModalPage,
    RpaPage,
    EngsupportPage,
    InstasupportPage,
    PrdsupportPage,
    PmsPage,
    TestlabPage,
    DkPage,
    CommandPage,
    LevelonePage,
    LeveltwoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TextToSpeech
  ]

})
export class AppModule {}
