import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Materia} from '../interfaces/materia';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MateriasService {
  constructor(private _http: Http) { }


  getMaterias(){
    return this._http.get('http://localhost:8080/restdrools/materias/')
    .map(res => res.json());
  }
  getMateria(id:number){
    return this._http.get('http://localhost:8080/restdrools/materias/'+id)
    .map(res => res.json());
  }
  postMateria(materia:Materia){
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:8080/restdrools/materias/', materia, {headers: headers})
    .map(res => res.json());
  }
  putMateria(materia: Materia){
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.put('http://localhost:8080/restdrools/materias/'+materia.id, materia, {headers: headers})
    .map(res => res.json());
  }
}
