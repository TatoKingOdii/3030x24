import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import {INJECTABLES, routes} from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {AuthEffects, authReducer} from "~challenge/auth-state";
import {LocationEffects, locationReducer} from "~challenge/location-state";
import {ErrorEffects} from "~challenge/error-state";
import { QuoteEffects, quoteReducer } from '@c3030x24/quote';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIonicAngular({}),
    provideEffects(AuthEffects, LocationEffects, ErrorEffects, QuoteEffects),
    provideStore({location: locationReducer, auth: authReducer, quote: quoteReducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch()),
    ...INJECTABLES
  ]
};
