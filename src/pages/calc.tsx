import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCookies} from "react-cookie";

import {getCurrencies} from "../store/currencies/actionCreators";
import NotificationCreator from "../plugins/notification-creator";
import Search from '../components/search'
import {ICurrencyState} from "../store/currencies/types";

const CalcPage:React.FC = () => {
    const [cookie] = useCookies()
    const state = useSelector((state: {currencies: ICurrencyState}) => state.currencies)

    const dispatch = useDispatch()

    const onSearch :(str: string) => void = (str: string) => {
        if(str === "") NotificationCreator('Пусто!');

        const splitVal: any = str.split(" ")
        if(splitVal.length < 4) NotificationCreator('Не валидное значение!', 'Введите пожалуйста в формате: 15 usd in rub')
        else dispatch(getCurrencies(`?base=${splitVal[1].toUpperCase()}&amount=${splitVal[0]}&symbols=${splitVal[3].toUpperCase()}`))
    }

    return (
        <>
            <Search loading={state.loading} search={onSearch} />
            <h4 className="mt-4 text-center">{`${!state.items.rates[cookie['user-currency']] ? Object.values(state.items.rates)[0] : ''}`}</h4>
        </>
    )
}
export default CalcPage