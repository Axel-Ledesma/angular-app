import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Supports weights 300-900
import '@fontsource-variable/rubik';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
