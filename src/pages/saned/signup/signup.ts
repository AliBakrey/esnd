import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ToastController,AlertController,ToastOptions} from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
// for translate 
import { TranslateService} from '@ngx-translate/core';
// import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';
//for transition
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { LoginPage } from '../../login/login';
import { MsnoodstatusPage } from '../../msnood/msnoodstatus/msnoodstatus';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  welcome:ToastOptions;
   response:any;
   sand_info:any;

  name: string='';
  email : string='';
  governorate : string='';
  address : string='';
  telephone : string='';
  social_id : string='';
  password : string='';
  confirmpassword : string='';
  data:any;
  deta:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public translate : TranslateService,
    public http: HttpClient,
    private nativePageTransitions: NativePageTransitions,
    private toast: ToastController,
    public UserProvider: UserProvider,
    private storage: Storage,
  public alertCtrl: AlertController
) {
  }


  



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  // for signup transition
  singnup1(){
    this.navCtrl.push(TabsPage);
  }

  login(){

    this.navCtrl.push(LoginPage);
  }

  singnup(){
    if(this.password===this.confirmpassword){
                this.http.post(this.UserProvider.sand_register,{
                  "name":this.name,
                  "email":this.email,
                  "governorate":this.governorate,
                  "address":this.address,
                  "telephone":this.telephone,
                  "social_id":this.social_id,
                  "password":this.password
                })
                .subscribe(
                  d => {
                    this.deta = d;
                  console.log(this.deta["status"]);
                    console.log(this.deta.data.id);
                  if(this.deta["status"] == 3 ){
                    console.log("here");
                      var dataa={
                        status:this.deta["status"],
                        id:this.deta.data.id
                      }
                    console.log("ff");
                    // wellcome massage
                    this.response = this.deta["response"];
                    console.log(this.response);
                      // this.welcome = {
                      //   message:this.response,
                      //   showCloseButton: true,
                      //   closeButtonText: "close",
                      //   position: "middle"
                      // }
                      // this.toast.create(this.welcome).present();
                      const alert = this.alertCtrl.create({
                              subTitle: this.response,
                              buttons: ['OK'],
                              cssClass:"alert"
                            });
                            alert.present();
                      this.storage.set('sand_id', this.deta.data.id);
                      this.storage.set('user_status', this.deta["status"]);
                    this.navCtrl.push(MsnoodstatusPage,{id:dataa.id,id1:dataa.status});
                    
                  }
                  else{
                    this.response = this.deta["response"];
                    this.welcome = {
                      message:this.response,
                      duration:3000
                    }
                    this.toast.create(this.welcome).present();
                  }
                }
              );
    }else{
      console.log("The password confirmation does not match.")
      this.welcome = {
              message:"The password confirmation does not match.",
              duration:3000
            }
            this.toast.create(this.welcome).present();
    }
    
  }

  changeDirection(){
    if (this.platform.isRTL){
      this.translate.use('ar');
      this.platform.setDir('rtl',true);
      }else{
      this.translate.use('en');
      this.platform.setDir('ltr',true);
      }
  } 
}
