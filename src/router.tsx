import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import DefaultLayout from "./layouts/default";
import EmptyLayout from "./layouts/empty";
import IndexPage from './pages/home'
import ErrorPage from "./pages/error";

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
                        <Route path='/home' component={IndexPage} />
                        <Route path='/'>
                            <Redirect to={{pathname: '/home'}} />
                        </Route>
                    </Switch>
                </DefaultLayout>
            )}>
            </Route>
        </Switch>
    </BrowserRouter>
)
export default Routes