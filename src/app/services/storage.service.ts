import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  constructor() { }

  /*uSUARIO*/

  setUsuario(usuario){
    localStorage.setItem('usuario',usuario);
  }

  getUsuario(){
    return localStorage.getItem('usuario');
  }

  deleteUsuario(){
    localStorage.removeItem('usuario');
  }


  /*LOGIN*/

  setLogin(){
    localStorage.setItem('isLogin','1');  
  }

  getLogin(){
    return localStorage.getItem('isLogin')
  }

  deleteLogin(){
    localStorage.removeItem('isLogin');

  }

}
