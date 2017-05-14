import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Tarea} from '../interfaces/tarea';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TareaService {

  constructor(private _http: Http) { }

  getTareas(){
    return this._http.get('http://localhost:8080/restdrools/tareas/')
    .map(res => res.json());
  }

  getTarea(id:number){
    return this._http.get('http://localhost:8080/restdrools/tareas/'+id)
    .map(res => res.json());
  }

  postTarea(tarea: Tarea){
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:8080/restdrools/tareas/', tarea, {headers: headers})
    .map(res => res.json());
  }
}
