import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addItem } from './store/actions/shopping.actions';
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
  constructor(private store: Store<AppState>) {
    this.shoppingItems$ = this.store.select(store => store.shopping)
  }

  ngOnInit(): void {
    setTimeout(() => this.addItem(), 3000)
  }

  addItem() {
    this.store.dispatch(addItem({payload: {id: '7161d2c8-be0c-4f51-b767-938014a07e02', name:'Chopped Tomatoes'}}))
  }
}
