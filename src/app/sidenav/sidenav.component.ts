import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  @Input('sidenav') sidenav: MatSidenav;
  
  constructor() { }

  ngOnInit() {}

}
