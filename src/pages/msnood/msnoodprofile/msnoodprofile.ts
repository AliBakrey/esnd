import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UserProvider } from '../../../providers/user/user';
import { TranslateService} from '@ngx-translate/core';
import { MyRequestsPage } from '../../saned/my-requests/my-requests';
// import { EditeprofilePage } from '../editeprofile/editeprofile';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { Menu } from 'ionic-angular/components/menu/menu';
import { Storage } from '@ionic/storage';
import { Observable } from 'rx';

/**
 * Generated class for the MsnoodprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msnoodprofile',
  templateUrl: 'msnoodprofile.html',
})
export class MsnoodprofilePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public translate : TranslateService,
    public http: HttpClient,
    private storage: Storage,
    public UserProvider: UserProvider) {

      this.items=this.UserProvider.items;
      this.profile();
  }

  id:any;
  deetaaa : any;
  lamp_status:any;
  category:any;
  request_status:any;
  requsts : any [];
  key:string = 'description';
  items :any = [];
  valid:any;

  name : any;
  email : any ;
  governorate : any ;
  address : any ;
  telephone : any ;
  social_id : any ;
  user_status : any;
  masnod_id :any;
  vmasnod_id : any;
  vmasnod_status:any;
  sand_id:any;
  vsand_id:any;



  public profile(){
    this.storage.get('user_status').then((val) => {
      console.log('yooooour status => ', val);
      this.user_status=val;
        // get msnod id from lacal storage
          this.storage.get('masnod_id').then((val) => {
            console.log('yooooour masnood_id => ', val);
            this.masnod_id=val;
              // get msnod id from lacal storage
              this.storage.get('vmasnod_id').then((val) => {
                console.log('yooooour vmasnood_id => ', val);
                this.vmasnod_id=val;  
                this.storage.get('sand_id').then((val) => {
                  this.sand_id=val;
                   this.storage.get('vsand_id').then((val) => {
                    this.vsand_id=val;
      if(this.user_status == 1){
        this.http.get(this.UserProvider.showmsnoodprofile + this.masnod_id)  
    .subscribe(
      d => {
        this.deetaaa = d;
  //  login as msnood
  console.log(this.deetaaa);

  this.name=this.deetaaa.name;
  this.email=this.deetaaa.email;
  this.governorate=this.deetaaa.governorate;
  this.address=this.deetaaa.address;
  this.telephone=this.deetaaa.telephone;
  this.social_id=this.deetaaa.social_id;
  this.valid=this.deetaaa.valid;
  console.log(this.name);
  this.storage.set('valid',this.deetaaa.valid);
  });
      }else if(this.user_status == 2){
        this.http.get(this.UserProvider.showvmsnoodprofile + this.sand_id)  
    .subscribe(
      d => {
        this.deetaaa = d;
  //  login as msnood
  console.log(this.deetaaa);

  this.name=this.deetaaa.name;
  this.email=this.deetaaa.email;
  this.governorate=this.deetaaa.governorate;
  this.address=this.deetaaa.address;
  this.telephone=this.deetaaa.telephone;
  this.social_id=this.deetaaa.social_id;
  console.log(this.name);
  
  });
      }else if(this.user_status == 3){
        console.log("you are saned");
        this.http.get(this.UserProvider.get_sand + this.sand_id)  
    .subscribe(
      d => {
        this.deetaaa = d;
  //  login as msnood
  console.log(this.deetaaa);

  this.name=this.deetaaa.name;
  this.email=this.deetaaa.email;
  this.governorate=this.deetaaa.governorate;
  this.address=this.deetaaa.address;
  this.telephone=this.deetaaa.telephone;
  this.social_id=this.deetaaa.social_id;
  console.log(this.name);
  
  });
      }else if(this.user_status == 4){
        this.http.get(this.UserProvider.get_vsand + this.vsand_id)  
    .subscribe(
      d => {
        this.deetaaa = d;
  //  login as msnood
  console.log(this.deetaaa);

  this.name=this.deetaaa.name;
  this.email=this.deetaaa.email;
  this.governorate=this.deetaaa.governorate;
  this.address=this.deetaaa.address;
  this.telephone=this.deetaaa.telephone;
  this.social_id=this.deetaaa.social_id;
  console.log(this.name);
  
  });
      }
       });
     });
    });
  });
});
    
}

editProfile(){
  
  // get msnod id from lacal storage
  this.storage.get('masnod_id').then((val) => {
    console.log('yooooour masnood_id => ', val);
      this.masnod_id=val;
        // get msnod id from lacal storage
           this.storage.get('vmasnod_id').then((val) => {
               this.vmasnod_id=val;
                this.storage.get('sand_id').then((val) =>{
                  this.sand_id=val;
                    this.storage.get('vsand_id').then((val) =>{
                      this.vsand_id;
                    
                
                      if(this.user_status == 1){
                                    var masnod_data={
                                      masnod_id:this.masnod_id,
                                      name:this.name,
                                      email:this.email,
                                      governorate:this.governorate,
                                      address:this.address,
                                      telephone:this.telephone,
                                      social_id:this.social_id
                                    }
                            this.navCtrl.push(EditProfilePage,{
                              masnod_id:masnod_data.masnod_id,
                              name:masnod_data.name,
                              email:masnod_data.email,
                              governorate:masnod_data.governorate,
                              address:masnod_data.address,
                              telephone:masnod_data.telephone,
                              social_id:masnod_data.social_id});

                      }else if(this.user_status == 2){
                                    var dataa2={
                                      vmasnod_id:this.UserProvider.vmasnod_id,
                                      name:this.name,
                                      email:this.email,
                                      governorate:this.governorate,
                                      address:this.address,
                                      telephone:this.telephone,
                                      social_id:this.social_id
                                    }
                        this.navCtrl.push(EditProfilePage,{
                          vmasnod_id:dataa2.vmasnod_id,
                          name:dataa2.name,
                          email:dataa2.email,
                          governorate:dataa2.governorate,
                          address:dataa2.address,
                          telephone:dataa2.telephone,
                          social_id:dataa2.social_id});
                      }
                      else if(this.user_status == 3){
                                      var sand_data={
                                        sand_id:this.sand_id,
                                        name:this.name,
                                        email:this.email,
                                        governorate:this.governorate,
                                        address:this.address,
                                        telephone:this.telephone,
                                        social_id:this.social_id
                                      }
                        this.navCtrl.push(EditProfilePage,{
                          sand_id:sand_data.sand_id,
                          name:sand_data.name,
                          email:sand_data.email,
                          governorate:sand_data.governorate,
                          address:sand_data.address,
                          telephone:sand_data.telephone,
                          social_id:sand_data.social_id});
                      }else if(this.user_status == 4){
                                      var data={
                                        sand_id:this.sand_id,
                                        name:this.name,
                                        email:this.email,
                                        governorate:this.governorate,
                                        address:this.address,
                                        telephone:this.telephone,
                                        social_id:this.social_id
                                      }
                        this.navCtrl.push(EditProfilePage,{
                          sand_id:data.sand_id,
                          name:data.name,
                          email:data.email,
                          governorate:data.governorate,
                          address:data.address,
                          telephone:data.telephone,
                          social_id:data.social_id});
                      }
  
      });
    });
  });
});
}

openMyRequests(){
  this.navCtrl.push(MyRequestsPage);
}

  ionViewDidLoad() {
    // this.loaddata();
    
    console.log(this.name);
    console.log('ionViewDidLoad MsnoodprofilePage');
  }

}
