import { Switch, Route } from "react-router-dom";
import { routerList as routers } from "./routerList";
import PrivateRoute from "./../components/PrivateRoute";

export default function Router() {
  const routerList = routers.map((route, index) => {
    if (route.path === "/booking" || route.path === "/survey") {
      return (
        <PrivateRoute exact key={index} path={route.path}>
          <route.component />
        </PrivateRoute>
      );
    } else {
      return (
        <Route exact key={index} path={route.path}>
          <route.component />
        </Route>
      );
    }
  });
  return <Switch>{routerList}</Switch>;
}
