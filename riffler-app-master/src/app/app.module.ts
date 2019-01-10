import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HyperGeometricCalcService } from './hyper-geometric-calc.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppProxy } from './app.proxy';
import { AppService } from './app.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [AppProxy, AppService, HyperGeometricCalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
