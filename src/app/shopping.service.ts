import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private SHOPPING_URL = 'http://localhost:3000/shopping'
  private DELAY_TIME = 500;

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return this.http.get(this.SHOPPING_URL).pipe(delay(this.DELAY_TIME));
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.SHOPPING_URL, shoppingItem).pipe(delay(this.DELAY_TIME));
  }

  deleteShoppingItem(id: string) {
    return this.http.delete(`this.SHOPPING_URL/${id}`).pipe(delay(this.DELAY_TIME));
  }
}
