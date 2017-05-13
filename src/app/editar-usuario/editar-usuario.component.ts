import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from '../interfaces/estudiante'
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
  constructor(private _eService: EstudiantesService,private _mService: MateriasService) { }

  ngOnInit() {
    console.log(this.estudiante);
  }

  update(){
    this._eService.putEstudiante(this.estudiante)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
  }
}
