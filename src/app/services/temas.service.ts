import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Tema} from '../interfaces/tema';

@Injectable()
export class TemasService {

  constructor(private _http: Http) { }

  getTemas(){
    return this._http.get('http://localhost:8080/restdrools/temas/')
    .map(res => res.json());
  }
  getTema(id:number){
    return this._http.get('http://localhost:8080/restdrools/temas/'+id)
    .map(res => res.json());
  }
  postTema(tema: Tema){
    if(tema.nivel>10){
      tema.nivel=10;
    }
    if(tema.nivel<1){
      tema.nivel=1;
    }
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:8080/restdrools/temas/', tema, {headers: headers})
    .map(res => res.json());
  }
  putTema(tema: Tema){
    if(tema.nivel>10){
      tema.nivel=10;
    }
    if(tema.nivel<1){
      tema.nivel=1;
    }
    var headers = new Headers ();
    headers.append('Content-Type','application/json');
    return this._http.put('http://localhost:8080/restdrools/temas/'+tema.id, tema, {headers: headers})
    .map(res => res.json());
  }
}
