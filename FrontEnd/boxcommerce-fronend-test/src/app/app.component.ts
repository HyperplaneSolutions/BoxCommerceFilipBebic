import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyExchangerComponent } from './components/currency-exchanger/currency-exchanger.component';
import { ExchangerGroupComponent } from './components/exchanger-group/exchanger-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyExchangerComponent, ExchangerGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boxcommerce-fronend-test';
}
