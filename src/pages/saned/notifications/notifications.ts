import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class notifications {

  segment:string = "seg1";

  constructor(public navCtrl: NavController) {

  }

}
