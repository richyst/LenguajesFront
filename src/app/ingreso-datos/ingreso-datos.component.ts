import { Component, OnInit } from '@angular/core';
import {EstudiantesService} from '../services/estudiantes.service';
import {MateriasService} from '../services/materias.service';

@Component({
  selector: 'len-ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.css'],
  providers:[EstudiantesService,MateriasService]
})
export class IngresoDatosComponent implements OnInit {

  constructor(private _eService: EstudiantesService,private _mService: MateriasService) { }

  ngOnInit() {
  }

  getEstudiantes():void{

  }
}
