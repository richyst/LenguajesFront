import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Estudiante} from '../interfaces/estudiante';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EstudiantesService {
  baseUrl:' http://localhost:8080/restdrools/';

  constructor(private _http: Http) { }

  getEstudiantes(){
    return this._http.get(this.baseUrl+'estudiantes/')
    .map(res => res.json());
  }

  getEstudiante(id:string){
    return this._http.get(this.baseUrl+'estudiantes/'+id)
    .map(res => res.json());
  }

  postMateria(estudiante:Estudiante){
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.post(this.baseUrl+'estudiantes/inserta', estudiante, {headers: headers})
    .map(res => res.json());
  }
}
