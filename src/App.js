import GlobalStyle from "./styles/globalStyles";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import Login from "./components/login/login";
import DepositAndWithdrawal from "./components/depositAndWithdrawal/depositAndWithdrawal";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";

export default function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Switch>
                    <Route path="/" exact>
                        <ProtectedRoute component={HomePage} />
                    </Route>
                    <Route path="/sign-in" exact>
                        <Login />
                    </Route>
                    <Route path="/sign-up" exact>
                        <Login />
                    </Route>
                    <Route path="/deposit" exact>
                        <ProtectedRoute component={DepositAndWithdrawal} />
                    </Route>
                    <Route path="/withdrawal" exact>
                        <ProtectedRoute component={DepositAndWithdrawal} />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    );
}
