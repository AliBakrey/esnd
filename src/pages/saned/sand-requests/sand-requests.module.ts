import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SandRequestsPage } from './sand-requests';

@NgModule({
  declarations: [
    SandRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(SandRequestsPage),
  ],
})
export class SandRequestsPageModule {}
