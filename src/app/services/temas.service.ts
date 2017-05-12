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
}
