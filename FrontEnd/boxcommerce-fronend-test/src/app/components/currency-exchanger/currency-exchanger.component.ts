import { Component, EventEmitter, Output } from '@angular/core';
import { Money } from '../../models/money';
import { CurrencyService } from '../../services/currency.service';
import { ExchangeRate } from '../../models/exchange-rate';
import { MatFormField, MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select'; 
import { CurrencyType } from '../../models/currency-type';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 

@Component({
  selector: 'app-currency-exchanger',
  standalone: true,
  imports: [MatInputModule, MatFormField, CommonModule, MatSelectModule, MatButtonModule, MatIconButton, MatIconModule],
  templateUrl: './currency-exchanger.component.html',
  styleUrl: './currency-exchanger.component.css'
})
export class CurrencyExchangerComponent {
  @Output() newChangeEmitter = new EventEmitter<Money>();

  amount: number;
  currency: string;
  currencyTypes: CurrencyType[] = [
    { value: "EUR", viewValue: "EUR" },
    { value: "USD", viewValue: "USD" },
    { value: "CHF", viewValue: "CHF" }
  ];

  constructor(private exchangeService:CurrencyService){
    this.amount = 0;
    this.currency = 'EUR';
  }

  onAmountChange(){
    
  }

  triggerExchangeOnOther(){
    this.newChangeEmitter.emit(new Money(this.amount, this.currency));
  }

  public exchange(baseMoney: Money){
    type ObjectKey = keyof typeof ExchangeRate;
    const TO_PROPERTY = this.currency as ObjectKey;
    this.exchangeService.convertCurrency(baseMoney, new Money(this.amount, this.currency)).subscribe(data => {
      this.amount = data.exchange_rates[TO_PROPERTY];
    });
  }
}
