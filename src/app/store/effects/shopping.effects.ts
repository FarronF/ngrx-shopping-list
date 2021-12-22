import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ShoppingService } from 'src/app/shopping.service';

import * as ShoppingActions from '../actions/shopping.actions';

@Injectable()
export class ShoppingEffects {

    loadShopping$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ShoppingActions.loadShopping),
        exhaustMap(action =>
          this.shoppingService.getShoppingItems().pipe(
            map(items => ShoppingActions.loadShoppingSuccess({ items: items })),
            catchError(error => of(ShoppingActions.loadShoppingFailure({ error: error })))
          )
        )
      )
    );

    addItem$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ShoppingActions.addItem),
        exhaustMap(action =>
          this.shoppingService.addShoppingItem(action.item).pipe(
            map(() => ShoppingActions.addItemSuccess({ item: action.item })),
            catchError(error => of(ShoppingActions.addItemFailure({ error: error })))
          )
        )
      )
    );

    deleteItem$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ShoppingActions.deleteItem),
        exhaustMap(action =>
          this.shoppingService.deleteShoppingItem(action.id).pipe(
            map(() => ShoppingActions.deleteItemSuccess({ id: action.id })),
            catchError(error => of(ShoppingActions.deleteItemFailure({ error: error })))
          )
        )
      )
    );

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
