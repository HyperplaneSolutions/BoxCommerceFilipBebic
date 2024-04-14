import { Component, ViewChild } from '@angular/core';
import { CurrencyExchangerComponent } from '../currency-exchanger/currency-exchanger.component';
import { Money } from '../../models/money';

@Component({
  selector: 'app-exchanger-group',
  standalone: true,
  imports: [CurrencyExchangerComponent],
  templateUrl: './exchanger-group.component.html',
  styleUrl: './exchanger-group.component.css'
})
export class ExchangerGroupComponent{
  @ViewChild("leftExchanger") leftExchanger!:CurrencyExchangerComponent;
  @ViewChild("rightExchanger") rightExchanger!:CurrencyExchangerComponent;
  constructor(){
  }

  triggerConversion(money: Money){
    console.log(money);
  }
}
