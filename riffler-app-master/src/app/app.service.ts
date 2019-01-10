import { Injectable } from '@angular/core';
import { AppProxy } from './app.proxy';
import { Card, CardsResponse, CardItem, CardRequest, CardName } from './app.model';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AppService {

    constructor(private appProxy: AppProxy) { }

    // return JSON from proxy to component
    getDeckData(data: string): any {
        return this.appProxy.getDeckList(this.convertToRequest(data));
    }

    convertToRequest(data: string) {
        const cardArrayNumber: string[] = data.match(/\d+/g);
        let cardArrayName: string[] = data.split(/[\d]/);
        cardArrayName = cardArrayName.filter(val => val !== '');
        const cardRequest: CardRequest = {
            identifiers: []
        };
        cardArrayNumber.forEach((card, index) => {
            if (cardArrayName[index] !== '') {
                for (let i = 0; i < +cardArrayNumber[index]; i++) {
                    const cardObj: CardName = {
                        name: cardArrayName[index].substr(1)
                    };
                    cardRequest.identifiers.push(cardObj);
                }
            }
        });
        return cardRequest;
    }
}
