import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {DataTest} from "./../models/data-test"
import {Observable} from "rxjs";

/*
  Generated class for the MisService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MisService {

  constructor(public http: Http) {
    console.log('Hello MisService Provider');
  }

  callTestData():  Observable<DataTest[]> {
    return this.http
      .post("http://www.raot.co.th/mobile_app/misData.php", "year=2540,zone=okok")
      .map(res => res.json() as DataTest[])
      .catch(err => [])
  }
}
