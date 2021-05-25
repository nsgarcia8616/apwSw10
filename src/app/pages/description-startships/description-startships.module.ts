import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionStartshipsPageRoutingModule } from './description-startships-routing.module';

import { DescriptionStartshipsPage } from './description-startships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionStartshipsPageRoutingModule
  ],
  declarations: [DescriptionStartshipsPage]
})
export class DescriptionStartshipsPageModule {}
