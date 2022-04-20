import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeOnePage } from './welcome-one.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeOnePageRoutingModule {}
