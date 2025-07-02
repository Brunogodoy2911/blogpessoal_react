import { Route, Routes } from "react-router";

import { AppLayout } from "../components/AppLayout";
import { NotFound } from "../components/NotFound";

import Home from "../pages/home/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
