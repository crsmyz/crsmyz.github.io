# Welcome to Riffler!

An app to simulate Magic: The Gathering decks.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Changing Decks

To change decks just add your list to the text area and click submit to get a full visual list of your deck. You can then simulate opening hands, draw cards and apply mulligans.

## Scryfall Card Data

This app uses Scryfall card data and images to display visual views of the users deck. For more detailed documentation on the end point check it out here:

https://scryfall.com/docs/api/cards/collection

### Endpoint:

POST https://api.scryfall.com/cards/collection
  
### Request format:
```
{
  "identifiers": [
    {
      "id": "683a5707-cddb-494d-9b41-51b4584ded69"
    },
    {
      "name": "Ancient Tomb"
    },
    {
      "set": "mrd",
      "collector_number": "150"
    }
  ]
}
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `src/dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
