import { Middleware } from "redux";
import { RootState } from "../store";
import { ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { ReturnStatement } from "typescript";

export const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action: any) => {
    if(!action.type) {
        return next(action);
    }

    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ', store.getState())

    next(action);

    console.log('next state: ', store.getState());
}