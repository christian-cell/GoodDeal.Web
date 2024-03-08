import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../models";
import { CustomerReducer } from "./reducers/customer/customer.reducer";
// import { hydrationMetaReducer } from "src/app/store/hidratation.reducer"


export const reducers : ActionReducerMap<AppState> = {
    customer : CustomerReducer
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