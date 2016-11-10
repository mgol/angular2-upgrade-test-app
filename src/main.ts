import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

declare const angular;

angular
  .module('ng1app', [])
  .directive('ygRoot', downgradeComponent({
    component: AppComponent,
    inputs: [],
    outputs: [],
  }));


// First we bootstrap the Angular 2 HybridModule
// (We are using the dynamic browser platform as this example has not been compiled AoT)
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Once Angular 2 bootstrap is complete then we bootstrap the Angular 1 module
  const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['ng1app']);
});
