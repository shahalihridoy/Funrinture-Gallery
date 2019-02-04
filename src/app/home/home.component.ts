import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import * as $ from "jquery";
import { trigger, transition, style, animate, state, animateChild } from '@angular/animations';
import { NumberSymbol } from '@angular/common';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';
import { SlideComponent } from 'ngx-bootstrap/carousel/public_api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => void',[
        animate(2500,style({
          background: 'red'
        }))
      ]),
      transition('void => *',[
        animate(500,style({
          transform: 'rotate(360deg)'
          // background: 'green'
        }))
      ])
    ])
  ]
})

export class HomeComponent {

  @ViewChild('test') slider: ElementRef;
  @ViewChild('inner') inner: ElementRef;

  slidesPerView:number = 4;

  constructor(private dialog: MatDialog, private snackbar: MatSnackBar){}

  ngOnInit(): void {
    this.totalSlide = this.slide.length;
  }
  slides = [
    { image: 'https://i.pinimg.com/originals/87/22/19/872219e39469e56ff5742581122212bf.jpg' },
    { image: 'https://i.imgur.com/HlmWDMU.jpg' },
    { image: 'https://i.imgur.com/cjPnOhL.jpg' },
    { image: 'https://i.pinimg.com/originals/87/22/19/872219e39469e56ff5742581122212bf.jpg' },
    { image: 'https://i.imgur.com/HlmWDMU.jpg' },
    { image: 'https://i.imgur.com/cjPnOhL.jpg' }
  ];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: this.slidesPerView,
    lazy: true,
    loop: true,
    initialSlide: 4,
    autoplay: true,
    allowSlidePrev: true,
    allowSlideNext: true,
    mousewheel: true,
    spaceBetween:100,
    effect: 'ease-in',
    speed: 500,
    slideNextClass: '.nexta', // Class for next button
    slidePrevClass: '.preva', // Class for prev button
  };
  

  slide = [
    {img: "http://placehold.it/200x150/000000"},
    {img: "http://placehold.it/200x150/111111"},
    {img: "http://placehold.it/200x150/333333"},
    {img: "http://placehold.it/200x150/666666"},
    {img: "http://placehold.it/200x150/444444"},
    {img: "http://placehold.it/200x150/777777"},
    {img: "http://placehold.it/200x150/111111"},
    {img: "http://placehold.it/200x150/333333"},
    {img: "http://placehold.it/200x150/666666"},
    {img: "http://placehold.it/200x150/444444"},
    {img: "http://placehold.it/200x150/777777"},
    {img: "http://placehold.it/200x150/888888"}
  ];
  
  slideConfig = {
    // arrows: true,
    slidesToScroll: 1,
    autoplay:false,
    draggable:true,
    infinite: false,
    // dots: true,
    variableWidth: false,
    lazyLoad: 'ondemand',
    mobileFirst: true,
    swipeToSlide: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    autoplaySpeed:5000,

    responsive: [{
      breakpoint: 1024,
      settings: {
    initialSlide: 5,
    "slidesToShow": 5
      }

    }, {

      breakpoint: 600,
      settings: {
        initialSlide: 2,
        "slidesToShow": 2
      }

    }, {

      breakpoint: 300,
      settings: {
        initialSlide: 1,
        "slidesToShow": 1
      }

    }]
  };
  
  openPreviewDialogue(){
    const dialogRef = this.dialog.open(ProductPreviewComponent, {
      // width: '600px',
      data: {
        a : 'yoooo',
        b : 'bro',
        c : ['adfa','adf','adfads']
      }
    });
  }

  openSnackBar(){
    let message = "content added to wishlist";
    let action = "x";
    this.snackbar.open(message, action, {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 2000,
    });
  }

  currentSlide:number = 1;
  totalSlide:number; // slide length
  detectEdgeOfSlide(event){
    this.currentSlide = event.currentSlide;
    this.totalSlide = event.slick.slideCount;
  }

  // addSlide() {
  //   this.slide.push({img: "http://placehold.it/480x365/777777"});
  // }
  
  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }
  
  // slickInit(e) {
  //   console.log('slick initialized');
  // }
  
  // breakpoint(e) {
  //   console.log('breakpoint');
  // }
  
  // afterChange(e) {
  //   console.log('afterChange');
  // }
  
  // beforeChange(e) {
  //   console.log('beforeChange');
  // }
}



