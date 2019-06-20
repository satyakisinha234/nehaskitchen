import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {

  constructor(private httpClient:HttpClient) { }

  getFoodItems(){
     return this.httpClient.get('../assets/food.json');
  }

}
