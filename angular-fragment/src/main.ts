import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {FactoryModule} from "./factory/factory.module";

if (environment.production) {
  enableProdMode();
}

const element = document.createElement("angular-fragment-factory");
document.body.appendChild(element);

platformBrowserDynamic()
  .bootstrapModule(FactoryModule)
  .catch(err => console.error(err));

