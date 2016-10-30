import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Region page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-region',
  templateUrl: 'region.html'
})
export class RegionPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Region Page');
  }

}
