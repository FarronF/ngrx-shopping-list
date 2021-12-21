import { Action, createReducer, on } from "@ngrx/store";
import { addItem, deleteItem } from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item.model";

const initialState: ShoppingItem[] = [
    {
        id: '7099f63c-0ef1-443d-8913-dc89044a7198',
        name: 'Chick Peas',
    },
    {
        id: 'c73cf6e3-77b6-4426-8cd3-c8fd38e5fa7b',
        name: 'Coconut milk',
    }
]

const reducer = createReducer(
    initialState,
    on(addItem, (state, action) => {
       return [...state, action.payload]
    }),
    on(deleteItem, (state, action) => {
        return [...state.filter(item => item.id !== action.id)];
    })
 );
 
 export function ShoppingReducer(state: Array<ShoppingItem> | undefined, action: Action) {
   return reducer(state, action);
 }