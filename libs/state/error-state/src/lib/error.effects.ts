import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from "rxjs";
import {ToastUiService} from "../../../../../apps/challenge/src/app/core/toast-ui-service/toast-ui.service";
import {authLoginFailure, authLogoutFailure} from "~challenge/auth-state";
import {
  createLocationFailure,
  deleteLocationFailure,
  loadLocationsFailure,
  updateLocationFailure
} from "~challenge/location-state";
import { QuoteActions } from '@c3030x24/quote';


@Injectable()
export class ErrorEffects {

  constructor(private actions$: Actions, private toastUiService: ToastUiService) {}

  errorEffect$ = createEffect(() => this.actions$.pipe(
    ofType(authLoginFailure, authLogoutFailure, createLocationFailure,
      deleteLocationFailure, updateLocationFailure, loadLocationsFailure,
      QuoteActions.getQuotesFailure),
    switchMap(action => this.toastUiService.presentToast(action.error))
  ), {dispatch: false});
}
