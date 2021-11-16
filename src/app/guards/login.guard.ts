import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {


  constructor( private storage: StorageService, private router: Router ){}

  canLoad() {

    const isLogin = !!(+this.storage.getLogin())

    if (isLogin) {
      return true
    }else{
      this.router.navigateByUrl('/');
      return false
    }
  }
}
