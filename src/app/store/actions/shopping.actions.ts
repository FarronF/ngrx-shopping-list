import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export const addItem = createAction(
    '[SHOPPING] Add Item',
    props<{payload: ShoppingItem}>()
);

export const deleteItem = createAction(
    '[SHOPPING] Delete Item',
    props<{id: string}>()
);