import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import { useState } from "react";
import DepositAndWithdrawal from "./components/depositAndWithdrawal/depositAndWithdrawal";

export default function App() {
    const [userId, setUserId] = useState(1);
    return (
        <>
            <Router>
                <GlobalStyle />
                <Switch>
                    <Route path="/" exact>
                        <HomePage userId={userId} />
                    </Route>
                    <Route path="/deposit" exact>
                        <DepositAndWithdrawal userId={userId} />
                    </Route>
                    <Route path="/withdrawal" exact>
                        <DepositAndWithdrawal userId={userId} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
