import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'len-res-tareas',
  templateUrl: './res-tareas.component.html',
  styleUrls: ['./res-tareas.component.css']
})
export class ResTareasComponent implements OnInit {
  @Input() id:string;
  @Input() id_user:string;
  constructor() { }

  ngOnInit() {
  }

}
