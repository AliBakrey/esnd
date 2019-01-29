import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UserProvider } from '../../../providers/user/user';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AllRfordeliverdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-rfordeliverd',
  templateUrl: 'all-rfordeliverd.html',
})
export class AllRfordeliverdPage {
  allrequests:any;
  request_id:any;
  vmasnod_id:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public UserProvider:UserProvider,
    private storage: Storage
  ) {
  }

  getALLRequestsForDeliverd(){
    this.http.get(this.UserProvider.get_all_vsand_requests_for_vmasnod)
                .subscribe(
                  data =>{
                    this.allrequests = data ;
                })
  };

  deliverd(id){
    this.storage.get('vmasnod_id').then((val)=>{
      this.vmasnod_id = val;
    
    this.http.post(this.UserProvider.update_delivered_request,{
      "vmasnod_id": this.vmasnod_id,
      "request_id":id})
        .subscribe(
          data =>{
            console.log(data);
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          });
    
    
  });
  }

  ionViewDidLoad() {
    this.getALLRequestsForDeliverd();
    console.log('ionViewDidLoad AllRfordeliverdPage');
  }

}
