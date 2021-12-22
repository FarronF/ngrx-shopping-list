import { createAction, props } from '@ngrx/store';

import { ShoppingItem } from '../models/shopping-item.model';

export const loadShopping = createAction(
    '[SHOPPING] Load Shopping',
);

export const loadShoppingSuccess = createAction(
    '[SHOPPING] Load Shopping Success',
    props<{items: ShoppingItem[]}>()
);

export const loadShoppingFailure = createAction(
    '[SHOPPING] Load Shopping Failure',
    props<{error: Error}>()
);

export const addItem = createAction(
    '[SHOPPING] Add Item',
    props<{item: ShoppingItem}>()
);

export const addItemSuccess = createAction(
    '[SHOPPING] Add Item Success',
    props<{item: ShoppingItem}>()
);

export const addItemFailure = createAction(
    '[SHOPPING] Add Item Failure',
    props<{error: Error}>()
);

export const deleteItem = createAction(
    '[SHOPPING] Delete Item',
    props<{id: string}>()
);

export const deleteItemSuccess = createAction(
    '[SHOPPING] Delete Item Success',
    props<{id: string}>()
);

export const deleteItemFailure = createAction(
    '[SHOPPING] Delete Item Failure',
    props<{error: Error}>()
);