import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/asistencia-alumnos';


@Injectable({
  providedIn: 'root'
})
export class ApiAsistenciaService {



  // URL API FIREBASE
  apiURL = "https://register-app7-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(this.apiURL + '/usuarios.json').pipe(
      retry(3)
    );
  }

  /* getUsuarios(){
    return this.http.get<Usuario[]>(this.apiURL);
  } */



}
