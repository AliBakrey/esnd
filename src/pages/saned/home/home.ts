import { Component,ViewChild } from '@angular/core';
import { NavController, App, AlertController, RadioButton, Platform } from 'ionic-angular';
import { ActionSheetController , Slides} from 'ionic-angular';
// for translate 
import { TranslateService} from '@ngx-translate/core';
//for animation 
import { AnimationBuilder, AnimationMode} from 'css-animator/builder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //for fragment with slides
  @ViewChild('slider') slider:Slides;
  page = "0";

  //for animation
  trnslt :string;
  //end animation
  segment:string="seg1";

  testRadioOpen;
  testRadioResult;
  testCheckboxOpen;
  testCheckboxResult;

  constructor(
    public navCtrl: NavController, 
    public app:App, 
    public actionSheetCtrl: ActionSheetController ,
    public alertCtrl: AlertController,
    public platform: Platform,
    public translate : TranslateService) {

  if (this.platform.isRTL){
    this.translate.use('ar');
    this.platform.setDir('rtl',true);
    }else{
      this.translate.use('en');
      this.platform.setDir('ltr',true);
    }

  }// end of constructor

  // //for fragment with slides
  // selectedTab(index){
  //   this.slider.slideTo(index);
  // }
  //for fragment with slides
  // moveButton($event){
  //   this.page = $event._snapIndex.toString();
  // }
  // Check Box Alert
  showCheckBox(){
    let alert = this.alertCtrl.create();
    alert.setTitle('lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'blue',
      value: 'blue',
      checked :true
    });

    alert.addInput({
      type: 'radio',
      label: 'red',
      value: 'red',
      checked: false
    });

    alert.addButton('cancel');
    alert.addButton({
        text:'ok',
        handler: data => {
          this.testCheckboxOpen = false;
          this.testCheckboxResult = data ;
          
          console.log(this.testCheckboxResult);
        }
    });

    alert.present();

  }
  // Radio Alert 
  showRadio(){
    let alert = this.alertCtrl.create();
    alert.setTitle('lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'blue',
      value: 'blue',
      checked :true
    });

    alert.addInput({
      type: 'radio',
      label: 'red',
      value: 'red',
      checked :false
    });

    alert.addInput({
      type: 'radio',
      label: 'green',
      value: 'green',
      checked :false
    });

    alert.addButton('cancel');
    alert.addButton({
        text:'ok',
        handler: data => {
          this.testRadioOpen = false ;
          this.testRadioResult = data ;
          
          console.log(this.testRadioResult);
        }
    });

    alert.present();

  }
  // prompt Alert
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            this.showAlertLogin();
          }
        }
      ]
    });
    alert.present();
  }
  // presentConfirm alert
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  
  // Basic Alert function
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'one clicked',
      subTitle: 'لقد اخترت رقم واحد',
      buttons:['حسناً']
    });
    alert.present();
  }
  // Basic Alert for login
  showAlertLogin(){
    let alert = this.alertCtrl.create({
      title: 'one clicked',
      subTitle: 'لقد اخترت رقم واحد',
      buttons:['حسناً']
    });
    alert.present();
  }
// Action Sheet function
  presentActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title:'select your choice ',
      buttons:[
        {
          text:'one',
          role: 'one',
          handler: () => {
            // Basic Alert function 
           this.showAlert();
            console.log('one Clicked');
           // alert('one clicked');
          }
        },{
          text:'tow',
          role: 'tow',
          handler: () => {
            console.log('tow Clicked');
            this.presentConfirm();
          }
        },{
          text:'three',
          role: 'three',
          handler: () => {
            console.log('three Clicked');
            this.presentPrompt();
          }
        },{
          text:'four',
          role: 'four',
          handler: () => {
            console.log('four Clicked');
            this.showRadio();
          }
        },{
          text:'five',
          role: 'five',
          handler: () => {
            console.log('five Clicked');
            this.showCheckBox();
          }
        }
      ]
    });
    actionSheet.present();
  }

  
}
