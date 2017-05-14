import { Component, OnInit, Input } from '@angular/core';
import {Tema} from '../interfaces/tema';
import {Tarea} from '../interfaces/tarea';
import {TareaService} from '../services/tarea.service';

@Component({
  selector: 'len-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css'],
  providers:[TareaService]
})
export class FormularioTareaComponent implements OnInit {

  @Input() tema:Tema;
  tarea:Tarea=<Tarea>{};
  constructor(private _tService: TareaService) { }

  ngOnInit() {
  }
  postTarea():void{
    this.tarea.idTema=this.tema.id;
    this._tService.postTarea(this.tarea)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
        },
        error => console.log(error)
      );
  }

}
