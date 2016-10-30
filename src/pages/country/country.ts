import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MisService} from '../../providers/mis-service';
/*
  Generated class for the Country page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
  providers:[MisService]
})
export class CountryPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Country Page');
  }

}
