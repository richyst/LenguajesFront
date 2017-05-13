import { Component, OnInit } from '@angular/core';
import {EstudiantesService} from '../services/estudiantes.service';
import {MateriasService} from '../services/materias.service';
import {Estudiante} from '../interfaces/estudiante';
import {Materia} from '../interfaces/materia';

@Component({
  selector: 'len-ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.css'],
  providers:[EstudiantesService,MateriasService]
})
export class IngresoDatosComponent implements OnInit {
  nombre :string;
  estudiante : Estudiante=<Estudiante>{};
  materia:Materia=<Materia>{};
  estVis:boolean=false;
  matVis:boolean=false;

  constructor(private _eService: EstudiantesService,private _mService: MateriasService) { }

  ngOnInit() {
    this.estudiante.nombre="";
  }


  display(n:number):void{
    if(n===1){
      this.estVis=true;
      this.matVis=false;
    }
    if(n===2){
      this.estVis=false;
      this.matVis=true;
    }
  }
  postEstudiante():void{
    console.log(this.estudiante);
    this.estudiante.promedioGlobal=0;
    this.estudiante.recomendaciones=[];
    this._eService.postEstudiante(this.estudiante)
      .subscribe(
        data => {
          console.log(JSON.stringify(data))
        },
        error => console.log(error)
      );
  }
  postMateria():void{
    this._mService.postMateria(this.materia)
      .subscribe(
        data => {
          console.log(JSON.stringify(data))
        },
        error => console.log(error)
      );
  }
}
