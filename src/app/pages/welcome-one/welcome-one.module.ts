import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeOnePageRoutingModule } from './welcome-one-routing.module';

import { WelcomeOnePage } from './welcome-one.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeOnePageRoutingModule,
    SwiperModule,
  ],
  declarations: [WelcomeOnePage],
})
export class WelcomeOnePageModule {}
