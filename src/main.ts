import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1200,
  once: true
});
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
