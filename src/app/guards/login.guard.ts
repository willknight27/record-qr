import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataLocalService } from '../services/data-local.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {


  constructor( private dataLocal: DataLocalService, private router: Router ){}

  canLoad() {

    const isLogin = !!(+localStorage.getItem('isLogin'))

    if (isLogin) {
      return true
    }else{
      this.router.navigateByUrl('/');
      return false
    }
  }
}
