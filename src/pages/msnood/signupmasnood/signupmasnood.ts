import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController , ToastOptions , AlertController} from 'ionic-angular';
import { LoginPage } from '../../login/login';
import { HttpClient } from '@angular/common/http';
import { MsnoodstatusPage } from '../msnoodstatus/msnoodstatus';
import { MsnoodhelpPage } from '../msnoodhelp/msnoodhelp';
import { UserProvider } from '../../../providers/user/user';
import { Storage } from '@ionic/storage';
import { FormBuilder , FormGroup , Validators , AbstractControl} from '@angular/forms';


/**
 * Generated class for the SignupmasnoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupmasnood',
  templateUrl: 'signupmasnood.html',
})
export class SignupmasnoodPage {

  welcome:ToastOptions;
  response:any;
  // form validation
  formgroup:FormGroup;
  firstname : AbstractControl;
  lastname : AbstractControl;

  deta:any;
  name: string ='';
  email : string ='';
  social_id: string ='';
  governorate:String = '';
  address : string = '';
  telephone : string = '';
  password : string='';
  confirmpassword : string='';
  responseData:any;
  userData={
    "name":"",
    "email":"",
    "social_id":"",
    "governorate":"",
    "address":"",
    "telephone":"",
    "password":""}


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public UserProvider: UserProvider,
    private toast: ToastController,
    private storage: Storage,
    public formbuilder:FormBuilder,
    public alertCtrl: AlertController
    
  ) {
    this.formgroup = formbuilder.group({
      firstname : ['' ,  [Validators.required, Validators.minLength(5)]],
      lastname : ['' , [Validators.required,Validators.maxLength(15)]]
    });
    this.firstname = this.formgroup.controls['firstname'];
    this.lastname = this.formgroup.controls['lastname'];
  }
  
  singnupmsnood(){
    if(this.userData.password===this.confirmpassword){
      this.http.post(this.UserProvider.register,{
        "name":this.userData.name,
        "email":this.userData.email,
        "social_id":this.userData.social_id,
        "governorate":this.userData.governorate,
        "address":this.userData.address,
        "telephone":this.userData.telephone,
        "password":this.userData.password})
      .subscribe(
        d => {
          this.deta = d;
          this.response = this.deta.response;
          console.log(this.response);
        if(this.deta["status"]==1){ 
  
            this.storage.set('masnod_id', this.deta.data.id);
            this.storage.set('user_status', this.deta["status"]);
            this.storage.set('valid', this.deta["valid"]);
            
            const alert = this.alertCtrl.create({
              subTitle: "Wellcome "+ this.deta.data.name+" you are a masnod please check your profile to follow up your validation :)",
              buttons: ['OK'],
              cssClass:"alert"
            });
            alert.present();

          this.navCtrl.push(MsnoodstatusPage);
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

  login(){

    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupmasnoodPage');
  }

}
