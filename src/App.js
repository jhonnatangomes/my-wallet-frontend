import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/homePage/homePage";

export default function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
