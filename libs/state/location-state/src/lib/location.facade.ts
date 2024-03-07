import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  deletingLocations,
  loadingLocations,
  locations,
  savingLocations,
  updatingLocations
} from './location.selectors';
import { Loc } from '~challenge/types';
import {
  createLocation,
  deleteLocation,
  dismissLocationModal,
  loadLocations,
  openLocationModal,
  updateLocation
} from './location.actions';

@Injectable({
  providedIn: 'root'
})
export class LocationFacade {

  locations$ = this.locationStore.select(locations);
  isLoadingLocations$ = this.locationStore.select(loadingLocations);
  isSavingLocation$ = this.locationStore.select(savingLocations);
  isUpdatingLocation$ = this.locationStore.select(updatingLocations);
  isDeletingLocation$ = this.locationStore.select(deletingLocations);

  constructor(private locationStore: Store) { }

  loadLocations() {
    this.locationStore.dispatch(loadLocations());
  }

  createLocation(location: Loc) {
    console.log('Create Loc: ' + JSON.stringify(location));
    this.locationStore.dispatch(createLocation({location: location}));
  }

  updateLocation(location: Loc) {
    console.log('Update Loc: ' + JSON.stringify(location));
    this.locationStore.dispatch(updateLocation({location: location}));
  }

  deleteLocation(location: Loc) {
    console.log('Delete Loc: ' + JSON.stringify(location));
    this.locationStore.dispatch(deleteLocation({location: location}));
  }

  openLocationModal(loc: Loc) {
    this.locationStore.dispatch(openLocationModal({location: loc}));
  }

  dismissLocationModal() {
    this.locationStore.dispatch(dismissLocationModal());
  }
}
