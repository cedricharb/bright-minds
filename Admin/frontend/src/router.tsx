import { AppShell, Navbar } from "@mantine/core";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import {
  Route,
  Outlet,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const Layout = () => (
  <AppShell
    padding={0}
    navbar={
      <Navbar width={{ base: 300 }} h="100vh" p="xs">
        <NavigationBar />
      </Navbar>
    }
  >
    <Outlet />
  </AppShell>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<>Oops</>} />
    </Route>
  )
);

export default router;
