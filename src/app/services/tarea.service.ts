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
    if(tarea.dificultad>10){
      tarea.dificultad=10;
    }
    if(tarea.dificultad<1){
      tarea.dificultad=1;
    }
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:8080/restdrools/tareas/', tarea, {headers: headers})
    .map(res => res.json());
  }
  putTarea(tarea: Tarea){
    if(tarea.dificultad>10){
      tarea.dificultad=10;
    }
    if(tarea.dificultad<1){
      tarea.dificultad=1;
    }
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.put('http://localhost:8080/restdrools/tareas/'+tarea.id, tarea, {headers: headers})
    .map(res => res.json());
  }
  putTareaEstud(tarea: any){
    if(tarea.calificacion>100){
      tarea.dificultad=100;
    }
    if(tarea.dificultad<0){
      tarea.dificultad=0;
    }
    tarea.completed=true;
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.put('http://localhost:8080/restdrools/tarea_estud/'+tarea.idEstudiante+'/'+tarea.idTarea, tarea, {headers: headers})
    .map(res => res.json());
  }
  getRelacionesEst(id:number){
    return this._http.get('http://localhost:8080/restdrools/tarea_estud/'+id)
    .map(res => res.json());
  }
}
