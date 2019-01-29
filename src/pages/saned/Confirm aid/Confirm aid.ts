import { Component } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-Confirm aid',
  templateUrl: 'Confirm aid.html'
})
export class ConfirmAid {
  segment:string="seg1";
  Range1: number = 1;
  Range2: number = 1;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

    this.Range1 = 50;
    this.Range2 = 50;
  }
  
}
