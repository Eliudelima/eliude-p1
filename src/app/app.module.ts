import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BitcoinComponent } from "./bitcoin/bitcoin.component";
import { MinhaCarteiraComponent } from "./minha-carteira/minha-carteira.component";
import { RouterModule } from "@angular/router";
import { BircoinService } from "./bircoin.service";
import { BitcoinService } from "./bitcoin.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA6yrOySvrmTd55-hYouYOdY-7xoy9C69g",
      authDomain: "eliudep1.firebaseapp.com",
      databaseURL: "https://eliudep1.firebaseio.com",
      projectId: "eliudep1",
      storageBucket: "eliudep1.appspot.com",
      messagingSenderId: "584329146738",
      appId: "1:584329146738:web:da2bfd8f23d037a81aedeb"
    }),
    RouterModule.forRoot([
      { path: "bitcoin", component: BitcoinComponent },
      { path: "carteira", component: MinhaCarteiraComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    BitcoinComponent,
    MinhaCarteiraComponent
  ],
  bootstrap: [AppComponent],
  providers: [BircoinService, BitcoinService]
})
export class AppModule {}
