import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <Route {...rest}>
      {token ? (
        children
      ) : (
        <Redirect to={{ pathname: "/auth/login", state: { from: location } }} />
      )}
    </Route>
  );
}
