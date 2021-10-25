import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiAsistenciaService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  // URL API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(this.apiURL + '/usuarios/').pipe(
      retry(3)
    );
  }

  /* getUsuarios2(){
    return this.http.get<Usuarios>("http://localhost:3000/usuarios");
  } */



}
