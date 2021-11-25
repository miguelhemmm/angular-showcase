import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {


  openSideNav = new Subject();
  openPokeInfo = new Subject();
  constructor() { }




}
