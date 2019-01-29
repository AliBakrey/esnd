import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UserProvider } from '../../../providers/user/user';
import { MsnoodprofilePage } from '../msnoodprofile/msnoodprofile';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  deta:any;
  deetaaa : any;
  masnod_id: any;
  name: any;
  email : string ='';
  social_id: string ='';
  governorate:any;
  address : string = '';
  telephone : string = '';
  responseData:any;
  user_status:any;
  vmasnod_id : any;
  sand_id : any;
  vsand_id : any;

  userData={
    "name":"",
    "email":"",
    "social_id":"",
    "governorate":"",
    "address":"",
    "telephone":""}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public UserProvider: UserProvider,
    private storage : Storage
  ) {
    

  }

  saveProfile(){
    this.storage.get('user_status').then((val) =>{
      this.user_status =val;
        this.storage.get('vmasnod_id').then((val) =>{
          this.vmasnod_id =val;
            this.storage.get('masnod_id').then((val) =>{
              this.masnod_id =val;
                this.storage.get('sand_id').then((val) =>{
                  this.sand_id =val;
                    this.storage.get('vsand_id').then((val) => {
                      this.vsand_id = val;
                    
            
              if(this.user_status ==1){
                this.http.post(this.UserProvider.updatemasnoodprofile,{
                  "masnod_id":this.masnod_id,
                  "name":this.userData.name,
                  "email":this.userData.email,
                  "social_id":this.userData.social_id,
                  "governorate":this.userData.governorate,
                  "address":this.userData.address,
                  "telephone":this.userData.telephone})
                .subscribe(
                  d => {
                    this.deta = d;
                    this.navCtrl.push(MsnoodprofilePage);
                 }
               );
              }else if(this.user_status == 2){
                this.http.post(this.UserProvider.updatevmasnoodprofile,{
                  "vmasnod_id":this.vmasnod_id,
                  "name":this.userData.name,
                  "email":this.userData.email,
                  "social_id":this.userData.social_id,
                  "governorate":this.userData.governorate,
                  "address":this.userData.address,
                  "telephone":this.userData.telephone})
                .subscribe(
                  d => {
                    this.deta = d;
                    this.navCtrl.push(MsnoodprofilePage);
                 }
               );
              }else if(this.user_status == 3){
                console.log("you are saned");
                this.http.post(this.UserProvider.update_sand,{
                  "sand_id":this.sand_id,
                  "name":this.userData.name,
                  "email":this.userData.email,
                  "social_id":this.userData.social_id,
                  "governorate":this.userData.governorate,
                  "address":this.userData.address,
                  "telephone":this.userData.telephone})
                .subscribe(
                  d => {
                    this.deta = d;
                    this.navCtrl.push(MsnoodprofilePage);
                 }
               );
              }else if(this.user_status == 4){
                console.log("you are vsaned "+ this.vsand_id);
                this.http.post(this.UserProvider.update_vsand,{
                  "vsand_id":this.vsand_id,
                  "name":this.userData.name,
                  "email":this.userData.email,
                  "social_id":this.userData.social_id,
                  "governorate":this.userData.governorate,
                  "address":this.userData.address,
                  "telephone":this.userData.telephone})
                .subscribe(
                  d => {
                    this.deta = d;
                    this.navCtrl.push(MsnoodprofilePage);
                 }
               );
              }
            });
        });
      });
    });
  });
    
  }

  

  ionViewDidLoad() {
    this.masnod_id=this.navParams.get('masnod_id');
    this.name=this.navParams.get('name');
    this.email=this.navParams.get('email');
    this.governorate=this.navParams.get('governorate');
    this.address=this.navParams.get('address');
    this.telephone=this.navParams.get('telephone');
    this.social_id=this.navParams.get('social_id');
    // ---------------
    this.userData.name=this.name;
    this.userData.email=this.email;
    this.userData.governorate=this.governorate;
    this.userData.address=this.address;
    this.userData.telephone=this.telephone;
    this.userData.social_id=this.social_id;
    console.log('ionViewDidLoad EditeprofilePage');
  }

}
