import { Component, OnInit, Input } from '@angular/core';
import {Tema} from '../interfaces/tema';
import {TemasService} from '../services/temas.service';
import {Materia} from '../interfaces/materia';

@Component({
  selector: 'len-formulario-tema',
  templateUrl: './formulario-tema.component.html',
  styleUrls: ['./formulario-tema.component.css'],
  providers:[TemasService]
})
export class FormularioTemaComponent implements OnInit {
  @Input() materia:Materia;
  tema:Tema=<Tema>{};
  submitter:boolean=false;
  crearTarea:boolean=false;
  constructor(private _tService: TemasService,) { }

  ngOnInit() {
  }
  postTema():void{
    this.tema.idMateria=this.materia.id;
    this._tService.postTema(this.tema)
      .subscribe(
        data => {
          this.tema=data;
          console.log(JSON.stringify(data));
        },
        error => console.log(error)
      );
  }

}
