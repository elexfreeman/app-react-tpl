import { ReducerPayloadI } from "../Sys/ReduxI";
import Constants from "./Constants";
import { StoreStateI } from "./Reducer";

export type PayloadT = (param: ReducerPayloadI<StoreStateI>) => void;

/**
 * Пример асинхронного события 
 * @param nParamA 
 */
export const fSetParamA = (nParamA: number) => async (dispatch: PayloadT) => {
    setTimeout(() => {
        dispatch({
            type: Constants.sSetParamA,
            payload: {
                nParamA: nParamA,
            }
        });
    }, 3000)
}