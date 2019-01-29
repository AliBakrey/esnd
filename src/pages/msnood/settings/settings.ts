import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { TranslateService} from '@ngx-translate/core';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public translate : TranslateService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
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
