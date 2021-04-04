import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Layout, Select} from "antd";
import {Content, Footer, Header } from "antd/lib/layout/layout";

import logo from '../static/logo.png'
import {ICurrencyState} from "../store/currencies/types";
import {getCurrencies} from "../store/currencies/actionCreators";
import {useCookies} from "react-cookie";

const { Option } = Select;

const DefaultLayout :React.FC = ({children}) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [activeCurrency, setActiveCurrency] = useState(cookies['user-currency'] || "RUB")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrencies(""))
    }, [dispatch])

    const changeHandler: (val: string) => void = (val) => {
        setActiveCurrency(val)
        removeCookie('user-currency')
        setCookie('user-currency', val)
        getCurrencies(cookies['user-currency'])
    }

    const currenciesItems = useSelector((state: {currencies: ICurrencyState}) => state.currencies.items)

    return (
        <Layout className="app-layout">
            <div className="container d-flex flex-column h-100">
                <Header className="app-header">
                    <Link to={{pathname: '/exchanges'}} className="logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <Link to={{pathname: '/exchanges'}}>
                        <p className="mb-0">Курсы валют</p>
                    </Link>
                    <Link to={{pathname: '/calc'}}>
                        <p className="ml-3 mb-0">Конвертер</p>
                    </Link>
                    <div className="currency">
                        <span className="mr-3">
                            Активная валюта:
                        </span>
                        <Select
                            defaultValue={activeCurrency}
                            loading={!currenciesItems}
                            className="app-select"
                            style={{ width: 70 }}
                            onChange={changeHandler}
                            onFocus={() => dispatch(getCurrencies(""))}
                        >
                            {Object.keys(currenciesItems.rates).map(curr => <Option key={`key-${curr}`} value={curr}>{curr}</Option>)}
                        </Select>
                    </div>
                </Header>
                <Content className="app-content">
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </div>

        </Layout>
    )
}

export default DefaultLayout