import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativepagetransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor:  -1,
      iosdelay: 50
    }
    this.nativepagetransitions.slide(options);
    this.navCtrl.setRoot('secondPage');
  }

  flipPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    }
    this.nativepagetransitions.flip(options);
    this.navCtrl.setRoot('secondPage');
  }

  fadePage() {
    this.nativepagetransitions.fade(null);
    this.navCtrl.setRoot('secondPage');
  }

  curlPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    }
    this.nativepagetransitions.curl(options);
    this.navCtrl.setRoot('secondPage')
  }
}
