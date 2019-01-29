import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { TranslateService} from '@ngx-translate/core';
import { VmsnodAddRforSandPage } from '../vmsnod-add-rfor-sand/vmsnod-add-rfor-sand'; 
import { MasnoodRequestsPage } from '../masnood-requests/masnood-requests';

/**
 * Generated class for the AddMasnodRbyIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-masnod-rby-id',
  templateUrl: 'add-masnod-rby-id.html',
})
export class AddMasnodRbyIdPage {

  id:any;
  data : any;
  masnod_id : any;
  status : any;
  request_status:any;
  deetaaa : any;
  requsts : any [];
  request_id:any;
  request_date:any;
  requests_id:any[];

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


  

  showMasnodbyID(){
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
          
  }

  editR(id){
    this.navCtrl.push(VmsnodAddRforSandPage,{id:id});
  }
  ionViewDidLoad() {
    
    this.masnod_id = this.navParams.get("masnod_id");
    this.requests_id = this.navParams.get("requests_id");
    console.log(">>>>>>>>>>>>"+this.requests_id);
    this.showMasnodbyID();
    console.log('ionViewDidLoad AddMasnodRbyIdPage');
  }

}
