import { AppShell, Navbar } from "@mantine/core";
import "./App.css";
import LandingPage from "./pages/LandingPage";
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
      <Route path="" element={<Navigate to="/landing-page" replace />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="*" element={<>Oops</>} />
    </Route>
  )
);

export default router;
