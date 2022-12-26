import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {

  @Input() set customIf(condition: boolean) {
    if(condition){
      this.viewCon.createEmbeddedView(this.templ); //
    } else {
      this.viewCon.clear();
    }
  }


  constructor(
    private templ: TemplateRef<HTMLElement>,
    private viewCon: ViewContainerRef
  ) {}
}
