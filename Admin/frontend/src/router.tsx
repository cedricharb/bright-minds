import { AppShell, Navbar, useMantineTheme } from "@mantine/core";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Classes from "./Pages/Classes";
import {
  Route,
  Outlet,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import FAQ from "./Pages/FAQ";
import Camps from "./Pages/Camps";

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
    <>
      <Route path="/login" element={<Login />} />
      <Route path="" element={<Layout />}>
        <Route path="" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/camps" element={<Camps />} />
        <Route path="*" element={<>Oops</>} />
      </Route>
    </>
  )
);

export default router;
