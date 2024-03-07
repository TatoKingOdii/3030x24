import { Component, OnInit } from '@angular/core';
import { IonContent, IonFooter, IonHeader, IonImg, IonText } from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {NavBarComponent} from "../shared/nav-bar/nav-bar.component";
import {FooterBarComponent} from "../shared/footer-bar/footer-bar.component";
import { CatsService } from '~challenge/cats';

@Component({
  selector: 'app-landing',
  imports: [
    IonText,
    RouterLink,
    IonHeader,
    NavBarComponent,
    FooterBarComponent,
    IonFooter,
    IonContent,
    IonImg
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true
})
export class LandingComponent  implements OnInit {

  catUrl: string = this.catService.getSquareCat(Math.floor(Math.random() * 400) + 200);

  constructor(protected catService: CatsService) { }

  ngOnInit() {

  }
}
