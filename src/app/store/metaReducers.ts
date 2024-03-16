import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../models";
import { CustomerReducer } from "./reducers/customer/customer.reducer";
import { MySalesReducer } from "./reducers/sales/sales.reducers";
// import { hydrationMetaReducer } from "src/app/store/hidratation.reducer"


export const reducers : ActionReducerMap<AppState> = {
    Customer : CustomerReducer,
    MySales : MySalesReducer
}

export function debug( reducer: ActionReducer<string> ): ActionReducer<string>{
    return function ( state , action ){
        return reducer(state , action);
    }
}

export const metaReducers : MetaReducer[] = [
    // hydrationMetaReducer,
    debug
]