import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import DefaultLayout from "./layouts/default";
import EmptyLayout from "./layouts/empty";
import CalcPage from './pages/calc'
import ErrorPage from "./pages/error";
import ExchangesPage from "./pages/exchanges";

const Routes:React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/error' render={() => (
                <EmptyLayout>
                    <Route path='/error' component={ErrorPage} />
                </EmptyLayout>
            )}/>
            <Route path='/' render={() => (
                <DefaultLayout>
                    <Switch>
                        <Route path='/exchanges' component={ExchangesPage} />
                        <Route path='/calc' component={CalcPage} />
                        <Route path='/'>
                            <Redirect to={{pathname: '/exchanges'}} />
                        </Route>
                    </Switch>
                </DefaultLayout>
            )}>
            </Route>
        </Switch>
    </BrowserRouter>
)
export default Routes