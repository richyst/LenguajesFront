import { Component, OnInit } from '@angular/core';
import {EstudiantesService} from '../services/estudiantes.service';
import {MateriasService} from '../services/materias.service';

import {Estudiante} from '../interfaces/estudiante';

@Component({
  selector: 'len-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  providers:[EstudiantesService,MateriasService]
})
export class ResultadosComponent implements OnInit {
  estudiantes : Array <Estudiante>;
  constructor(private _eService: EstudiantesService,private _mService: MateriasService) { }

  ngOnInit() {
    this.getEstudiantes();
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
}
