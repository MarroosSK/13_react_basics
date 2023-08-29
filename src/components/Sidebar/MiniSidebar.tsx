import { Box, Typography, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Sidebar.css";
import { useContext, useEffect, useRef } from "react";
import { MiniMenuContext } from "../../context/MiniMenuContext";

const MiniSidebar = () => {
  const sideMenuRef = useRef<HTMLDivElement | null>(null);
  const { miniMenu, handleMenuToggle } = useContext(MiniMenuContext);

  //close on click outside (type made by ChatGPT)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(e.target as Node)
      ) {
        handleMenuToggle();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, [handleMenuToggle]);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: 999,
          width: "100%",
          height: "75%",
        }}
        className="sidebar__wrapper_mini"
        ref={sideMenuRef}
      >
        <Stack direction="column" sx={{ gap: "10px" }}>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/intro"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                Intro
              </Typography>
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/tutorial/JSX"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                Basics
              </Typography>
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/tutorial/JSX"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                - JSX
              </Typography>
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/tutorial/Component"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                - Component
              </Typography>
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/tutorial/Props"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                - Props
              </Typography>
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/tutorial/Events"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                - Events
              </Typography>
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/tutorial/Conditionals"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                - Conditions
              </Typography>
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/tutorial/Hooks"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                - Hooks
              </Typography>
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/tutorial/Next"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                - Next?
              </Typography>
            </NavLink>
          </motion.div>

          <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              to="/"
              style={{
                color: "#fff",
              }}
              onClick={handleMenuToggle}
            >
              <Typography sx={{ marginLeft: "50px", fontSize: "1.5rem" }}>
                back
              </Typography>
            </NavLink>
          </motion.div>
        </Stack>
      </Box>
      {miniMenu && (
        <div className="overlay" onClick={() => handleMenuToggle}></div>
      )}
    </>
  );
};

export default MiniSidebar;
