import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Estudiante} from '../interfaces/estudiante';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EstudiantesService {

  constructor(private _http: Http) { }

  getEstudiantes(){
    return this._http.get('http://localhost:8080/restdrools/estudiantes/')
    .map(res => res.json());
  }

  getEstudiante(id:number){
    return this._http.get('http://localhost:8080/restdrools/estudiantes/'+id)
    .map(res => res.json());
  }

  postEstudiante(estudiante: Estudiante){
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:8080/restdrools/estudiantes/inserta', estudiante, {headers: headers})
    .map(res => res.json());
  }

  getEstudMat(id:number){
    return this._http.get('http://localhost:8080/restdrools/estud_mat/'+id)
    .map(res => res.json());
  }

  postMateria(estudiante:Estudiante){
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:8080/restdrools/estudiantes/inserta', estudiante, {headers: headers})
    .map(res => res.json());
  }
}
