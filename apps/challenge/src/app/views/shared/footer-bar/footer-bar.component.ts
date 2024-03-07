import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { IonCol, IonGrid, IonRow, IonText, IonToolbar } from '@ionic/angular/standalone';
import { QuoteFacade } from '@c3030x24/quote';

@Component({
  selector: 'app-footer-bar',
  imports: [
    NgIf,
    IonText,
    IonToolbar,
    AsyncPipe,
    IonGrid,
    IonRow,
    IonCol
  ],
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss'],
  standalone: true
})
export class FooterBarComponent  implements OnInit {

  constructor(protected quoteFacade: QuoteFacade) { }

  ngOnInit() {
    this.quoteFacade.requestNewQuote();
  }
}
