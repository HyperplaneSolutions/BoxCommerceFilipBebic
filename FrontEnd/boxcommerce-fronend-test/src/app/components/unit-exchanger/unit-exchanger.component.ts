import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FullAmount } from '../../models/full-amount';
import { CurrencyService } from '../../services/currency.service';
import { ExchangeRate } from '../../models/exchange-rate';
import { MatFormField, MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitType } from '../../models/unit-type';

@Component({
  selector: 'app-unit-exchanger',
  standalone: true,
  imports: [MatInputModule, MatFormField, CommonModule, MatSelectModule, MatButtonModule, MatIconButton, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './unit-exchanger.component.html',
  styleUrl: './unit-exchanger.component.css'
})
export class UnitExchangerComponent implements OnInit {
  @Output() newChangeEmitter = new EventEmitter<FullAmount>();
  @Input() id!: number;
  @Input() unitTypes!: UnitType[];

  exchangerForm!: FormGroup;

  constructor(private exchangeService:CurrencyService, private formBuilder: FormBuilder){
  }
  ngOnInit(): void {
    this.exchangerForm = this.formBuilder.group({
      amount: new FormControl(0),
      currency: new FormControl(this.unitTypes.at(0)?.value),
    });
  }

  

  triggerExchangeOnOther(){
    this.newChangeEmitter.emit(new FullAmount(this.exchangerForm.value.amount as number, this.exchangerForm.value.currency as string));
  }

  public exchange(baseMoney: FullAmount){
    type ObjectKey = keyof typeof ExchangeRate;
    const TO_PROPERTY = this.exchangerForm.value.currency as ObjectKey;
    this.exchangeService.convertCurrency(baseMoney, new FullAmount(this.exchangerForm.value.amount as number, this.exchangerForm.value.currency as string)).subscribe(data => {
      this.exchangerForm.setValue({
        amount: Number(((data.exchange_rates[TO_PROPERTY] as number) * (baseMoney.amount as number)).toFixed(2)),
        currency: this.exchangerForm.value.currency
      });
    });
  }

  public distanceConvert(baseMoney: FullAmount){
    let amount = baseMoney.amount;
    let converted = 0;
    let base = baseMoney.unit;
    let target = this.exchangerForm.value.currency;
    if(base == 'm'){
      if(target == 'm')
        converted = amount;
      else if(target == 'yds')
        converted = amount * 1.093613;
      else
        converted = amount * 39.37008;
    }else if(base == 'yds'){
      if(target == 'm')
        converted = amount / 1.093613;
      else if(target == 'yds')
        converted = amount;
      else
        converted = amount / 39.37008;
    }else{
      if(target == 'm')
        converted = amount / 39.37008;
      else if(target == 'yds')
        converted = amount * 0.02777778;
      else
        converted = amount;
    }

    this.exchangerForm.setValue({
      amount: Number(converted.toFixed(2)),
      currency: this.exchangerForm.value.currency
    });
  }
}
