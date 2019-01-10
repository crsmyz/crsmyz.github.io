import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { AppService } from './app.service';
import { HyperGeometricCalcService } from './hyper-geometric-calc.service';
import { Card, DeckProbabilityContext, CardsResponse, CardItem, CardObject } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Riffler';
  // drawn cards list
  mtgDrawnCards: any[] = [];
  // deck list
  // testtestMtgDeck: Card[] = [];
  // opening hand
  mtgHand: any = [];
  testMtgDeck: CardObject[] = [];
  // default mulligan number
  mull: number = 6;
  // experiment deck
  controlDeck: Card[] = [];
  // experiment hand
  controlHand: Card[] = [];
  deckList: string;
  textPlaceHolder: string = `1 Cancel \n 1 Ponder \n 1 Unsummon`;
  deckDataInput: string = '';
  loadingData: boolean = false;

  constructor(private appService: AppService,
    private hyperGeometricCalcService: HyperGeometricCalcService) { }

  getDeckData() {
    this.loadingData = true;
    this.appService.getDeckData(this.deckDataInput).subscribe(resp => {
      console.log(resp.data);
      this.testMtgDeck = resp.data;
    });
  }

  // draw your opening hand
  public drawOpeningHand(): void {
    this.resetSim();
    if (this.mtgHand && this.mtgHand.length > 0) {
      for (let i = 0; i < 7; i++) {
        const card = this.mtgHand.shift();
        this.testMtgDeck.push(card);
      }
      for (let i = 0; i < 7; i++) {
        const index = (Math.floor(Math.random() * this.testMtgDeck.length));
        const card = this.testMtgDeck.splice((Math.floor(Math.random() * this.testMtgDeck.length)), 1);
        this.mtgHand.push(card[0]);
      }
    } else {
      for (let i = 0; i < 7; i++) {
        const index = (Math.floor(Math.random() * this.testMtgDeck.length));
        const card = this.testMtgDeck.splice((Math.floor(Math.random() * this.testMtgDeck.length)), 1);
        this.mtgHand.push(card[0]);
      }
    }
  }

  // clear opening hand and drawn cards
  public resetSim(): void {
    if (this.mtgDrawnCards && this.mtgDrawnCards.length > 0) {
      this.testMtgDeck = this.testMtgDeck.concat(this.mtgDrawnCards);
      this.mtgDrawnCards = [];
    }
    if (this.mtgHand && this.mtgHand.length > 0) {
      this.testMtgDeck = this.testMtgDeck.concat(this.mtgHand);
      this.mtgHand = [];
    }
    this.mull = 6;
  }

  public drawCard(): void {
    // TODO: implement hypergeometric calculations for each card left in the deck
    // this.calculateEachCardDrawPercentage();
    const index = (Math.floor(Math.random() * this.testMtgDeck.length));
    const card = this.testMtgDeck.splice((Math.floor(Math.random() * this.testMtgDeck.length)), 1);
    this.mtgDrawnCards.push(card[0]);
  }

  public mulligan(): void {
    if (this.mull === 0) {
      this.mull = 6;
    }
    this.testMtgDeck = this.testMtgDeck.concat(this.mtgHand);
    this.mtgHand = [];
    for (let i = 0; i < this.mull; i++) {
      const index = (Math.floor(Math.random() * this.testMtgDeck.length));
      const card = this.testMtgDeck.splice((Math.floor(Math.random() * this.testMtgDeck.length)), 1);
      this.mtgHand.push(card[0]);
    }
    this.mull--;
  }

  private calculateEachCardDrawPercentage() {
    let deckCount: number;
    if (this.testMtgDeck.length <= 53 && this.testMtgDeck.length !== 0) {
      deckCount = this.testMtgDeck.length;
      console.log(deckCount);
      this.testMtgDeck.forEach(card => {
        card.percentageToDraw = this.hyperGeometricCalcService.calcHypGeo(deckCount--);
      });
    }
  }

}
