import { NgModule } from '@angular/core';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { CustomIfDirective } from './directives/custom-if.directive';


@NgModule({
  declarations: [ErrMsgDirective, CustomIfDirective],
  exports: [ErrMsgDirective, CustomIfDirective], // exportar directivas para que sean visibles en otros módulos
})
export class SharedModule {}
