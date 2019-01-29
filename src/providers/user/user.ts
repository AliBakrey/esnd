import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const SERVER_URL = 'http://localhost/esnd.com/public/api';
// const SERVER_URL = 'http://esndco.com/api';

@Injectable()
export class UserProvider {

  items :any = [];
  deetaaa : any;
  requsts : any [];
  data:any;
  username:string="";
  masnod_id:any ="";
  masnod_status:any="";
  name:any="";
  // vmasnood 
  vmasnod_id:any="";
  sand_id:any="";
  
  constructor(public http: HttpClient) { 
    
   }


  public login = SERVER_URL+ '/login';
  public register =SERVER_URL+'/masnod_register';
  public sand_register =SERVER_URL+'/sand_register';
  public addrequest =SERVER_URL+'/add_masnod_request';
  public editprofilemasnood =SERVER_URL+'/update_masnod/';
  public showmsnoodprofile =SERVER_URL+'/get_masnod/';
  public updatemasnoodprofile =SERVER_URL+'/update_masnod';
  public updatemasnoodrequest =SERVER_URL+'/update_masnod_request';
  public deletemasnodrequest =SERVER_URL+'/delete_masnod_request/';
  public showvmsnoodprofile =SERVER_URL+'/get_vmasnod/';
  public updatevmasnoodprofile =SERVER_URL+'/update_vmasnod';
  public getAllMasnodReForVmasnod=SERVER_URL+'/get_all_masnod_requests_for_vmasnod';
  public getAllMasnodR =SERVER_URL+'/get_all_masnod_request/';
  public get_one_request =SERVER_URL+'/get_one_request/';
  public make_old_request =SERVER_URL+'/make_old_request';
  public undo_old_request =SERVER_URL+'/make_old_request';
  public get_all_new_masnods_to_validate =SERVER_URL+'/get_all_new_masnods_to_validate';
  public get_all_vmasnod_requests_for_sand =SERVER_URL+'/get_all_vmasnod_requests_for_sand';
  public update_sand_request =SERVER_URL+'/update_sand_request';
  public get_sand =SERVER_URL+'/get_sand/';
  public update_sand =SERVER_URL+'/update_sand';
  public get_all_sand_requests_for_vsand =SERVER_URL+'/get_all_sand_requests_for_vsand';
  public update_vsand_request =SERVER_URL+'/update_vsand_request';
  public get_vsand =SERVER_URL+'/get_vsand/';
  public update_vsand =SERVER_URL+'/update_vsand';
  public get_all_vsand_requests_for_vmasnod =SERVER_URL+'/get_all_vsand_requests_for_vmasnod';
  public update_delivered_request =SERVER_URL+'/update_delivered_request';
  public get_sand_requests =SERVER_URL+'/get_sand_requests/';
  public delete_sand_request =SERVER_URL+'/delete_sand_request';
  public approve_masnod_request =SERVER_URL+'/approve_masnod_request';
  public escalate_requests =SERVER_URL+'/escalate_requests';
  public hold_masnod_requests =SERVER_URL+'/hold_masnod_requests';
  public add_vmasnod_request =SERVER_URL+'/add_vmasnod_request';
  public make_masnod_request_old =SERVER_URL+'/make_masnod_request_old';
  



  // public getdatamsnood(){
  //   this.http.get("http://localhost/esnd.com/public/api/get_masnod_request/" + this.masnod_id)
  //   .subscribe(
  //    d => { this.deetaaa =  d;
  //      console.log(this.deetaaa);
  //      this.requsts = this.deetaaa;
  
  //     });
  
  
  // }
}
