import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/asistencia-alumnos';


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

  // URL API FIREBASE
  apiURL = "https://register-app7-default-rtdb.firebaseio.com";

  //apiURL = "http://localhost:3000";

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


  // Obtener todas las asistencias
  getAsistencias(): Observable<any> {
    return this.http.get(this.apiURL + '/asistencia.json').pipe(
      retry(3)
    );
  }

  // Agregar una asistencia
  postAsistencia(id,asistencia): Observable<any> {
    return this.http.put(this.apiURL + `/asistencia/${id}.json`,asistencia,this.httpOptions).pipe(
      retry(3)
    );
  } 


  // METODOS API LOCAL

  /* getUsuarios(): Observable<any> {
    return this.http.get(this.apiURL + '/usuarios/').pipe(
      retry(3)
    );
  }

  getAsistencias(): Observable<any> {
    return this.http.get(this.apiURL + '/asistencias/').pipe(
      retry(3)
    );
  }

  postAsistencia(asistencia): Observable<any> {
    return this.http.post(this.apiURL + '/asistencias/',asistencia,this.httpOptions).pipe(
      retry(3)
    );
  } */




}
