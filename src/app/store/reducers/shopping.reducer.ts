import { Action, createReducer, on } from "@ngrx/store";
import { AddItemAction} from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item.model";

const initialState: ShoppingItem[] = [
    {
        id: '7099f63c-0ef1-443d-8913-dc89044a7198',
        name: 'Chick Peas',
    }
]

const reducer = createReducer(
    initialState,
    on(AddItemAction, (state, action) => {
       return [...state, action.payload]
    })
 );
 
 export function ShoppingReducer(state: Array<ShoppingItem> | undefined, action: Action) {
   return reducer(state, action);
 }