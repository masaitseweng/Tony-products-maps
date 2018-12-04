import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {FourtwentyProvider} from '../../providers/fourtwenty/fourtwenty';
import {HomePage} from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  


  userData ={"usernameOrEmail":"","password":""}

  logindetails:any;

  token : any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:FourtwentyProvider,private alertCtrl: AlertController) {
  
    console.log(this.userData )
    
  }

  onLogin(userData){

    console.log("hello",userData)



    this.provider.postsignin(userData).subscribe(reslogin =>{
  
      this.logindetails = reslogin

      console.log(this.logindetails.accessToken);

      this.token = this.logindetails.accessToken;
    

      if(this.logindetails.accessToken){

        localStorage.setItem('token',this.logindetails.accessToken);

        // this.storage.set('token',this.logindetails.accessToken)

        this.navCtrl.setRoot(HomePage,
          {
            token : this.token
          })

       

        // let alert = this.alertCtrl.create({
        //   title: 'You have successfully logged in',
        //   subTitle: '',
        //   buttons: [ {
        //     text: 'Login',
        //     role: 'cancel',
        //     handler: () => {
        //       // console.log('Cancel clicked');
        //       this.navCtrl.setRoot(HomePage,
        //         {
        //           token : this.token
        //         })
        //     }
        //   },
        //   {
        //     text: 'Remember me',
        //     handler: () => {
        //       console.log('remember me');
        //     }
        //   }]
        // });
        // alert.present();


        
      }
      else{
        console.log("error")
      }      

    },
    (err) => {
      console.log(err)

      let alert = this.alertCtrl.create({
        title: 'Log in failed',
        subTitle: 'There is a problem with your username or password. Please try again!! ',
        buttons: [ {
          text: 'ok',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
            // this.navCtrl.setRoot(HomePage)
    
            // localStorage.setItem('remembermetoken',this.logindetails.accessToken);
 

          }
        }]
      });
      alert.present();



      // console.log("error")
    
    });
    
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
