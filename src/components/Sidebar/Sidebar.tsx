import { Box, Typography, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Box
      sx={{
        flexDirection: { xs: "row", sm: "column" },
      }}
      className="sidebar__wrapper"
    >
      <Stack direction="column" sx={{ gap: "10px" }}>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/intro"
            style={{
              color: "#fff",
            }}
          >
            <Typography>Intro</Typography>
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/tutorial/JSX"
            style={{
              color: "#fff",
            }}
          >
            <Typography>Basics</Typography>
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/tutorial/JSX"
            style={{
              color: "#fff",
            }}
          >
            <Typography sx={{ marginLeft: "25px" }}>- JSX</Typography>
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/tutorial/Component"
            style={{
              color: "#fff",
            }}
          >
            <Typography sx={{ marginLeft: "25px" }}>- Component</Typography>
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/tutorial/Props"
            style={{
              color: "#fff",
            }}
          >
            <Typography sx={{ marginLeft: "25px" }}>- Props</Typography>
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/tutorial/Events"
            style={{
              color: "#fff",
            }}
          >
            <Typography sx={{ marginLeft: "25px" }}>- Events</Typography>
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/tutorial/Conditionals"
            style={{
              color: "#fff",
            }}
          >
            <Typography sx={{ marginLeft: "25px" }}>- Conditions</Typography>
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/tutorial/Hooks"
            style={{
              color: "#fff",
            }}
          >
            <Typography sx={{ marginLeft: "25px" }}>- Hooks</Typography>
          </NavLink>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/tutorial/Next"
            style={{
              color: "#fff",
            }}
          >
            <Typography sx={{ marginLeft: "25px" }}>- Next?</Typography>
          </NavLink>
        </motion.div>

        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/"
            style={{
              color: "#fff",
            }}
          >
            <Typography>back</Typography>
          </NavLink>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Sidebar;
