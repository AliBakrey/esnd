import { Directive } from '@angular/core';

/**
 * Generated class for the AutoHideDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[auto-hide]', // Attribute selector
  host: {
    '(ionScroll)':'onContentScroll($event)'
  }
})
export class AutoHideDirective {

  constructor() {
    // console.log('Hello AutoHideDirective Directive');
  }

  onContentScroll(e){
    console.log(e);
  }
}
