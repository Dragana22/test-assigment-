import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-change-money',
  templateUrl: './change-money.component.html',
  styleUrls: ['./change-money.component.css']
})
export class ChangeMoneyComponent {
  name = new FormControl('');
  imports: any;
  number: any;
  submitted: boolean | undefined;

  buttonColor = 'red';

  onClick() {
    // perform your desired action here
    this.buttonColor = 'green';
  }
}
