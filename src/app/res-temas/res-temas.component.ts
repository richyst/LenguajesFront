import { Component, OnInit, Input } from '@angular/core';
import {TemasService} from '../services/temas.service';
import {TareaService} from '../services/tarea.service';
import {Tema} from '../interfaces/tema';
import {Tarea} from '../interfaces/tarea';
import {Materia} from '../interfaces/materia';
import {Estudiante} from '../interfaces/estudiante';
@Component({
  selector: 'len-res-temas',
  templateUrl: './res-temas.component.html',
  styleUrls: ['./res-temas.component.css'],
  providers:[TemasService, TareaService]
})
export class ResTemasComponent implements OnInit {
  @Input() estudiante:Estudiante;
  @Input() tema:Tema;
  @Input() materia:Materia;
  rels= new Array();
  tareasDirt:Array<Tarea>;
  tareas:Array<Tarea>;
  tarEst:Array<any>;
  constructor(private _tService: TemasService, private _tarService: TareaService) { }

  ngOnInit() {
    this.getRels();
  }
  getRels():void{
    this._tarService.getRelacionesEst(this.estudiante.id)
      .subscribe(
        data => {
          this.rels=data;
          this._tarService.getTareas()
            .subscribe(
              data1 => {
                this.tareasDirt=data1;
                this.limpiarTareas();
              },
              error => console.log(error)
            );
        },
        error => console.log(error)
      );
  }

  limpiarTareas(){
    this.tarEst=[];
    this.tareas=[];
    for(var i = 0; i<this.rels.length;i++){
      for(var j = 0; j<this.tareasDirt.length;j++){
        if(this.rels[i].idTarea==this.tareasDirt[j].id){
          if(this.rels[i].idTema==this.tema.id){
            this.tarEst.push(this.rels[i]);
            this.tareas.push(this.tareasDirt[j]);
          }
        }
      }
    }
    console.log(this.tarEst);
    console.log(this.tareas)
  }
  actualizar(obj):void{
  console.log(obj);
    this._tarService.putTareaEstud(obj)
      .subscribe(
        data => {
        },
        error => console.log(error)
      );
  }
}
