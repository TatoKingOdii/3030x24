import {Component, Input} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
  ModalController
} from "@ionic/angular/standalone";
import {LocationFacade} from "~challenge/location-state";
import {DEFAULT_LOCATION, Loc} from "~challenge/types";

@Component({
  selector: 'app-location-list',
  imports: [
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonText,
    IonIcon,
    IonModal,
    IonContent,
    IonInput,
    IonCard,
    IonHeader,
    IonFooter,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ],
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  standalone: true
})
export class LocationListComponent {

  @Input() locations: Loc[] | null = []
  @Input() loadingLocations: boolean | null = false;

  constructor(protected locationFacade: LocationFacade) {}

  openModal(idx: number | null) {
    console.log('Open Idx: ' + idx);
    this.locationFacade.openLocationModal(idx != null && this.locations ? this.locations[idx] : DEFAULT_LOCATION)
  }

  deleteLocation(idx: number) {
    if (this.locations) {
      this.locationFacade.deleteLocation(this.locations[idx]);
    }
  }
}
