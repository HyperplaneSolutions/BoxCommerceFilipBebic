import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UnitExchangerComponent } from '../unit-exchanger/unit-exchanger.component';
import { FullAmount } from '../../models/full-amount';
import { UnitType } from '../../models/unit-type';

@Component({
  selector: 'app-exchanger-group',
  standalone: true,
  imports: [UnitExchangerComponent],
  templateUrl: './exchanger-group.component.html',
  styleUrl: './exchanger-group.component.css'
})
export class ExchangerGroupComponent{
  @Input() unitTypes!: UnitType[];
  @Input() conversionType!: string;

  @ViewChild("leftExchanger") leftExchanger!: UnitExchangerComponent;
  @ViewChild("rightExchanger") rightExchanger!: UnitExchangerComponent;

  constructor(){}

  triggerConversion(fullAmount: FullAmount, id: number){
    if(this.conversionType == 'distance'){
      if(this.leftExchanger.id == id){
        this.rightExchanger.distanceConvert(fullAmount);
      }else{
        this.leftExchanger.distanceConvert(fullAmount);
      }
    }else{
      if(this.leftExchanger.id == id){
        this.rightExchanger.exchange(fullAmount);
      }else{
        this.leftExchanger.exchange(fullAmount);
      }
    }
  }
}
