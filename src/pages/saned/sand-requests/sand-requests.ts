import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UserProvider } from '../../../providers/user/user';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SandRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sand-requests',
  templateUrl: 'sand-requests.html',
})
export class SandRequestsPage {


  vmasnod_requests_for_sand:any;
  selectRforSand:any;
  sand_id:any;
  pickup_method: any='himself';
  request:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public UserProvider:UserProvider,
    private storage: Storage
  ) {
  }


  public getRequestsForSand(){
    this.http.get(this.UserProvider.get_all_vmasnod_requests_for_sand)
    .subscribe(
      data=>{
        this.vmasnod_requests_for_sand=data;
        console.log(this.vmasnod_requests_for_sand);

        for(let i=0;i<this.vmasnod_requests_for_sand.length;i++){
          if( this.vmasnod_requests_for_sand[i].request_status == 'm'){
            this.vmasnod_requests_for_sand[i].url = '../../assets/imgs2/yellow.jpg' ;
          }else if(this.vmasnod_requests_for_sand[i].request_status == 'vm'){
            this.vmasnod_requests_for_sand[i].url = '../../assets/imgs2/gray.jpg' ;
          }else if(this.vmasnod_requests_for_sand[i].request_status == 's'){
            this.vmasnod_requests_for_sand[i].url = '../../assets/imgs2/blue.jpg';
          }else if(this.vmasnod_requests_for_sand[i].request_status == 'vs'){
            this.vmasnod_requests_for_sand[i].url = '../../assets/imgs2/purple.jpg';
          }else{
            this.vmasnod_requests_for_sand[i].url = '../../assets/imgs2/green.jpg';
          }
        }
        
        for(let i=0;i<this.vmasnod_requests_for_sand.length;i++){

          if( this.vmasnod_requests_for_sand[i].category == 'monetary')
            this.vmasnod_requests_for_sand[i].url1 = '../../assets/imgs2/monetary.jpg' ;
          else if(this.vmasnod_requests_for_sand[i].category == 'materialistic')
            this.vmasnod_requests_for_sand[i].url1 = '../../assets/imgs2/material.jpg' ;
          else
            this.vmasnod_requests_for_sand[i].url1 = '../../assets/imgs2/other.jpg';
        }

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

  ionViewDidLoad() {
    this.getRequestsForSand();
    console.log('ionViewDidLoad SandRequestsPage');
  }

}
