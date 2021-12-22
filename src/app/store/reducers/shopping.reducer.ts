import { Action, createReducer, on } from '@ngrx/store';

import * as ShoppingActions from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';

export interface ShoppingState {
    list: ShoppingItem[],
    loading: boolean,
    error: Error | undefined,
}

const initialState: ShoppingState = {
    list: [],
    loading: false,
    error: undefined
}

const reducer = createReducer(
  initialState,
  on(ShoppingActions.loadShopping, (state) => {
    return { ...state, loading: true };
  }),
  on(ShoppingActions.loadShoppingSuccess, (state, action) => {
    return { ...state, list: action.items, loading: false };
  }),
  on(ShoppingActions.loadShoppingFailure, (state, action) => {
    return { ...state, loading: false, error: action.error };
  }),
  on(ShoppingActions.addItem, (state, action) => {
    return { ...state, loading: true };
  }),
  on(ShoppingActions.addItemSuccess, (state, action) => {
    return { ...state, list: action.items, loading: false };
  }),
  on(ShoppingActions.addItemFailure, (state, action) => {
    return { ...state, loading: false, error: action.error };
  }),
  on(ShoppingActions.deleteItem, (state, action) => {
    return { ...state, loading: true };
  }),
  on(ShoppingActions.deleteItemSuccess, (state, action) => {
    return {
      ...state,
      list: state.list.filter((item) => item.id !== action.id),
      loading: false,
    };
  }),
  on(ShoppingActions.deleteItemFailure, (state, action) => {
    return { ...state, loading: false, error: action.error };
  })
);
 
 export function ShoppingReducer(state: ShoppingState | undefined, action: Action) {
   return reducer(state, action);
 }