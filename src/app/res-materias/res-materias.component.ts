import { Component, OnInit, Input } from '@angular/core';
import {TemasService} from '../services/temas.service';
import {Materia} from '../interfaces/materia';
import {Estudiante} from '../interfaces/estudiante';
import {Tema} from '../interfaces/tema';
@Component({
  selector: 'len-res-materias',
  templateUrl: './res-materias.component.html',
  styleUrls: ['./res-materias.component.css'],
  providers:[ TemasService]
})
export class ResMateriasComponent implements OnInit {
  @Input() materia:Materia;
  @Input() estudiante:Estudiante;
  @Input() promedio:number;
  @Input() porcentaje:number;
  temasDirt:Array<Tema>;
  temas:Array<Tema>;
  constructor(private _tService: TemasService) { }

  ngOnInit() {
    this.getTemas();
  }
  getTemas(){
    this._tService.getTemas()
      .subscribe(
        data => {
          this.temasDirt=data;
          this.limpiarTemas();
        },
        error => console.log(error)
      );
  }

  limpiarTemas():void{
    this.temas= Array<Tema>();
    for(var i =0; i<this.temasDirt.length;i++){
      if(this.temasDirt[i].idMateria===this.materia.id){
        this.temas.push(this.temasDirt[i]);
      }
    }
  }
}
