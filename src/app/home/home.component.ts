import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as $ from "jquery";
import { trigger, transition, style, animate, state, animateChild } from '@angular/animations';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      // state('on', style({

      // })),
      // state('off', style({

      // })),
      // transition('* => void', [
      //   style({
      //     // initial style
      //     // background: 'voilet'
      //   }),
      //   animate(2000, style({
      //     // animating style
      //     // transform: 'translateY(-100%)'
      //   }))
      // ])
      // // add another transition
      // ,
      // transition('void => *', [
      //   // animate(2000)
      // ])
    ])
    // start another trigger
  ]
})

export class HomeComponent {

  @ViewChild('test') slider: ElementRef;
  @ViewChild('inner') inner: ElementRef;

  slides = [
    { image: 'https://i.pinimg.com/originals/87/22/19/872219e39469e56ff5742581122212bf.jpg' },
    { image: 'https://i.imgur.com/HlmWDMU.jpg' },
    { image: 'https://i.imgur.com/cjPnOhL.jpg' }
  ];

  

  index = 4;
  start = 0;
  private parent;
  private childNumber;
  constructor(private ren: Renderer2) {}

  t = 0;
  carouselSlides = [];

  pushElementIntoCarouselSlidesArray() {
    let i = 0;
    for (i = 0; i < this.childNumber; i++) {
      this.carouselSlides.push(this.parent.childNodes[i]);
    }
  }

  deleteAllChild() {
    for (let j = 0; j < this.parent.childElementCount; j++) {
      this.ren.removeChild(this.parent, this.parent.childNodes[j]);
    }
    console.log("=== deleted ========= "+ this.parent.childElementCount +" ===========");
  }

  addSlideToView(n: number) {
    for(let i=this.start; i<this.start+n; i++){
      this.ren.appendChild(this.parent,this.carouselSlides[i]);
      // console.log("item added ",i);
    }

    console.log("=========> "+this.parent.childElementCount+" <==========");
    
    this.start++;
    if(this.start > this.childNumber - n){
      this.start = 0;
    }

  }

  private findBug(){
    console.log("from debugging section " + this.parent.childElementCount);
    console.log(this.slider);
  }

  // ======================= new aproach =========================
  count:number = 1;
  startAnimation(){
    this.ren.setStyle(this.parent,'transform',"translateX(-"+(this.count*320)+"px)");
    this.count++;
    if(this.count > 13){
      this.count = 0;
      this.ren.removeStyle(this.parent,'transition');
      this.ren.setStyle(this.parent,'transform','translateX(0px)');
      this.count++;
    }
  }

  transitionNext(){
    if(this.count > 13){
      this.count = 0;
      this.ren.removeStyle(this.parent,'transition');
      this.ren.setStyle(this.parent,'transform','translateX(0px)');
      this.count++;
    }
    else{
      this.ren.setStyle(this.parent,'transform',"translateX(-"+(this.count*320)+"px)");
      this.count++;
    }
  }

  transitionPrev(){
    if(this.count < 1){
      return;
    }
    else{
      this.ren.setStyle(this.parent,'transform',"translateX(-"+((this.count-1)*320)+"px)");
      this.count--;
    }
  }
  // ==============================================================

  ngAfterViewInit(): void {
    this.parent = this.slider.nativeElement.firstChild;
    this.childNumber = this.parent.children.length;

    let inter = setInterval(()=>{
      this.startAnimation();
    },5000);
    
    // clearInterval(inter);

    // this.pushElementIntoCarouselSlidesArray();
    // this.deleteAllChild();
    // this.addSlideToView(5);

    // setInterval(() => {
    //   // this.ren.removeChild(this.parent, this.parent.children[0]);
    //   this.deleteAllChild();
    //   this.addSlideToView(5);
    //   this.findBug();
    //   console.log("===================================================");
      
    // }, 5000);


    // ==================== don't go below =======================
    $(document).ready(function () {
      $("#myCarousel").on("slide.bs.carousel", function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
              $(".carousel-item")
                .eq(i)
                .appendTo(".carousel-inner");
            } else {
              $(".carousel-item")
                .eq(0)
                .appendTo($(this).find(".carousel-inner"));
            }
          }
        }
      });
    });

  }



  slide = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/444444"},
    {img: "http://placehold.it/350x150/777777"},
    {img: "http://placehold.it/350x150/888888"}
  ];
  slideConfig = {
    "slidesToShow": 5, 
    "arrows": true,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed":5000
  };
  
  // addSlide() {
  //   this.slide.push({img: "http://placehold.it/350x150/777777"});
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



