import { AppShell, Navbar, useMantineTheme } from "@mantine/core";
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
      <Route path="" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<>Oops</>} />
    </Route>
  )
);

export default router;
