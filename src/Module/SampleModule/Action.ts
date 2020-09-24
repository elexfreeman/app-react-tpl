import { type } from "os";
import { ReducerPayloadI } from "../Sys/ReduxI";
import Constants from "./Constants";
import { StoreStateI } from "./Reducer";

export type PayloadT = (param: ReducerPayloadI<StoreStateI>) => void;
export type TSetParamA = (nParamA: number) => void;

/**
 * Пример асинхронного события 
 * @param nParamA 
 */
export const fSetParamA = (nParamA: number) => (dispatch: PayloadT) => {
    return new Promise(async (resolve, reject) => {
        dispatch({
            type: Constants.sSetParamA,
            payload: {
                nParamA: nParamA,
            }
        });
        resolve(true)
    })
}