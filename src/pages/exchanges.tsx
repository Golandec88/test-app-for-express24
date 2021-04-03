import React, {useEffect} from "react";
import { List } from "antd";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";

import {ICurrencyState} from "../store/currencies/types";
import {getCurrencies} from "../store/currencies/actionCreators";
import useInterval from "../plugins/use-interval";

const ExchangesPage: React.FC = () => {
    const [cookies] = useCookies()
    const state = useSelector((state: {currencies: ICurrencyState}) => state.currencies)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrencies(`?base=${cookies['user-currency']}`))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cookies])
    useInterval(() => {
        dispatch(getCurrencies(`?base=${cookies['user-currency']}`))
    }, 15000)

    return (
        <List
            size="small"
            className="app-list"
            bordered
            itemLayout="horizontal"
            dataSource={Object.keys(state.items.rates)}
            renderItem={item => (
                <List.Item>
                    <span>{item}</span>
                    <div style={{marginLeft: "auto"}} />
                    <span>{state.items.rates[item]}</span>
                </List.Item>

            )}
        />
    )
}

export default ExchangesPage