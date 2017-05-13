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
  editVis:boolean=false;
  tablaVis:boolean=true;
  matVis:boolean=false;
  constructor(private _eService: EstudiantesService,private _mService: MateriasService) { }

  ngOnInit() {
    this.getEstudiantes();
  }

  getEstudiantes():void{
    this._eService.getEstudiantes()
      .subscribe(
        data => {
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
          this.materiasDirt=data;
        },
        error => console.log(error)
      );
  }

  selectEstudiante(es:Estudiante):void{
    this.selected=es;
    this.selected.promedioGlobal=Number(es.promedioGlobal.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0])
    this.getEstudMat(this.selected.id);
  }

  getEstudMat(id:number):void{
    this._eService.getEstudMat(id)
      .subscribe(
        data => {
          this.relaciones=data;
          this.limpiarMaterias();
        },
        error => console.log(error)
      );
  }

  editar(n:number):void{
    if(n==1){
      this.editVis=true;
      this.tablaVis=false;
      this.matVis=false;
    }
    if(n==2){
      this.editVis=false;
      this.tablaVis=true;
      this.matVis=false;
    }
    if(n==3){
      this.editVis=false;
      this.tablaVis=false;
      this.matVis=true;
    }
  }

  limpiarMaterias():void{
    this.materias=new Array();
    for(var i = 0; i<this.relaciones.length;i++){
      for(var k = 0; k<this.materiasDirt.length;k++){
        if(this.relaciones[i].idMateria==this.materiasDirt[k].id){
          this.materias.push(this.materiasDirt[k]);
        }
      }
    }
  }
}
