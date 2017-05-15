import { Component, OnChanges, Input } from '@angular/core';
import {Tema} from '../interfaces/tema';
import {TareaService} from '../services/tarea.service';
import {TemasService} from '../services/temas.service';
import {Tarea} from '../interfaces/tarea';
@Component({
  selector: 'len-editar-tema',
  templateUrl: './editar-tema.component.html',
  styleUrls: ['./editar-tema.component.css'],
  providers:[TareaService,TemasService]
})
export class EditarTemaComponent implements OnChanges {
  @Input() tema:Tema;
  tareasDirt : Array<Tarea>;
  tareas:Array<Tarea>;
  selectedTarea:Tarea;
  constructor(private _temService: TemasService,private _tarService: TareaService) { }

  ngOnChanges(changes) {
    console.log(changes);
    console.log(this.tema);
    this.getTareas();
  }

  getTareas():void{
    this._tarService.getTareas()
      .subscribe(
        data => {
          console.log(data);
          this.tareasDirt=data;
          this.limpiarTareas();
        },
        error => console.log(error)
      );
  }

  limpiarTareas(){
    this.tareas=[];
    for(var i = 0; i<this.tareasDirt.length;i++){
      if(this.tema.id==this.tareasDirt[i].idTema){
        this.tareas.push(this.tareasDirt[i]);
      }
    }
  }
  putTema(){
    this._temService.putTema(this.tema)
      .subscribe(
        data => {
          console.log(data);
          this.tema=data;
        },
        error => console.log(error)
      );
  }
  putTarea(){
    this._tarService.putTarea(this.selectedTarea)
      .subscribe(
        data => {
          console.log(data);
          this.selectedTarea=data;
        },
        error => console.log(error)
      );
  }
}
