import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Navbar,
  useMantineTheme,
} from "@mantine/core";
import LandingPage from "./pages/LandingPage";
import {
  Route,
  Outlet,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ClassesPage from "./pages/Classes";
import FAQ from "./pages/FAQ";
import Camps from "./pages/Camps";
import { useState } from "react";

const Layout = () => {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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
      <Route path="" element={<Navigate to="/landing-page" replace />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/classes" element={<ClassesPage />} />
      <Route path="/tutoring" element={<span>Tutoring</span>} />
      <Route path="/camps" element={<Camps />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<>Oops</>} />
    </Route>
  )
);

export default router;
