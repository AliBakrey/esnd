import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController , ToastOptions} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Camera , CameraOptions  } from '@ionic-native/camera';
// for translate 
import { TranslateService} from '@ngx-translate/core';

import { MsnoodstatusPage } from '../msnoodstatus/msnoodstatus';
import { LoginPage } from '../../login/login';
import { MyApp } from '../../../app/app.component';
import { UserProvider } from '../../../providers/user/user';


/**
 * Generated class for the MsnoodhelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msnoodhelp',
  templateUrl: 'msnoodhelp.html',
})
export class MsnoodhelpPage{

  id:any;
  deta:any;
  status : any;
  msnoodname:any=this.UserProvider.name;
  myphoto:any;
  successToast:ToastOptions;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    private storage:Storage,
    public UserProvider:UserProvider,
    private toast:ToastController,
    public translate : TranslateService,
    private camera: Camera
  ) {
    this.request_date = new Date();
    this.getDate();

    this.masnod_id=this.navParams.get('masnod_id');
    this.UserProvider.masnod_id=this.masnod_id;
    // vmasnood
    this.vmasnod_id=this.navParams.get('vmsnood_id');
    this.UserProvider.vmasnod_id=this.vmasnod_id;
    // console.log(" your id ya gehad : " + this.UserProvider.masnod_id);
    this.msnoodname=this.navParams.get('name');
    this.UserProvider.name=this.msnoodname;
     
  }


  
  

  // category:String='';
  category: String='monetary';
  masnod_status:String='sick';
  request_status:String='m';
  request_description:String='';
  attachments:String='hello';
  masnod_id: any = '';
  vmasnod_id :any ='';
  request_date:any;

  getDate(){
    var dateObj = new Date()

    var year = dateObj.getFullYear().toString()
    var month = dateObj.getMonth().toString()
    var date = dateObj.getDate().toString()

    this.request_date = year + '-' + month +1+ '-' + date;
  }
  
  
  ionViewDidLoad() {
    // console.log(this.navParams.get('dataa'));
    this.masnod_id=this.navParams.get('masnod_id');
    console.log( "this is gehad id == " + this.masnod_id);
    this.vmasnod_id=this.navParams.get('vmsnood_id');
    console.log( "this is gehad vmsnood_id == " + this.vmasnod_id);
    console.log('ionViewDidLoad MsnoodhelpPage');
  }


  selectCategory (event:any){
    this.category = event.target.value;
  }
  selectStatus (event:any){
    this.masnod_status = event.target.value;
  }

  openmenu(){
    this.navCtrl.push(MyApp);
  }

  addhelp(){
    this.storage.get('masnod_id').then((val) => {
      console.log('yooooour masnood_id => ', val);
      this.masnod_id=val;
    this.http.post(this.UserProvider.addrequest,{
      "category":this.category,
      "masnod_status":this.masnod_status,
      "request_description":this.request_description,
      "request_status":this.request_status,
      "attachments":this.attachments,
      "masnod_id":this.masnod_id,
      "request_date":this.request_date
    })
    .subscribe(
      d => {
        this.deta = d;

      if(this.deta = "success"){
        var dataa={
          status:this.status,
          id:this.masnod_id
        }
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        this.successToast = {
          message:"your request added successfully",
          duration:3000
        }
        this.toast.create(this.successToast).present();
      }
      else{

      }
     }
   );
  });
  }

  getphoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  getphotofromgalary(){
    
  }

}
