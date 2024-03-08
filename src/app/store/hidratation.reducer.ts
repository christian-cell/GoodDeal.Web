// hydration reducer
import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { AppState } from "../models";
 
export const hydrationMetaReducer = (

  reducer: ActionReducer<AppState>

): ActionReducer<AppState> => {

  return (state, action) => {

    if (action.type === INIT || action.type === UPDATE) {

      const storageValue = localStorage.getItem("state");

      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }

    const nextState = reducer(state, action);

    /* pay attention about what you keep in localStorage , deppend on browser limits of localStorage are arround 5MB */

    window.onbeforeunload = function(/* event */)
    {
      const stateToStore = { /* Customer : nextState.customer */ /* , PrescriptionsFilters : nextState.PrescriptionsFilters */ };

      localStorage.setItem("state", JSON.stringify(stateToStore));

      return nextState;
    };

  };
};