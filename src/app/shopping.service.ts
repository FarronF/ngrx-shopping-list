import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private SHOPPING_URL = 'http://localhost:3000/shopping'

  constructor(private http: HttpClient) { }

  getShoppingItems() {

  }

  addShoppingItem() {

  }

  deleteShoppingItem() {
    
  }
}
