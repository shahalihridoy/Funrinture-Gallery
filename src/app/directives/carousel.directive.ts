import { Directive, ViewContainerRef, TemplateRef, Input, ViewRef, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCarousel]'
})

export class CarouselDirective {

  constructor(private parent: ViewContainerRef, private body: TemplateRef<any>, private el:ElementRef,private ren: Renderer2) { }

  view: ViewRef;
  // alias name must be same as directive name
  @Input('appCarousel') set slide(options){
    
  }
  
}
