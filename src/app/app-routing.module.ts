import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChangeMoneyComponent} from "./pages/change-money/change-money.component";
import {PaymentMoneyComponent} from "./pages/payment-money/payment-money.component";


const routes: Routes = [
  {path: "", redirectTo: 'change-money' ,pathMatch: 'full'},
  {path: "change-money", component: ChangeMoneyComponent},
  {path: "payment-money", component: PaymentMoneyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
