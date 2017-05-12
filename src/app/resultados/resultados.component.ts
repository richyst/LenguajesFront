import { Component, OnInit } from '@angular/core';
import {EstudiantesService} from '../services/estudiantes.service';
import {MateriasService} from '../services/materias.service';
import {Estudiante} from '../interfaces/estudiante';
import {Materia} from '../interfaces/materia';

@Component({
  selector: 'len-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  providers:[EstudiantesService,MateriasService]
})
export class ResultadosComponent implements OnInit {
  estudiantes : Array <Estudiante>;
  selected:Estudiante;
  materias = new Array();
  materiasDirt: Array <Materia>;
  relaciones=[];
  constructor(private _eService: EstudiantesService,private _mService: MateriasService) { }

  ngOnInit() {
    this.getEstudiantes();
  }

  getEstudiantes():void{
    this._eService.getEstudiantes()
      .subscribe(
        data => {
          console.log(data);
          this.estudiantes=data;
          this.getMaterias();
        },
        error => console.log(error)
      );
  }

  getMaterias():void{
    this._mService.getMaterias()
      .subscribe(
        data => {
          console.log(data);
          this.materiasDirt=data;
        },
        error => console.log(error)
      );
  }

  selectEstudiante(es:Estudiante):void{
    this.selected=es;
    this.getEstudMat(this.selected.id);
  }

  getEstudMat(id:number):void{
    this._eService.getEstudMat(id)
      .subscribe(
        data => {
          console.log(data);
          this.relaciones=data;
          this.limpiarMaterias();
        },
        error => console.log(error)
      );
  }

  limpiarMaterias():void{
    for(var i = 0; i<this.relaciones.length;i++){
      for(var k = 0; k<this.materiasDirt.length;k++){
        if(this.relaciones[i].id_materia==this.materiasDirt[k].id){
          this.materias.push(this.materiasDirt[k]);
        }
      }
    }
    console.log(this.materias);
  }
}
