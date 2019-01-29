import { Component ,ViewChild } from '@angular/core';
import { Platform ,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from '@angular/common/http';
import { TranslateService} from '@ngx-translate/core';

import { WelcomePage } from '../pages/welcome/welcome';
import { HomePage } from '../pages/saned/home/home';
import { MsnoodstatusPage } from '../pages/msnood/msnoodstatus/msnoodstatus';

import { SettingsPage } from '../pages/msnood/settings/settings';
import { AboutappPage } from '../pages/msnood/aboutapp/aboutapp';
import { SignupPage } from '../pages/saned/signup/signup';
import { MsnoodprofilePage } from '../pages/msnood/msnoodprofile/msnoodprofile' ;



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;


  rootPage:any = WelcomePage;
  activepage:any;
  // rootPage:any = SignupPage;

  pages: Array<{title: string, component: any, icon: string}>;
  
  constructor(
    public platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public http: HttpClient,
    public translate : TranslateService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Main', component: MsnoodstatusPage, icon :'ios-home-outline' },
      { title: 'About the App', component: AboutappPage , icon :'ios-information' },
      { title: 'My Profile', component: MsnoodprofilePage , icon :'ios-person' },
      { title: 'Settings', component: SettingsPage , icon :'ios-settings' },
      { title: 'Log Out', component: WelcomePage , icon :'ios-log-out' },
    ];

    this.activepage = this.pages[0];

  }// end constructor


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activepage = page;
  }
  checkActive(page){
    return page == this.activepage;
  }
  changeDirection(){
    if (this.platform.isRTL){
      this.translate.use('en');
      this.platform.setDir('ltr',true);
      }else{
      this.translate.use('ar');
      this.platform.setDir('rtl',true);
      }
  }
}
