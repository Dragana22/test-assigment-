import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CoinsComponent} from "../../components/coins/coins.component";

@Component({
  selector: 'app-change-money',
  templateUrl: './change-money.component.html',
  styleUrls: ['./change-money.component.css']
})
export class ChangeMoneyComponent {
  amountForm = new FormGroup({
    amount: new FormControl()
  });
  imports: any;
  number: any;
  submitted: boolean | undefined;

  coins = [
    0, 0, 0, 0, 0, 0
  ];


  onClick(){
    this.calculateCoins(this.amountForm.controls["amount"].value);
    console.warn(this.amountForm.value);
  }

  calculateCoins(amount:number) {
    this.coins = [
      0, 0, 0, 0, 0, 0
    ];
    let CV = [
      5, 2, 1, 0.5, 0.2, 0.1
    ]


    let totalCoins = [
      2, 5, 3, 1, 3, 2
    ]
    let totalMoney = 24;


    if (totalMoney < amount) {
      return
    }
    let restAmount = amount;
    this.coins.forEach((coin, index) => {
      if (amount == CV[index]) {
        return
      }
      let numberOfCoins = 0;
      while (restAmount >= CV[index] && totalCoins[index] > 0) {
        restAmount = parseFloat((restAmount - CV[index]).toFixed(1));
        numberOfCoins++
        totalCoins[index]--
      }
      this.coins[index] = numberOfCoins
    });


    console.log(this.coins)
  }

}
