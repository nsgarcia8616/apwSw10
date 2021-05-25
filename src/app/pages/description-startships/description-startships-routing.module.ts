import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionStartshipsPage } from './description-startships.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionStartshipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionStartshipsPageRoutingModule {}
