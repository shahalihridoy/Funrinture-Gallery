import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ngIfDelay]'
})
export class NgIfDelayDirective {

  constructor(private parent: ViewContainerRef, private child: TemplateRef<any>) { }

  @Input('ngIfDelay') set updateUI(options){
    console.log(options);
    
    if(options.condition){
        this.parent.createEmbeddedView(this.child);
    }
    else{
      setTimeout(() => {
        this.parent.clear();
      }, options.delay);
    }
  }
}
