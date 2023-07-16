import Header from "./components/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Home from "./pages/Home/Home";
import Tutorial from "./pages/Tutorial/Tutorial";
import Intro from "./pages/Intro/Intro";
import Footer from "./components/Footer/Footer";
import { useLayoutEffect } from "react";

function App() {
  //scroll
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <Header />

      <Grid container display="flex" sx={{ flexDirection: { xs: "column" } }}>
        <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/tutorial" element={<Tutorial />} />
          </Routes>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
