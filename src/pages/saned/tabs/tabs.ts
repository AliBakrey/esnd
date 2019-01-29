import { MyAccountPage } from './../my-account/my-account';
import { Component } from '@angular/core';
// for translate 
import { TranslateService} from '@ngx-translate/core';

import { ConfirmAid } from '../Confirm aid/Confirm aid';
import { notifications } from '../notifications/notifications';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ConfirmAid;
  tab3Root = notifications;
  tab4Root = MyAccountPage;

  constructor(public translate : TranslateService) {

  }
}
