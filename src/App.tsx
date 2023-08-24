import { useContext, useState } from "react";
//router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import JSXPost from "./components/Post/JSXPost";
import ComponentPost from "./components/Post/ComponentPost";
import PropsPost from "./components/Post/PropsPost";
import EventsPost from "./components/Post/EventsPost";
import ConditionalsPost from "./components/Post/ConditionalsPost";
import HooksPost from "./components/Post/HooksPost";
import NextPost from "./components/Post/NextPost";
import Sidebar from "./components/Sidebar/Sidebar";
import IntroPost from "./components/IntroPost/IntroPost";
import { MiniMenuContext } from "./context/MiniMenuContext";
import MiniSidebar from "./components/Sidebar/MiniSidebar";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
const Layout2 = () => {
  const { miniMenu, handleMenuToggle } = useContext(MiniMenuContext);
  return (
    <Box display="flex" justifyContent="center" className="container">
      <Box
        sx={{ position: "fixed", top: "25px", left: "25px" }}
        className="miniMenu__box"
      >
        {miniMenu ? (
          <Box display="flex" sx={{ position: "relative", gap: "0.6rem" }}>
            <CloseIcon
              onClick={handleMenuToggle}
              style={{ fontSize: "2.5rem" }}
            />
          </Box>
        ) : (
          <Box display="flex" sx={{ position: "relative", gap: "0.6rem" }}>
            <MenuIcon
              onClick={handleMenuToggle}
              style={{ fontSize: "2.5rem" }}
            />
          </Box>
        )}
      </Box>
      {miniMenu && <MiniSidebar />}
      <Sidebar />
      <Outlet />
    </Box>
  );
};
const Layout3 = () => {
  const { miniMenu, handleMenuToggle } = useContext(MiniMenuContext);
  return (
    <Box display="flex" justifyContent="center" className="container">
      <Box
        sx={{ position: "fixed", top: "25px", left: "25px" }}
        className="miniMenu__box"
      >
        {miniMenu ? (
          <Box display="flex" sx={{ position: "relative", gap: "0.6rem" }}>
            <CloseIcon
              onClick={handleMenuToggle}
              style={{ fontSize: "2.5rem" }}
            />
          </Box>
        ) : (
          <Box display="flex" sx={{ position: "relative", gap: "0.6rem" }}>
            <MenuIcon
              onClick={handleMenuToggle}
              style={{ fontSize: "2.5rem" }}
            />
          </Box>
        )}
      </Box>
      {miniMenu && <MiniSidebar />}
      <Sidebar />
      <Outlet />
    </Box>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/intro",
      element: <Layout2 />,

      children: [
        {
          path: "/intro",
          element: <IntroPost />,
        },
      ],
    },
    {
      path: "/tutorial",
      element: <Layout3 />,

      children: [
        {
          path: "/tutorial/JSX",
          element: <JSXPost />,
        },
        {
          path: "/tutorial/Component",
          element: <ComponentPost />,
        },
        {
          path: "/tutorial/Props",
          element: <PropsPost />,
        },
        {
          path: "/tutorial/Events",
          element: <EventsPost />,
        },
        {
          path: "/tutorial/Conditionals",
          element: <ConditionalsPost />,
        },
        {
          path: "/tutorial/Hooks",
          element: <HooksPost />,
        },
        {
          path: "/tutorial/Next",
          element: <NextPost />,
        },
      ],
    },
  ]);

  return (
    <>
      <Box>
        <RouterProvider router={router} />
      </Box>
      <Footer />
    </>
  );
}

export default App;
