import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CoinsComponent} from "../../components/coins/coins.component";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {Coins} from "../../coin/coin.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-money',
  templateUrl: './change-money.component.html',
  styleUrls: ['./change-money.component.css']
})
export class ChangeMoneyComponent implements OnInit {
  amountForm = new FormGroup({
    amount: new FormControl()
  });


  constructor(private store: Store<AppState>, private router: Router) {
  }

  imports: any;
  number: any;
  submitted: boolean | undefined;

  coins = [
    0, 0, 0, 0, 0, 0
  ];

  initialCoins = [
    0, 0, 0, 0, 0, 0
  ];


  onSubmit() {
    this.calculateCoins(this.amountForm.controls["amount"].value);
  }


  calculateCoins(amount: number) {
    this.coins = [
      0, 0, 0, 0, 0, 0
    ];
    let CV = [
      5, 2, 1, 0.5, 0.2, 0.1
    ]


    let totalMoney = 0;
    this.initialCoins.forEach((coin, index) => {
      for (let i = 0; i < coin; i++) {
        totalMoney = parseFloat((totalMoney + CV[index]).toFixed(1))
      }
    });

    if (totalMoney < amount) {
      return
    }
    let restAmount = amount;
    this.coins.forEach((coin, index) => {
      if (amount == CV[index]) {
        return
      }
      let numberOfCoins = 0;
      while (restAmount >= CV[index] && this.initialCoins[index] > 0) {
        restAmount = parseFloat((restAmount - CV[index]).toFixed(1));
        numberOfCoins++
        this.initialCoins[index]--
      }
      this.coins[index] = numberOfCoins
    });


  }

  ngOnInit(): void {
    this.store.select(state => state.coins).subscribe((coins) => {
      if (coins == undefined) {
        this.router.navigate(['/payment-money']);
        return;
      }
      this.initialCoins = Object.values(coins);
    })
  }

}
