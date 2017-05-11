import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'len-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('ingresoChanged', [
      state('on' , style({
        opacity: 1, transform: 'translate3d(0,0,0)  '
      })),
      state('off', style({
        opacity: 0, transform: 'translate3d(-100%,0,0) '
      })),
      transition('* => *',[
        animate('400ms')
      ])
    ]),
    trigger('resultadosChanged', [
      state('on' , style({ opacity: 1, transform: 'translateX(0%)' })),
      state('off', style({ opacity: 0, transform: 'translateX(100%) '  })),
      transition('* => *',[
        animate('400ms')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  res:boolean=false;
  ing:boolean=true;
  n:number=2;
  private resA:string='off';
  private ingA:string='on';

  constructor() { }

  ngOnInit() {
  }

  cambiar():void{
    if(this.resA==='off' && this.n===1){
      this.res=false;
      this.ing=true;
      this.ingA='on';
    }
    if(this.ingA==='off' && this.n===2){
      this.ing=false;
      this.resA='on';
      this.res=true;
    }
  }


}
