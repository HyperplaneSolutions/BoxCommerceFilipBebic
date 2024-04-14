import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnitExchangerComponent } from './components/unit-exchanger/unit-exchanger.component';
import { ExchangerGroupComponent } from './components/exchanger-group/exchanger-group.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UnitType } from './models/unit-type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UnitExchangerComponent, ExchangerGroupComponent, FlexLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public currencyTypes: UnitType[] = [
    { value: "EUR", viewValue: "EUR" },
    { value: "USD", viewValue: "USD" },
    { value: "CHF", viewValue: "CHF" }
  ];  
  public distanceTypes: UnitType[] = [
    { value: "m", viewValue: "meters " },
    { value: "yds", viewValue: "yards" },
    { value: "in", viewValue: "inches" }
  ];  

  constructor(){}

  title = 'boxcommerce-fronend-test';
}
