import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante'
import { Materia } from '../interfaces/materia'
import {EstudiantesService} from '../services/estudiantes.service';
import {MateriasService} from '../services/materias.service';

@Component({
  selector: 'len-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
  providers:[EstudiantesService,MateriasService]
})
export class EditarUsuarioComponent implements OnInit {
  @Input() estudiante:Estudiante;
  materiasEst:any;
  materiasTot:Array<Materia>;
  inscribir:Array<Materia>=[];
  obj:any={};
  mensaje:string;
  constructor(private _eService: EstudiantesService,private _mService: MateriasService) { }

  ngOnInit() {
    console.log(this.estudiante);
    this.getMateriasAlumno();
  }

  update():void{
    this._eService.putEstudiante(this.estudiante)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
  }

  getMateriasAlumno():void{
    this._eService.getEstudMat(this.estudiante.id)
      .subscribe(
        data => {
          console.log(data);
          this.materiasEst=data;
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
          this.materiasTot=data;
          this.limpiarMats();
        },
        error => console.log(error)
      );
  }
  limpiarMats():void{
    this.inscribir=[];
    for(var i = 0; i<this.materiasTot.length;i++){
      var check = false;
      for(var j = 0; j<this.materiasEst.length;j++){
        if(this.materiasTot[i].id===this.materiasEst[j].idMateria){
          check=true;

        }
      }
      if(!check){
        this.inscribir.push(this.materiasTot[i]);
      }
    }
    console.log(this.inscribir);
  }
  enroll(id:number):void{
    this.obj={
      idMateria:id,
      idEstudiante:this.estudiante.id,
      promedioAlumno:0,
      porcentajeCompletado:0
    }
    this._eService.postEstudMat(this.obj)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
  }
}
