import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonLabel,
  IonText
} from '@ionic/angular/standalone';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { FooterBarComponent } from '../shared/footer-bar/footer-bar.component';
import { AuthFacade } from '~challenge/auth-state';
import { DEFAULT_USER, TypedForm, User } from '~challenge/types';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonInput,
    IonButton,
    ReactiveFormsModule,
    IonHeader,
    NavBarComponent,
    FooterBarComponent,
    IonFooter,
    IonContent,
    IonButtons,
    IonLabel,
    IonText
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {

  loginForm!: TypedForm<User>;

  constructor(private authFacade: AuthFacade, private formBuilder: FormBuilder) {
    this.loginForm = this.createForm();
  }

  private createForm(): TypedForm<User> {
    return this.formBuilder.nonNullable.group({
      'user': ['', Validators.required],
      'pass': ['', Validators.required]
    });
  }

  login() {
    this.authFacade.login({...DEFAULT_USER, ...this.loginForm.value});
    this.loginForm.reset();
  }
}
