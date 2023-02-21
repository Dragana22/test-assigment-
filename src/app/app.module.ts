import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {ChangeMoneyComponent} from "./pages/change-money/change-money.component";
import {PaymentMoneyComponent} from "./pages/payment-money/payment-money.component";
import { CoinsComponent } from './components/coins/coins.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangeMoneyComponent,
    PaymentMoneyComponent,
    CoinsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
