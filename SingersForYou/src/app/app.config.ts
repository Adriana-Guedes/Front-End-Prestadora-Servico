import { provideToastr } from 'ngx-toastr';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';



//necessário inserir os provider aqui também para que seja utilizado de forma global
export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes),
  provideAnimations(),
  provideToastr({}),
provideHttpClient(withFetch())

  ]
};
