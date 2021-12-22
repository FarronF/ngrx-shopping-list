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

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
