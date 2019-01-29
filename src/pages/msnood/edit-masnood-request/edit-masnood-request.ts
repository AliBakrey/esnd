import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { HttpClient } from '@angular/common/http';
import { MsnoodstatusPage } from '../msnoodstatus/msnoodstatus';
import { Refresher } from 'ionic-angular/components/refresher/refresher';

/**
 * Generated class for the EditMasnoodRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-masnood-request',
  templateUrl: 'edit-masnood-request.html',
})
export class EditMasnoodRequestPage {

  category:String='';
  masnod_status:String='';
  request_id : any;
  request_description : any ;
  request_status:String='m';
  attachments:String='hello';
  deta:any;
  masnod_id: any= this.UserProvider.masnod_id;
  status : any;
  request_date:String='';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public UserProvider : UserProvider,
    public http: HttpClient) {
  }
  EditRequest(){
    //get date from storage
    this.http.post(this.UserProvider.updatemasnoodrequest,{
      "masnod_request_id":this.request_id,
      "category":this.category,
      "masnod_status":this.masnod_status,
      "request_description":this.request_description,
      "request_status":this.request_status,
      "attachments":this.attachments,
      "request_date":"2018-10-11"
    })
    .subscribe(
      d => {
        this.deta = d;

      
        this.navCtrl.push(MsnoodstatusPage);
        // this.navCtrl.setRoot(this.navCtrl.getActive().component);
        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-(+1)));
      
     }
   );
  }
  selectCategory (event:any){
    this.category = event.target.value;
  }
  selectStatus (event:any){
    this.masnod_status = event.target.value;
  }
  


  ionViewDidLoad() {
    this.category = this.navParams.get("category");
    this.request_date = this.navParams.get("request_date");
    console.log(">>>>>>>>>>>>>"+this.request_date);
    this.masnod_status = this.navParams.get("masnod_status");
    this.request_id =this.navParams.get("request_id");
    this.request_description = this.navParams.get("request_description");
    console.log("your re =>"+this.request_id);
    console.log('ionViewDidLoad EditMsnoodRequstPage');
  }

}
