import { Component, OnInit, Input } from '@angular/core';
import {MateriasService} from '../services/materias.service';
import {Materia} from '../interfaces/materia';
import {TemasService} from '../services/temas.service';
import {Tema} from '../interfaces/tema';
@Component({
  selector: 'len-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css'],
  providers:[MateriasService, TemasService]
})
export class EditarMateriaComponent implements OnInit {
  @Input() materia:Materia;
  temasDirt : Array<Tema>;
  temas : Array<Tema>;
  selectedTema:Tema;
  constructor(private _mService: MateriasService,private _tService: TemasService) { }

  ngOnInit() {
    this.getTemas();
  }

  getTemas():void{
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
    this.temas=[];
    for(var i = 0; i<this.temasDirt.length;i++){
      if(this.temasDirt[i].idMateria===this.materia.id){
        this.temas.push(this.temasDirt[i]);
      }
    }
  }
  putMateria():void{
    this._mService.putMateria(this.materia)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
  }
}
