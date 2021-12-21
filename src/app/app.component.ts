import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem, deleteItem } from './store/actions/shopping.actions';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';
import { v4 as uuid } from 'uuid';

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
  }

  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(addItem({payload: this.newShoppingItem}));
    this.newShoppingItem = { id: '', name: '' }
  }

  deleteItem(id: string) {
    this.store.dispatch(deleteItem({id: id}));
  }
}
