import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides = [
    {image: 'https://i.pinimg.com/originals/87/22/19/872219e39469e56ff5742581122212bf.jpg'},
    {image: 'https://i.imgur.com/HlmWDMU.jpg'},
    {image: 'https://i.imgur.com/cjPnOhL.jpg'}
  ];

  constructor() { }

}
