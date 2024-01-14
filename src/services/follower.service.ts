import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  private _url: string = "assets/data/follower.json";

  constructor(
    private http : HttpClient,
  ) { }

  getFollowersData():Observable<any> {
    return this.http.get(this._url);
  }
}
