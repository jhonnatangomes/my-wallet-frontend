import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/homePage/homePage";
import Login from "./components/login/login";
import DepositAndWithdrawal from "./components/depositAndWithdrawal/depositAndWithdrawal";

export default function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/sign-in" exact>
                        <Login />
                    </Route>
                    <Route path="/sign-up" exact>
                        <Login />
                    </Route>
                    <Route path="/deposit" exact>
                        <DepositAndWithdrawal />
                    </Route>
                    <Route path="/withdrawal" exact>
                        <DepositAndWithdrawal />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
