import { Component, OnInit, Input } from '@angular/core';
import {EstudiantesService} from '../services/estudiantes.service';
import {MateriasService} from '../services/materias.service';
import {TemasService} from '../services/temas.service';
import {Materia} from '../interfaces/materia';
import {Tema} from '../interfaces/tema';
@Component({
  selector: 'len-res-materias',
  templateUrl: './res-materias.component.html',
  styleUrls: ['./res-materias.component.css'],
  providers:[EstudiantesService,MateriasService, TemasService]
})
export class ResMateriasComponent implements OnInit {
  @Input() materia:Materia;
  @Input() idUser:number;
  @Input() promedio:number;
  @Input() porcentaje:number;
  temasDirt:Array<Tema>;
  temas:Array<Tema>;
  constructor(private _eService: EstudiantesService,private _mService: MateriasService, private _tService: TemasService) { }

  ngOnInit() {

  }
  // getMateria():void{
  //   this._mService.getMateria(this.id)
  //     .subscribe(
  //       data => {
  //         this.materia=data;
  //         this.getTemas();
  //       },
  //       error => console.log(error)
  //     );
  // }
  getTemas(){
    this._tService.getTemas()
      .subscribe(
        data => {
          this.temasDirt=data;
          // this.limpiarTemas();
        },
        error => console.log(error)
      );
  }
  //
  // limpiarTemas():void{
  //   this.temas= Array<Tema>();
  //   for(var i =0; i<this.temasDirt.length;i++){
  //     if(this.temasDirt[i].idMateria===this.id){
  //       this.temas.push(this.temasDirt[i]);
  //     }
  //   }
  // }
}
