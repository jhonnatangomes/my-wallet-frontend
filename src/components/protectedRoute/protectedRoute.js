import { checkUser } from "../../api/api";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Route } from "react-router";

export default function ProtectedRoute({ component: Component, ...rest }) {
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        if (!localStorage.user) {
            history.push("/sign-in");
            return null;
        }
        const { token } = JSON.parse(localStorage.user);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = checkUser(config);
        promise
            .then(() => setIsAuthenticated(true))
            .catch(() => {
                history.push("/sign-in");
                return null;
            });
    }, []);

    if (!isAuthenticated) return null;
    return (
        <Route>
            <Component {...rest} />
        </Route>
    );
}
