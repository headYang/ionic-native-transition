import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, private nativepagetransition: NativePageTransitions, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  goBack() {
    if(this.navCtrl.canGoBack()) {
      let options: NativeTransitionOptions = {
        direction: 'down',
        duration: 500,
        slowdownfactor:  -1,
        slidePixels: 20
      }
      this.nativepagetransition.slide(options);  
      this.navCtrl.pop();
    } else {
      let options: NativeTransitionOptions = {
        duration: 800
      }
      this.nativepagetransition.fade(options);
      this.navCtrl.setRoot('HomePage');
    }
  }

}
