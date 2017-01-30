import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Client} from "../clients/client";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {
  private clientUrl = '../app/data/optimizerData.json';

  private headers = new Headers({ 'Accept': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  private client : Client;

  constructor(private http:Http) {}

  getData() : Observable<any>{
    return this.http.get(this.clientUrl, this.options)
      .map(response => response.json());
  }
}
