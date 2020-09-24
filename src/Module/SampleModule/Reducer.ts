import { ReducerPayloadI } from "../Sys/ReduxI";
import Constants from "./Constants";

export interface StoreStateI {
    nParamA?: number;
    nParamB?: number;
}

//=================================
const initialState: StoreStateI = {
    nParamA: 0,
    nParamB: 0,
}



export const reducer = (state: StoreStateI = initialState, R: ReducerPayloadI<StoreStateI>) => {
    switch (R.type) {
        case Constants.sSetParamA:
            return {
                ...state,
                ...R.payload
            };
        case Constants.sSetParamB:
            return {
                ...state,
                ...R.payload
            };
        default:
            return state;
    }
};

