import { Login } from "../../modules";
import { Home } from "../../modules";
import { ERoute, TRoute } from "./Routes.types";

export const routes: Array<TRoute> = [
    {
      path: ERoute.LOGIN,
      sidebar: () => <div>login!</div>,
      main: () => <Login />
    },
    {
      path: ERoute.HOME,
      sidebar: () => <div>home!</div>,
      main: () => <Home />
    }
  ];