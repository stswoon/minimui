/* tslint:disable */

import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  NgZone,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AppComponent} from "../app/app.component";

@Component({
  selector: 'angular-fragment-factory',
  template: '<div #placeholder></div>'
})
export class FactoryComponent implements OnInit {
  @ViewChild('placeholder', {read: ViewContainerRef, static: true}) placeholder: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private zone: NgZone) {
    this.placeholder = null
  }

  ngOnInit(): void {
    if ((<any>window).minimui) {
      const self = this;
      const fragmentCreator: any = {}
      fragmentCreator.create = function (element: HTMLElement) {
        self.createComponent(element);
      };
      (<any>window).minimui.registerFragment("angularFragment", fragmentCreator);
    } else {
      const element: HTMLElement = <any>document.getElementById("test");
      this.createComponent(element);
    }
  }

  createComponent(container: HTMLElement) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AppComponent);
    const viewContainerRef: ViewContainerRef = this.placeholder;
    const componentRef: ComponentRef<AppComponent> = viewContainerRef.createComponent<AppComponent>(componentFactory);

    this.zone.runOutsideAngular(() => {
      let componentRefEl = componentRef.location.nativeElement;
      container.insertAdjacentElement('afterbegin', componentRefEl);
    });

  }
}


