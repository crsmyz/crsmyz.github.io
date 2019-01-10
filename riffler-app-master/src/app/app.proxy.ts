import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Card, CardsResponse } from './app.model';

@Injectable()
export class AppProxy {

    API_URL: string = 'https://api.scryfall.com/';
    CARD_URL: string  = 'cards/named?exact=';
    COLLECTION_URL: string = 'cards/collection';
    DECKLIST_URL: string = this.API_URL + this.COLLECTION_URL;

    constructor(private http: Http) { }

    getDeckList(deckListRequest: any): any {
        return this.http.post(this.DECKLIST_URL, deckListRequest)
        .map((res: any) => res.json());
    }
}
