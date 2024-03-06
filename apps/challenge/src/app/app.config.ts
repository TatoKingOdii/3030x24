import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
     provideRouter(appRoutes),
     provideIonicAngular({}),
    // provideEffects(AuthEffects, LocationEffects, ErrorEffects),
    // provideStore({location: locationReducer, auth: authReducer}),
     provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
     provideHttpClient(withFetch()),
    // ...INJECTABLES
  ]
};
