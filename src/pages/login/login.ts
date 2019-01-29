import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, MenuController,ToastController,ToastOptions } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

import { SignupPage } from '../saned/signup/signup';
import { Storage } from '@ionic/storage';
import { WelcomePage } from '../welcome/welcome';
import { TabsPage } from '../saned/tabs/tabs';
import { HomePage } from '../saned/home/home';
import { MsnoodstatusPage } from '../msnood/msnoodstatus/msnoodstatus';
import { MsnoodhelpPage } from '../msnood/msnoodhelp/msnoodhelp';
import { UserProvider } from '../../providers/user/user'

import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UserProvider]
})
export class LoginPage {
  
  public regestform: any;
   id : any ;
   welcome:ToastOptions;
   name:any;
   response:any;
   deta:any;
  email: string='';
  password : string='';
  username:any;
  loginData = {
    email: '',
    password: ''
    // device_id:''
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public http: HttpClient, 
    private menuCtrl: MenuController,
    public UserProvider: UserProvider,
    private storage: Storage,
    private toast: ToastController,
    public _form:FormBuilder
  ) {

    this.menuCtrl.enable(false);
    this.regestform = this._form.group({
      "email":["",Validators.required],
      "password":["",Validators.required]
    })
    
    // this.UserProvider.id=data.data[0].id;
    // console.log(this.UserProvider.id);
  }
public inputVal;


  
showToast(){
  this.name = this.deta.data.name;
  this.response = this.deta["response"];
          this.welcome = {
            message:this.response,
            duration:3000
          }
          this.toast.create(this.welcome).present();
}

  
  login(){


    this.http.post(this.UserProvider.login,{
      "email":this.email,
      "password":this.password})
      .subscribe(
        d => {
                this.deta = d;
        //  login as msnood
        if(this.deta["status"]==1){ 
          var dataa={
            status:this.deta["status"],
            id:this.deta.data.id
          }
          this.storage.set('masnod_id', this.deta.data[0].id);
          this.storage.set('user_status', this.deta["status"]);
          this.storage.set('valid',this.deta.data[0].valid);
          this.navCtrl.push(MsnoodstatusPage,{masnod_id:dataa.id,id1:dataa.status});
          this.showToast();
          
        }else if(this.deta["status"]==2){
          var dataa={
            status:this.deta["status"],
            id:this.deta.data[0].id
          }
          this.storage.set('vmasnod_id', this.deta.data[0].id);
          this.storage.set('user_status', this.deta["status"]);
          this.navCtrl.push(MsnoodstatusPage,{vmsnood_id:dataa.id,id1:dataa.status});
          this.showToast();
        }else if(this.deta["status"]==3){
          var dataa={
            status:this.deta["status"],
            id:this.deta.data[0].id
          }
          this.storage.set('sand_id', this.deta.data[0].id);
          this.storage.set('user_status', this.deta["status"]);
          this.navCtrl.push(MsnoodstatusPage,{id:dataa.id,id1:dataa.status});
          this.showToast();
        }else if(this.deta["status"]==4){
          var dataa={
            status:this.deta["status"],
            id:this.deta.data[0].id
          }
          this.storage.set('vsand_id', this.deta.data[0].id);
          this.storage.set('user_status', this.deta["status"]);
          this.navCtrl.push(MsnoodstatusPage,{id:dataa.id,id1:dataa.status});
          this.showToast();
        } else if(this.deta["status"]==0){
          this.showToast();
        }
       }
     );
    // this.navCtrl.push(MsnoodhelpPage);
  }
  signup(){
    this.navCtrl.push(WelcomePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
}
