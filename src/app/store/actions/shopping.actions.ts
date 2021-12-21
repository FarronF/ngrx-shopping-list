import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export const AddItemAction = createAction(
    '[SHOPPING] Add Item',
    props<{payload: ShoppingItem}>()
);