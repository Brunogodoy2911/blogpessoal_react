import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { AppRoutes } from "./AppRoutes";

export function Routes() {
  // const { usuario, isLoading } = React.useContext(AuthContext);

  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
