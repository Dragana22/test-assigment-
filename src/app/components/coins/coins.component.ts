import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent {
  @Input() coin5KM: any  = "0"
  @Input() coin2KM: any = "0"
  @Input() coin1KM: any = "0"
  @Input() coin50pf: any = "0"
  @Input() coin20pf: any = "0"
  @Input() coin10pf: any = "0"

}
