import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, tap, throwError } from 'rxjs';
import { environment } from '../../assets/environments/environment';
import { ExchangeRate } from '../models/exchange-rate';
import { Money } from '../models/money';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private APIKEY_PARAM = 'api_key=';
  private BASE_PARAM = 'base=';
  private TO_PARAM = 'target=';

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  convertCurrency(moneyFrom: Money, moneyTo: Money): Observable<ExchangeRate> {
    let endpoint = this.apiUrl + '?' + this.APIKEY_PARAM + this.apiKey + '&' + this.BASE_PARAM + moneyFrom.currencyCode + '&' + this.TO_PARAM + moneyFrom.currencyCode;
    return this.httpClient
      .get<ExchangeRate>(endpoint)
      .pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => message);
  }
}
