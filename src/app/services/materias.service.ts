import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Materia} from '../interfaces/materia';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MateriasService {
  baseUrl:' http://localhost:8080/restdrools/';
  constructor(private _http: Http) { }


  getMaterias(){
    return this._http.get(this.baseUrl+'materias/')
    .map(res => res.json());
  }
  getMateria(id:string){
    return this._http.get(this.baseUrl+'materias/'+id)
    .map(res => res.json());
  }
  postMateria(materia:Materia){
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.post(this.baseUrl+'materias/inserta', materia, {headers: headers})
    .map(res => res.json());
  }
}
