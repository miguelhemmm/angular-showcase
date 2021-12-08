import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import {  User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UIService {


  openSideNav = new Subject();
  openPokeInfo = new Subject();

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http
      .get<any>(
        'https://randomuser.me/api/'
      )
      .pipe(map(user => {
        const parsedUser = user.results[0];
        return {
          name: parsedUser?.name.first,
          lastName: parsedUser.name?.last,
          email: parsedUser?.email,
          id: parsedUser?.id.value,
          password: parsedUser?.login.password,
          picture: parsedUser?.picture.large
        }
      }));
  }

  getCoins(): Observable<any> {
    return this.http.get<any>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  }


}
