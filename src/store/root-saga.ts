import { all, fork } from "redux-saga/effects";
import CurrenciesSaga from './currencies/saga'

const RootSaga = function* () {
    yield all([fork(CurrenciesSaga)]);
}
export default RootSaga