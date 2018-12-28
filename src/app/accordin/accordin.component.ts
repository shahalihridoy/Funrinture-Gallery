import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, query, animation } from '@angular/animations';

@Component({
  selector: 'app-accordin',
  templateUrl: './accordin.component.html',
  styleUrls: ['./accordin.component.scss'],
  animations: [
    trigger('test', [
      transition('void => *', [
        style({
          // initial style when animation starts
          height: 0,
          overflow: 'auto'
        }),
        animate(250)
      ]),
      transition('* => void', [
        animate(250, style({
          // final style when animation ends
          height: 0,
          overflow: 'hidden'
        }))
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
        animate(250)
      ])
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
