import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,MenuController} from 'ionic-angular';
// for translate 
import { TranslateService} from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Menu } from 'ionic-angular/components/menu/menu';
import { HttpClient } from '@angular/common/http';
import { concat } from 'rxjs/operator/concat';
import { UserProvider } from '../../../providers/user/user';
import { MsnoodprofilePage } from '../msnoodprofile/msnoodprofile';
import { MasnoodRequestsPage } from '../../vmsnood/masnood-requests/masnood-requests';
import { EditMasnoodRequestPage } from '../edit-masnood-request/edit-masnood-request';
import { MsnoodhelpPage } from '../msnoodhelp/msnoodhelp';
import { VerifyMasnoodPage } from '../../vmsnood/verify-masnood/verify-masnood';
import { AllRfordeliverdPage } from '../../vmsnood/all-rfordeliverd/all-rfordeliverd';
import { SandRequestsPage } from '../../saned/sand-requests/sand-requests';
import { MyRequestsPage } from '../../saned/my-requests/my-requests';
import { VerifySandPage } from '../../vsand/verify-sand/verify-sand';

/**
 * Generated class for the MsnoodstatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-msnoodstatus',
  templateUrl: 'msnoodstatus.html',
  
})
export class MsnoodstatusPage {

  id:any;
  data : any;
  masnod_id : any='';
  status : any;
  valid:any;
  request_status:any;
  deetaaa : any;
  requsts : any [];
  request_id:any;
  request_date:any;
  vmasnod_requests_for_sand:any;
  sand_requests_for_vsand : any;
  selectRforSand:any;
  sand_id:any;
  pickup_method: any='himself';
  request:any;
  selectRforvMasnod:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public translate : TranslateService,
    public http: HttpClient,
    public UserProvider:UserProvider,
    private storage: Storage,
    private menuCtrl: MenuController,
  ) {
    this.menuCtrl.enable(true);
  }

  public msnod(){
    // get msnod id from lacal storage
    this.storage.get('masnod_id').then((val) => {
      this.masnod_id=val;
      // get user status from lacal storage
      this.storage.get('user_status').then((val) => {
        this.status=val;
        this.storage.get('valid').then((val) =>{
          this.valid=val;
          console.log("valid is " + this.valid);
        });
        // if user is masnood 
        if(this.status == 1){
          this.http.get(this.UserProvider.getAllMasnodR+this.masnod_id)  
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
                this.deetaaa[i].url = '../../assets/imgs2/gray.jpg' ;
                this.request_status = this.deetaaa[i].request_status;
              }else if(this.deetaaa[i].request_status == 's'){
                this.deetaaa[i].url = '../../assets/imgs2/blue.jpg';
              }else if(this.deetaaa[i].request_status == 'vs'){
                this.deetaaa[i].url = '../../assets/imgs2/purple.jpg';
              }else{
                this.deetaaa[i].url = '../../assets/imgs2/green.jpg';
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
        }else if(this.status==2){
          console.log("you are Vmasnood welcom :)")
        }else if(this.status == 3){
          
          console.log("you are sand "+this.status);
        }else{

        }

      });

                
      // --------------------------------
    });
    // undefined
    console.log("youloo " + this.masnod_id);
    // this.http.get(this.UserProvider.getreqest + this.UserProvider.masnod_id) 
    
  }

  openAddRequest(){
    this.navCtrl.push(MsnoodhelpPage);
  }

  editRequest(request_id,category,masnod_status,request_description,request_date){
    this.request_id = request_id;
    this.request_date = request_date;
      console.log(request_id,category,masnod_status,request_description,request_date);
      this.navCtrl.push(EditMasnoodRequestPage,{
        request_id:request_id,
        category:category,
        masnod_status:masnod_status,
        request_description:request_description,
        request_date:this.request_date
      });
    }
    
    DeletRequest(request_id){
      this.request_id = request_id;
      console.log("your request id => "+this.request_id);
      this.http.get(this.UserProvider.deletemasnodrequest + this.request_id)
      .subscribe(
        d => {
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
    });
    }
  openMasnood(){
    this.navCtrl.push(MasnoodRequestsPage);
  }
  openVerifysand(){
    this.navCtrl.push(VerifySandPage);
  }
  openAllRfordeliverdPage(){
    this.navCtrl.push(AllRfordeliverdPage);
  }
  
getAllVmasnoodRForSand(){
  this.http.get(this.UserProvider.get_all_vmasnod_requests_for_sand)
    .subscribe(
      data=>{
        this.vmasnod_requests_for_sand=data;
        console.log(this.vmasnod_requests_for_sand);

       
        
        for(let i=0;i<this.deetaaa.length;i++){
          if( this.vmasnod_requests_for_sand[i].category == 'monetary')
            this.vmasnod_requests_for_sand[i].url1 = '../../assets/imgs2/monetary.jpg' ;
          else if(this.vmasnod_requests_for_sand[i].category == 'materialistic')
            this.vmasnod_requests_for_sand[i].url1 = '../../assets/imgs2/material.jpg' ;
          else
            this.vmasnod_requests_for_sand[i].url1 = '../../assets/imgs2/other.jpg';
        }

      })
}

getAllSandRForvMasnod(){

  this.http.get(this.UserProvider.get_all_sand_requests_for_vsand)
    .subscribe(
      data=>{
        this.sand_requests_for_vsand=data;
        console.log(this.sand_requests_for_vsand);
      })
}

selectRequest(id){
  console.log("askalany");
  this.selectRforSand=id;
  this.storage.get('sand_id').then((val) => {
    this.sand_id=val;
    console.log(this.sand_id);
    this.http.post(this.UserProvider.update_sand_request,{
      "sand_id":this.sand_id,
      "request_id":this.selectRforSand,
      "pickup_method":this.pickup_method})
        .subscribe(
          data=>{
            this.request=data;
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          });
  });
}
vsandselectRequest(id){
  console.log("askalany");
  this.selectRforvMasnod=id;
  this.storage.get('sand_id').then((val) => {
    this.sand_id=val;
    console.log(this.sand_id);
    this.http.post(this.UserProvider.update_sand_request,{
      "sand_id":this.sand_id,
      "request_id":this.selectRforSand,
      "pickup_method":this.pickup_method})
        .subscribe(
          data=>{
            this.request=data;
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          });
  });
}

openSelectRequest(){
  this.navCtrl.push(SandRequestsPage);
}

openMyRequest(){
  this.navCtrl.push(MyRequestsPage);
}


  ionViewDidLoad() {
    this.msnod();
    if(this.status == 3){
      this.getAllVmasnoodRForSand();
    }else if(this.status == 4){
      this.getAllSandRForvMasnod();
    }
    // console.log(this.navParams.get('status'));
    // this.id=this.navParams.get('id');
    console.log(this.id);
    console.log('ionViewDidLoad MsnoodstatusPage');
    if (this.platform.isRTL){
      this.translate.use('ar');
      this.platform.setDir('rtl',true);
      }else{
        this.translate.use('en');
        this.platform.setDir('ltr',true);
      }
  }

}
