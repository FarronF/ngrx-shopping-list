import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { addItem, deleteItem, loadShopping } from './store/actions/shopping.actions';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list';
  shoppingItems$: Observable<ShoppingItem[]>;
  newShoppingItem: ShoppingItem = {id: '', name: ''};

  constructor(private store: Store<AppState>) {
    this.shoppingItems$ = this.store.select(store => store.shopping)
  }

  ngOnInit(): void {
    this.store.dispatch(loadShopping());
  }

  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(addItem({item: this.newShoppingItem}));
    this.newShoppingItem = { id: '', name: '' }
  }

  deleteItem(id: string) {
    this.store.dispatch(deleteItem({id: id}));
  }
}
