import { Route, Routes } from "react-router";

import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";

import { NotFound } from "../components/NotFound";
import { AuthLayout } from "../components/AuthLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Cadastro />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
