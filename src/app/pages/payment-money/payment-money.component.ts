import {Component} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {Observable} from "rxjs";
import {Coins} from "../../coin/coin.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-payment-money',
  templateUrl: './payment-money.component.html',
  styleUrls: ['./payment-money.component.css']
})
export class PaymentMoneyComponent {
  paymentForm = new FormGroup({
    inputCoin5: new FormControl(0),
    inputCoin2: new FormControl(0),
    inputCoin1: new FormControl(0),
    inputCoin50pf: new FormControl(0),
    inputCoin20pf: new FormControl(0),
    inputCoin10pf: new FormControl(0),
  });

  private coins: Observable<Coins>;

  constructor(private store: Store<AppState>, private router:Router) {
    this.coins = this.store.select(state => state.coins);
  }

  onSubmit() {
    this.store.dispatch({
      type: 'ADD_MONEY',
      payload: <Coins>this.paymentForm.value
    })
    this.router.navigate(['/change-money']);

  }
}
