import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Navbar,
  useMantineTheme,
} from "@mantine/core";
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
import { useState } from "react";

const Layout = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const theme = useMantineTheme();
  console.log(colorScheme);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
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
      </MantineProvider>
    </ColorSchemeProvider>
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
