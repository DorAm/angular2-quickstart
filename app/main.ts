// === Angular Lib Modules ===
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// === App Modules ===
import { AppModule } from './app.module'

//App bootstrapping:
const platform = platformBrowserDynamic();  //initializes the platform that your application runs in
platform.bootstrapModule(AppModule);        //uses the platform to bootstrap your AppModule
