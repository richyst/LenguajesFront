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
  selectedMat:Materia;
  materias = new Array();
  materiasDirt= new Array();
  promedios= new Array();
  porcentajes= new Array();
  relaciones=[];
  editVis:boolean=false;
  tablaVis:boolean=true;
  matVis:boolean=false;
  matsVis:boolean=false;
  constructor(private _eService: EstudiantesService,private _mService: MateriasService) { }

  ngOnInit() {
    this.getEstudiantes();
    this.getMaterias();
  }

  getEstudiantes():void{
    this._eService.getEstudiantes()
      .subscribe(
        data => {
          this.estudiantes=data;
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
    if(!isNaN(es.promedioGlobal)){
      this.selected.promedioGlobal=Number(es.promedioGlobal.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0])
    }

    this.getEstudMat(this.selected.id);
  }
  selectMateria(mat:Materia):void{
    this.selectedMat=mat;
    this.getEstudMat(this.selectedMat.id);
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
      this.matsVis=false;
    }
    if(n==2){
      this.editVis=false;
      this.tablaVis=true;
      this.matVis=false;
      this.matsVis=false;
    }
    if(n==3){
      this.editVis=false;
      this.tablaVis=false;
      this.matVis=true;
      this.matsVis=false;
    }
    if(n==4){
      this.editVis=false;
      this.tablaVis=false;
      this.matVis=false;
      this.matsVis=true;
    }
  }

  limpiarMaterias():void{
    this.materias=new Array();
    for(var i = 0; i<this.relaciones.length;i++){
      for(var k = 0; k<this.materiasDirt.length;k++){
        if(this.relaciones[i].idMateria==this.materiasDirt[k].id){
          this.porcentajes.push(this.relaciones[i].porcentajeCompletado);
          this.promedios.push(this.relaciones[i].promedioAlumno);
          this.materias.push(this.materiasDirt[k]);
        }
      }
    }
  }
}
