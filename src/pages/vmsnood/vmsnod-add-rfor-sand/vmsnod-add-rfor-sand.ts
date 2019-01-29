import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,ToastController , ToastOptions , AlertController } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { TranslateService} from '@ngx-translate/core';

import { MasnoodRequestsPage } from '../masnood-requests/masnood-requests';
/**
 * Generated class for the VmsnodAddRforSandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vmsnod-add-rfor-sand',
  templateUrl: 'vmsnod-add-rfor-sand.html',
})
export class VmsnodAddRforSandPage {

  id:any;
  data : any;
  profile: any;
  masnod_id : any;
  status : any;
  request_status:any;
  deetaaa : any;
  requsts : any [];
  request_id:any;
  request_date:any;
  vmasnod_id:any;
  hideme:any;
  attachments:String='hello';
  category: String='monetary';
  masnod_status:String='sick';
  request_description:String='';
  masnod_message:any;

  name : any;
  email : any ;
  governorate : any ;
  address : any ;
  telephone : any ;
  social_id : any ;
  successToast:ToastOptions;
  public event ={
    month:'2019-02-19',
    timeStart:'07:43',
    timeEnds:'2017-02-20'
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public translate : TranslateService,
    public http: HttpClient,
    private toast:ToastController,
    public UserProvider:UserProvider,
    private storage: Storage,
    private alertCtrl: AlertController
  ) {

  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Admin Message',
      inputs: [
        {
          name: 'Message',
          placeholder: 'write your message'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'send',
          handler: data => {
            this.masnod_message = data.Message;
            console.log("admin mesage => " + this.masnod_message);
            // the post 
            this.storage.get("vmasnod_id").then((val)=>{
              this.vmasnod_id = val;
              // console.log(this.vmasnod_id+this.request_id);
              this.http.post(this.UserProvider.hold_masnod_requests,{
                "request_id":this.request_id,
                "vmasnod_id":this.vmasnod_id,
                "masnod_message":this.masnod_message
              })
              .subscribe( 
                data =>{
                  this.successToast = {
                    message:"your request added successfully",
                    duration:3000
                  }
                  this.toast.create(this.successToast).present();
                  this.hide();
                  this.navCtrl.pop();
                  // console.log("=>=>=> "+data);
        
                });
            });
            
          }
        }
      ]
    });
    alert.present();
  }
  showRequest(){
    this.http.get(this.UserProvider.get_one_request+this.request_id)  
              .subscribe(
                d => {
                  this.deetaaa = d;
                  console.log(this.deetaaa);
                  this.masnod_id = this.deetaaa[0].masnod_id;
                  console.log("ttttttt"+this.masnod_id);
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
            this.showProfile();

            });
  }

  selectCategory (event:any){
    this.category = event.target.value;
  }
  selectStatus (event:any){
    this.masnod_status = event.target.value;
  }
  makeOldRequest(){
    this.http.post(this.UserProvider.make_masnod_request_old,{
        "request_id":this.request_id
    })
    .subscribe(
      data=>{
        console.log("make old request is done");
      });
  }
  addRequest(){
    this.http.post(this.UserProvider.add_vmasnod_request,{
      "category":this.category,
      "masnod_status":this.masnod_status,
      "request_description":this.request_description,
      "request_status":this.request_status,
      "attachments":this.attachments,
      "masnod_id":this.masnod_id,
      "request_date":this.request_date,
      "delivery_date":this.event.month
    })
    .subscribe(
      d=>{
        this.data = d ;
        console.log(this.data);
        this.successToast = {
          message:"your request added successfully",
          duration:3000
        }
        this.toast.create(this.successToast).present();
        this.makeOldRequest();
        this.hide();
      }
    )
  }

  showProfile(){
    //  get profile for masnod
    console.log("masnod_id" + this.masnod_id);
    this.http.get(this.UserProvider.showmsnoodprofile + this.masnod_id)  
    .subscribe(
      d => {
        this.profile = d;
  //  login as msnood
  console.log(this.profile);

  this.name=this.profile.name;
  this.email=this.profile.email;
  this.governorate=this.profile.governorate;
  this.address=this.profile.address;
  this.telephone=this.profile.telephone;
  this.social_id=this.profile.social_id;
  
  });
  }

  hide() {
    this.hideme = true;
  }
  approve(){
    this.hideme = true;
    this.storage.get("vmasnod_id").then((val)=>{
      this.vmasnod_id = val;
      // console.log(this.vmasnod_id+this.request_id);
      this.http.post(this.UserProvider.approve_masnod_request,{
        "request_id":this.request_id,
        "vmasnod_id":this.vmasnod_id,
        "delivery_date":this.event.month
      })
      .subscribe( 
        data =>{
          this.successToast = {
            message:"your request added successfully",
            duration:3000
          }
          this.toast.create(this.successToast).present();
          this.hide();
          this.navCtrl.pop();
          // console.log("=>=>=> "+data);

        });
    });
  }

  escalate(){
    this.http.post(this.UserProvider.escalate_requests,{
      "request_id":this.request_id,
      "vmasnod_id":this.vmasnod_id
    })
    .subscribe(
      data=>{
        console.log(data);
        this.navCtrl.pop();
      });
    
  }

  hold(){
    this.presentPrompt();
  }
  ionViewDidLoad() {
    
    this.request_id = this.navParams.get("id");
    this.showRequest();
    this.showProfile();
    console.log(">>>>>>>>>"+this.request_id);
    console.log('ionViewDidLoad VmsnodAddRforSandPage');
  }

}
