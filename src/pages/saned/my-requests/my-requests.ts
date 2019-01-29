import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UserProvider } from '../../../providers/user/user';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MyRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-requests',
  templateUrl: 'my-requests.html',
})
export class MyRequestsPage {

  sand_id: any;
  requests : any;
  request_status:any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public UserProvider:UserProvider,
    private storage: Storage,
  ) {

  }

  getSandRequests(){
    this.storage.get('sand_id').then((val) =>{
      this.sand_id = val;
        this.http.get(this.UserProvider.get_sand_requests+this.sand_id)
          .subscribe(
            data =>{
              this.requests = data ;
              console.log(data);
              for(let i=0;i<this.requests.length;i++){
                if( this.requests[i].request_status == 'm'){
                  this.requests[i].url = '../../assets/imgs2/yellow.jpg' ;
                  this.request_status = this.requests[i].request_status;
                }else if(this.requests[i].request_status == 'vm'){
                  this.requests[i].url = '../../assets/imgs2/gray.jpg' ;
                  this.request_status = this.requests[i].request_status;
                }else if(this.requests[i].request_status == 's'){
                  this.requests[i].url = '../../assets/imgs2/blue.jpg';
                  this.request_status = this.requests[i].request_status;
                }else if(this.requests[i].request_status == 'vs'){
                  this.requests[i].url = '../../assets/imgs2/purple.jpg';
                  this.request_status = this.requests[i].request_status;
                }else{
                  this.requests[i].url = '../../assets/imgs2/green.jpg';
                  this.request_status = this.requests[i].request_status;
                }
              }
              
              for(let i=0;i<this.requests.length;i++){
                if( this.requests[i].category == 'monetary')
                  this.requests[i].url1 = '../../assets/imgs2/monetary.jpg' ;
                else if(this.requests[i].category == 'materialistic')
                  this.requests[i].url1 = '../../assets/imgs2/material.jpg' ;
                else
                  this.requests[i].url1 = '../../assets/imgs2/other.jpg';
              }
          });
    });
  }

  delete(id){
    this.http.post(this.UserProvider.delete_sand_request,{
      "request_id":id
    })
      .subscribe(
        data =>{
          console.log(data);
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
      });
  }

  ionViewDidLoad() {
    this.getSandRequests();
    console.log('ionViewDidLoad MyRequestsPage');
  }

}
