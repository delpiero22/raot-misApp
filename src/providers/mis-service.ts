import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions,RequestMethod } from '@angular/http';
import 'rxjs';
import { MisData } from "./../models/mis.model";
import {TimeWork} from '../models/home.model';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import config from "../../config";
/*
  Generated class for the MisService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export interface PostResponse {
  successCallback(postResult: String);
  failCallback(error: any);
}
@Injectable()

export class MisService {
  headerList = ["รับคำขอ", "อนุมัติ", "โค่น", "ปลูกแทน", "พ้นการปลูกแทน", "จ่ายเงินสงเคราะห์"];
  dataList: string[] = ["แผนการดำเนินการ", "ผลการดำเนินการ"];
  
  private misURL = 'http://www.raot.co.th/mobile_app/misData.php';
  
  
  constructor(
    public http: Http,
    public loadingCtrl: LoadingController) {
    console.log('Hello MisService Provider constructor');
  }
  //body=year
getCountry(body:Object): Observable<MisData[]> {
    let bodyString = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
    let options       = new RequestOptions({ headers: headers });
    console.log(body)

    return this.http
      .post(this.misURL,body,options)
      .map(res => res.json() as MisData[])
      .catch(err => [])
  }

// connectHttpPost(body: Object, postResponse: PostResponse) {
//     this.postResponse = postResponse;

//     this.callService(body)
//       .subscribe(
//       response => { this.postResultHandler(response) },
//       error => { this.postErrorHandler(error) }
//       );
//   }private callService(body: Object): Observable<Comment[]> {
//     let bodyString = JSON.stringify(body);
//     let headers = new Headers(this.restHeader);
//     let options = new RequestOptions({
//       headers: headers,
//       method: RequestMethod.Post
//     });

//     return this.http.post(this.restURL, bodyString, options)
//       .map((res: Response) => res.json())
//       .catch((error: any) => Observable.throw(error.json().error));
//   }

//   private postResultHandler(response: any) {
//     //handle your http response here
//     this.postResponse.successCallback(JSON.stringify(response));
//   }

//   private postErrorHandler(error: any) {
//     //handle your error here
//     this.postResponse.failCallback(error);
//   }

// callTest(year): Observable<DataTest[]> {
    

//     // let headers      = new Headers({ 'Content-Type': "application/x-www-form-urlencoded" });
//     // let options       = new RequestOptions({ headers: headers });
//     const headers = new Headers();
//     headers.append("Content-Type", "application/x-www-form-urlencoded")
//     return this.http
//       .post("http://www.raot.co.th/mobile_app/misData.php", "year=2558", { headers: headers })
//       .map((res: Response) => res => {
//         console.log(res.json());
//         return res.json()
//       })
//       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//   }


  // callTestData():  Observable<DataTest[]> {
  //   return this.http
  //     .post("http://www.raot.co.th/mobile_app/misData.php", "year=2540,zone=149")
  //     .map(res => res.json() as DataTest[])
  //     .catch(err => [])
  // }
  

  // doPost(uri: string, body: any, loadingMessage: string): Observable<any> {
  //   this.notificationService.showLoading(loadingMessage);
  //   let headers: Headers = new Headers();
  //   if(this.model.token) {
  //     headers.append('Authorization', 'Bearer ' + this.model.token);
  //   }
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post(Model.server + uri, body ? JSON.stringify(body) : null, {headers: headers})
  //     .timeout(AtpHttp.timeout, new Error('timeout exceeded'))
  //     .retryWhen(data => this.retryWhen(data, () => this.doPost(uri, body, loadingMessage)))
  //     .map(data => this.handleData(data));
  // }
}
