import {combineReducers} from 'redux';
import {CurrencyReducer} from "./currencies/reducer";

const rootReducer = combineReducers({
    currencies: CurrencyReducer
})

export default rootReducer;