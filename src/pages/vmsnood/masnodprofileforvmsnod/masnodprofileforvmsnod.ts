import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { UserProvider } from '../../../providers/user/user';
import { TranslateService} from '@ngx-translate/core';

/**
 * Generated class for the MasnodprofileforvmsnodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masnodprofileforvmsnod',
  templateUrl: 'masnodprofileforvmsnod.html',
})
export class MasnodprofileforvmsnodPage {

  masnodId:any;
  masnodprofile:any;

  name:any;
  email:any;
  governorate:any;
  address:any;
  telephone:any;
  social_id:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public translate : TranslateService,
    public http: HttpClient,
    public UserProvider: UserProvider
  ) {
  }

  getmasnodprofile(){
    this.http.get(this.UserProvider.showmsnoodprofile + this.masnodId)  
    .subscribe(
      data => {
        this.masnodprofile = data;
  //  login as msnood
  console.log(this.masnodprofile);

        this.name=this.masnodprofile.name;
        this.email=this.masnodprofile.email;
        this.governorate=this.masnodprofile.governorate;
        this.address=this.masnodprofile.address;
        this.telephone=this.masnodprofile.telephone;
        this.social_id=this.masnodprofile.social_id;
        console.log(this.masnodprofile);
  });
  }
  ionViewDidLoad() {
    this.masnodId =this.navParams.get("masnodId");
    this.getmasnodprofile();
    console.log('ionViewDidLoad MasnodprofileforvmsnodPage');
  }

}
