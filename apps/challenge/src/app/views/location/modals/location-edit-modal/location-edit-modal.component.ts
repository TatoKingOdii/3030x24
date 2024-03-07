import {Component, Input, OnInit} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFooter, IonInput, IonModal, IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {v4} from "uuid";
import {LocationFacade} from "~challenge/location-state";
import {DEFAULT_LOCATION, Loc, TypedForm} from "~challenge/types";

@Component({
  selector: 'app-location-edit',
  imports: [
    IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonFooter,
    IonInput,
    IonModal,
    IonToolbar,
    ReactiveFormsModule
  ],
  templateUrl: './location-edit-modal.component.html',
  styleUrls: ['./location-edit-modal.component.scss'],
  standalone: true
})
export class LocationEditModalComponent implements OnInit {
  @Input() location!: Loc;
  locationForm!: TypedForm<Loc>;

  constructor(private formBuilder: FormBuilder,
              protected locationFacade: LocationFacade) { }

  ngOnInit() {
    this.locationForm = this.buildForm(this.location);
  }

  buildForm(location: Loc) {
    return this.formBuilder.nonNullable.group({
      'id': [location.id],
      'name': [location.name, [Validators.required]],
      'climate': [location.climate, [Validators.required]],
      'cost': [location.cost, [Validators.required]],
      'attractions': [location.attractions, [Validators.required]]
    });
  }

  dismiss() {
    this.locationFacade.dismissLocationModal();
  }

  saveForm() {
    let formVal = this.locationForm.value;
    if (formVal.id) {
      this.locationFacade.updateLocation({...DEFAULT_LOCATION, ...formVal});
    } else {
      this.locationFacade.createLocation({...DEFAULT_LOCATION, ...formVal, id: v4()});
    }
  }
}
