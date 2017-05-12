import { Component, OnInit, Input } from '@angular/core';
import {TemasService} from '../services/temas.service';
import {Tema} from '../interfaces/tema';
@Component({
  selector: 'len-res-temas',
  templateUrl: './res-temas.component.html',
  styleUrls: ['./res-temas.component.css'],
  providers:[TemasService]
})
export class ResTemasComponent implements OnInit {
  @Input() idUser:string;
  @Input() tema:Tema;
  constructor(private _tService: TemasService) { }

  ngOnInit() {
  }
  // getTemas(id:number){
  //   this._tService.getTemas()
  //     .subscribe(
  //       data => {
  //         this.materia=data;
  //         this.getTemas(this.materia.id);
  //       },
  //       error => console.log(error)
  //     );
  // }
}
