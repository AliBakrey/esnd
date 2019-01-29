import { Component } from '@angular/core';
import { VmsnodAddRforSandPage } from '../vmsnod-add-rfor-sand/vmsnod-add-rfor-sand';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Validators } from '@angular/forms/src/validators';

import { AddMasnodRbyIdPage } from '../add-masnod-rby-id/add-masnod-rby-id';
/**
 * Generated class for the MasnoodRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masnood-requests',
  templateUrl: 'masnood-requests.html',
})
export class MasnoodRequestsPage {

  id:any;
  data : any;
  masnod_id : 1;
  status : any;
  request_status:any;
  deetaaa : any;
  requsts : any [];
  request_id:any;
  request_date:any;
  deta:any;
  vmasnod_id:any;
  requests_id:any[];
  vsand_id:any;



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public translate : TranslateService,
    public http: HttpClient,
    public UserProvider:UserProvider,
    private storage: Storage

   ) {
  }
  //-------------------------------
  // openAddbyID(masnod_id){
  //   this.masnod_id = masnod_id;
  //   // get datastorage
  //   this.storage.get('vmasnod_id').then((val) => {
  //     this.vmasnod_id=val;
  //     // post make old data
  //   this.http.post(this.UserProvider.make_old_request,{
  //     "masnod_id":this.masnod_id,
  //     "vmasnod_id":this.vmasnod_id})
  //   .subscribe(
  //     d => {
  //       this.deta = d;
  //       console.log(this.deta);
  //       for(let i=0;i<this.deta.length;i++){
          
  //       }
  //    }
  //  );
  // });
  //   this.navCtrl.push(AddMasnodRbyIdPage,{masnod_id:masnod_id});
  // }
  editR(id){
    this.navCtrl.push(VmsnodAddRforSandPage,{id:id});
  }
  //--------------------------------
  public getAllMasnodR(){
    // get msnod id from lacal storage
    this.storage.get('masnod_id').then((val) => {
      this.masnod_id=val;
      // get user status from lacal storage
      this.storage.get('user_status').then((val) => {
        this.status=val;
        // if user is masnood 
        if(this.status == 1){
          
        }else if(this.status==2){
          console.log("you are Vmasnood welcom :)")
          this.http.get(this.UserProvider.getAllMasnodReForVmasnod )  
              .subscribe(
                d => {
                  this.deetaaa = d;
                  console.log(this.deetaaa);
            //  login as msnood
            for(let i=0;i<this.deetaaa.length;i++){
              if( this.deetaaa[i].request_status == 'm'){
                this.deetaaa[i].url = '../../assets/imgs2/yellow.jpg' ;
                this.request_status = this.deetaaa[i].request_status;
              }else if(this.deetaaa[i].request_status == 'vm'){
                this.deetaaa[i].url = '../../assets/imgs2/green.jpg' ;
                this.request_status = this.deetaaa[i].request_status;
              }else{
                this.deetaaa[i].url = '../../assets/imgs2/yellow.jpg';
              }
            }
            
            for(let i=0;i<this.deetaaa.length;i++){
              if( this.deetaaa[i].category == 'monetary')
                this.deetaaa[i].url1 = '../../assets/imgs2/monetary.jpg' ;
              else if(this.deetaaa[i].category == 'materialistic')
                this.deetaaa[i].url1 = '../../assets/imgs2/material.jpg' ;
              else
                this.deetaaa[i].url1 = '../../assets/imgs2/other.jpg';
            }
            });
        }else if(this.status == 4){
          console.log("hehad");
          this.http.get(this.UserProvider.get_all_sand_requests_for_vsand )  
              .subscribe(
                d => {
                  this.deetaaa = d;
                  console.log(this.deetaaa);
            //  login as msnood
            for(let i=0;i<this.deetaaa.length;i++){
              if( this.deetaaa[i].request_status == 's'){
                this.deetaaa[i].url = '../../assets/imgs2/yellow.jpg' ;
                this.request_status = this.deetaaa[i].request_status;
              }else if(this.deetaaa[i].request_status == 'vm'){
                this.deetaaa[i].url = '../../assets/imgs2/green.jpg' ;
                this.request_status = this.deetaaa[i].request_status;
              }else{
                this.deetaaa[i].url = '../../assets/imgs2/yellow.jpg';
              }
            }
            
            for(let i=0;i<this.deetaaa.length;i++){
              if( this.deetaaa[i].category == 'monetary')
                this.deetaaa[i].url1 = '../../assets/imgs2/monetary.jpg' ;
              else if(this.deetaaa[i].category == 'materialistic')
                this.deetaaa[i].url1 = '../../assets/imgs2/material.jpg' ;
              else
                this.deetaaa[i].url1 = '../../assets/imgs2/other.jpg';
            }
            });
          console.log("you are sand "+this.status);
        }

      });
    }); 
    
  }
  // this feild for Vsand
  // status 4 confirm and escalate
  confirm(id){
    this.storage.get("vsand_id").then((Val) =>{
      this.vsand_id = Val;
        this.http.post(this.UserProvider.update_vsand_request,{
          "request_id":id,
          "vsand_id":this.vsand_id
        })
        .subscribe(
          data =>{
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          })
        });
  }

  escalate(id){

  }
  ionViewWillEnter(){
    this.getAllMasnodR();
  }
  ionViewDidLoad() {
    // this.getAllMasnodR();
    console.log('ionViewDidLoad MasnoodRequestsPage');
  }

}
