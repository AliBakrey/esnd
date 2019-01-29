import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UserProvider } from '../../../providers/user/user';

import { MasnodprofileforvmsnodPage } from '../../vmsnood/masnodprofileforvmsnod/masnodprofileforvmsnod'

/**
 * Generated class for the VerifyMasnoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify-masnood',
  templateUrl: 'verify-masnood.html',
})
export class VerifyMasnoodPage {

  allMasnoods:any;
  masnodId:any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public UserProvider:UserProvider,
  ) {
  }

  openmasnoodDetails(id){
    this.masnodId = id;
    this.navCtrl.push(MasnodprofileforvmsnodPage,{
      masnodId:this.masnodId
    });
  }

  getAllMasnood(){
    this.http.get(this.UserProvider.get_all_new_masnods_to_validate)
                .subscribe(
                  data=>{
                    this.allMasnoods = data;
                })
  }

  ionViewDidLoad() {
    this.getAllMasnood();
    console.log('ionViewDidLoad VerifyMasnoodPage');
  }

}
