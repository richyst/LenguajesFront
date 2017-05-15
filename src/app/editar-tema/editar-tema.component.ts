import { Component, OnInit, Input } from '@angular/core';
import {Tema} from '../interfaces/tema';
@Component({
  selector: 'len-editar-tema',
  templateUrl: './editar-tema.component.html',
  styleUrls: ['./editar-tema.component.css']
})
export class EditarTemaComponent implements OnInit {
  @Input() tema:Tema;
  constructor() { }

  ngOnInit() {
  }

}
