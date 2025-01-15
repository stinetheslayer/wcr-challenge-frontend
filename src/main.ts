import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { WelcomeComponent } from './app/welcome/welcome.component'; // Adjust the path if necessary
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));