import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, query, animation } from '@angular/animations';

@Component({
  selector: 'app-accordin',
  templateUrl: './accordin.component.html',
  styleUrls: ['./accordin.component.scss'],
  animations: [
    trigger('test', [
      state('void',style({
        height:0,
        overflow:'hidden'
      })),
      state('*',style({
        height:'*',
        overflow:'auto'
      })),
      transition('void => *', [
        animate('250ms ease-out')
      ]),
      transition('* => void', [
        animate('250ms ease-in')
      ])
    ]),


    trigger('rotate', [

      state('collapsed', style({
        transform: "rotate(-90deg)"
      })),
      // state('*', style({
      //   transform: "rotate(-90deg)"
      // })),

      transition('* <=> collapsed', [
        animate(250)
      ])
    ]),


    trigger('collapse', [

      state('collapsed', style({
        height: '0px',
        overflow: 'hidden'
      })),

      transition('* <=> collapsed', [
        animate('250ms ease')
      ]),
      // transition('collapsed => *', [
      //   animate('5s ease-out',style({
      //     height: '*',
      //     overflow: 'auto'
      //   }))
      // ])

    ])
  ]
})

export class AccordinComponent implements OnInit {

  @Input('opened') opened: boolean = false;
  @Input('icon-needed') needed: boolean = true;

  constructor() { }

  ngOnInit() {
  }
}
