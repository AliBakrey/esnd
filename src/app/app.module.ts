import { MyAccountPage } from './../pages/saned/my-account/my-account';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Camera  } from '@ionic-native/camera';
import { ReactiveFormsModule} from '@angular/forms';

import { ConfirmAid } from '../pages/saned/Confirm aid/Confirm aid';
import { notifications } from '../pages/saned/notifications/notifications';
import { HomePage } from '../pages/saned/home/home';
import { TabsPage } from '../pages/saned/tabs/tabs';
import { SignupPage } from '../pages/saned/signup/signup'
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { MsnoodhelpPage } from '../pages/msnood/msnoodhelp/msnoodhelp';
import { MsnoodprofilePage } from '../pages/msnood/msnoodprofile/msnoodprofile';
import { MsnoodstatusPage } from '../pages/msnood/msnoodstatus/msnoodstatus';
import { SignupmasnoodPage } from '../pages/msnood/signupmasnood/signupmasnood';
import { AboutappPage } from '../pages/msnood/aboutapp/aboutapp';
import { SettingsPage } from '../pages/msnood/settings/settings';
import { MasnoodRequestsPage } from '../pages/vmsnood/masnood-requests/masnood-requests';
import { EditProfilePage } from '../pages/msnood/edit-profile/edit-profile';
import { EditMasnoodRequestPage } from '../pages/msnood/edit-masnood-request/edit-masnood-request';
import { AddMasnodRbyIdPage } from '../pages/vmsnood/add-masnod-rby-id/add-masnod-rby-id';
import { VmsnodAddRforSandPage } from '../pages/vmsnood/vmsnod-add-rfor-sand/vmsnod-add-rfor-sand';
import { VerifyMasnoodPage } from '../pages/vmsnood/verify-masnood/verify-masnood';
import { MasnodprofileforvmsnodPage } from '../pages/vmsnood/masnodprofileforvmsnod/masnodprofileforvmsnod';
import { SelectRtoDeliverPage } from '../pages/vsand/select-rto-deliver/select-rto-deliver';
import { AllRfordeliverdPage } from '../pages/vmsnood/all-rfordeliverd/all-rfordeliverd';
import { MyRequestsPage } from '../pages/saned/my-requests/my-requests';
import { VerifySandPage } from '../pages/vsand/verify-sand/verify-sand';



import { Toast } from '@ionic-native/toast';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AutoHideDirective } from '../directives/auto-hide/auto-hide';

// for translate 
//step 1  
import { HttpClientModule , HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { UserProvider } from '../providers/user/user';
import { SandRequestsPage } from '../pages/saned/sand-requests/sand-requests';

// for translate
// step 2
export function creatTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/' , '.json');
}
@NgModule({
  declarations: [
    MyApp,
    ConfirmAid,
    notifications,
    HomePage,
    TabsPage,
    WelcomePage,
    MyAccountPage,
    SignupPage,
    LoginPage,
    MsnoodhelpPage,
    MsnoodprofilePage,
    MsnoodstatusPage,
    SignupmasnoodPage,
    AboutappPage,
    SettingsPage,
    MasnoodRequestsPage,
    EditProfilePage,
    EditMasnoodRequestPage,
    AddMasnodRbyIdPage,
    AutoHideDirective,
    VmsnodAddRforSandPage,
    VerifyMasnoodPage,
    MasnodprofileforvmsnodPage,
    SelectRtoDeliverPage,
    AllRfordeliverdPage,
    MyRequestsPage,
    SandRequestsPage,
    VerifySandPage
  ],
  imports: [
    ReactiveFormsModule,
    //for translate 
    //step 3
    HttpClientModule,
    IonicStorageModule.forRoot(),
    // for translate module 
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (creatTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConfirmAid,
    notifications,
    HomePage,
    TabsPage,
    WelcomePage,
    MyAccountPage,
    SignupPage,
    LoginPage,
    MsnoodhelpPage,
    MsnoodprofilePage,
    MsnoodstatusPage,
    SignupmasnoodPage,
    AboutappPage,
    SettingsPage,
    MasnoodRequestsPage,
    EditProfilePage,
    EditMasnoodRequestPage,
    AddMasnodRbyIdPage,
    VmsnodAddRforSandPage,
    VerifyMasnoodPage,
    MasnodprofileforvmsnodPage,
    SelectRtoDeliverPage,
    AllRfordeliverdPage,
    MyRequestsPage,
    SandRequestsPage,
    VerifySandPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    NativePageTransitions,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
  ]
})
export class AppModule {}
