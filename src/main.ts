import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { webcomponentsReady } from '@codebakery/origami';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
webcomponentsReady().then(() => {
  console.log('Bootstraping AppModule');
  platformBrowserDynamic().bootstrapModule(AppModule, {
    enableLegacyTemplate: false
  });
}).catch(error => {
  // No WebComponent support and webcomponentsjs is not loaded
  console.error(error);
});

// HMR support
if (module['hot']) {
  module['hot'].accept();
}
