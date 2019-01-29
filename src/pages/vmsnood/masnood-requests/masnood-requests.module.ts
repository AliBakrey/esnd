import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasnoodRequestsPage } from './masnood-requests';

@NgModule({
  declarations: [
    MasnoodRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(MasnoodRequestsPage),
  ],
})
export class MasnoodRequestsPageModule {}
