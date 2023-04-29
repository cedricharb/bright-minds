import { AppShell, Navbar, useMantineTheme } from "@mantine/core";
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

const Layout = () => {
  const theme = useMantineTheme();

  return (
    <AppShell
      padding={0}
      navbar={
        <Navbar
          width={{ base: 250 }}
          h="100vh"
          p="xs"
          bg={theme.colors.gray[4]}
        >
          <NavigationBar />
        </Navbar>
      }
    >
      <Outlet />
    </AppShell>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<Navigate to="/landing-page" replace />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/classes" element={<span>Classes</span>} />
      <Route path="/tutoring" element={<span>Tutoring</span>} />
      <Route path="/camps" element={<span>Camps</span>} />
      <Route path="*" element={<>Oops</>} />
    </Route>
  )
);

export default router;
