import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';

  constructor(private httpClient: HttpClient){}
}