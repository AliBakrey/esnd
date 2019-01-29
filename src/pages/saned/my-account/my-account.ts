import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform,App} from 'ionic-angular';
// for translate 
import { TranslateService} from '@ngx-translate/core';
/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform 
    , public app:App, public translate : TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

  // logout function
  logout(){
    // this.navCtrl.push(WelcomePage);
    const root =this.app.getRootNav();
    root.popToRoot();
   }
 // change Direction method
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
