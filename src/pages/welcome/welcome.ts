import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ToastController,ToastOptions , MenuController} from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
// for translate 
import { TranslateService} from '@ngx-translate/core';
import { SignupPage } from '../saned/signup/signup';
import { LoginPage } from '../login/login';
import { SignupmasnoodPage } from '../msnood/signupmasnood/signupmasnood';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  rootScope : any;
  toastOptions:ToastOptions;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public translate : TranslateService,
    private toast: ToastController,
    private menuCtrl: MenuController,

  ) {
    this.menuCtrl.enable(false);
    this.toastOptions = { 
      message:'you are masnod',
      duration:3000
    }
    // if (this.platform.isRTL){
    //   this.translate.use('en');
    //   this.platform.setDir('ltr',true);
    //   }else{
    //     this.translate.use('ar');
    //     this.platform.setDir('rtl',true);
    //   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(){
    // this.toast.create(this.toastOptions).present();
    this.navCtrl.push(LoginPage);
  }

  signUp(){

    this.navCtrl.push(SignupPage);
  }
  signUpmasnood(){
    this.navCtrl.push(SignupmasnoodPage);
  }
  
}
