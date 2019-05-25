import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  
  @Input('sidenav') sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  items: string[] = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];
 
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

}
