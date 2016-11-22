import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController,LoadingController, Loading } from 'ionic-angular';
import { MisService } from '../../providers/mis-service';
import { MisData } from "./../../models/mis.model";
// import {DATAs} from './mocks'
import { TimeWork } from '../../models/home.model';
/*
  Generated class for the Country page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
  providers: [MisService]
})

export class CountryPage {
  private listHeader: string[];
  private listData: string[];
  private datas: MisData[] = [];
  private loading: Loading;

  constructor(
    private navCtrl: NavController,
    private misService: MisService, 
    private loadingCtrl: LoadingController) {
    this.listHeader = this.misService.headerList;
    this.listData = this.misService.dataList;

    this.loading = this.loadingCtrl.create({
      content: "Loading...",
      dismissOnPageChange: true
    })

    this.loading.present();
    this.misService
        .getCountry("year=2558")
        .subscribe(
          datas => {
            this.loading.dismiss();
            this.datas = datas
            console.log(datas);
          },
          (err) => {
            this.loading.dismiss();
            console.log(err);
          },
          () => {

          }
        )
  }

  // getData(){
  //   this.misService.getCountry();
  // }


  // @Input() comment: Comment;
  // @Input() listId: string;
  // @Input() editId: string;


}




