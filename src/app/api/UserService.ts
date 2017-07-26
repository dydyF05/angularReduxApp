import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { BASE_URL } from "./ApiConst";

@Injectable()
export class UserService {

  constructor(private _http:Http) {
  }

  get(l, m):Observable<any> {
      return this._http.get(`${BASE_URL}`)
          .map(result => result.json())
          .map(json => json.results);
  }
}
