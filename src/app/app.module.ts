import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from 'configuracao';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadaoComponent } from './cidadao/cidadao.component';
import { RegistoComponent } from './registo/registo.component';

@NgModule({
  declarations: [
    AppComponent,
    CidadaoComponent,
    RegistoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
