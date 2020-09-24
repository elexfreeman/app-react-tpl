import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as SampleModule, StoreStateI as SampleModuleState } from "../SampleModule/Reducer";
import thunk from 'redux-thunk';

/**
 * Описание общего сотояния
 */
export interface StoreStateI {
    SampleModule: SampleModuleState, 
}

const reducer = combineReducers({
    SampleModule,
});

const store = createStore(
    reducer,
    applyMiddleware(thunk),
);



export default store
