import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      marginTop="50px"
      padding="40px"
      gap="20px"
      sx={{
        flexDirection: { xs: "row", sm: "column" },
        minHeight: "100%",
        backgroundColor: "#1976d2",
        // borderRight: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack direction="column" sx={{ gap: "10px" }}>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <Link
            to="/intro"
            style={{
              color: "#fff",
            }}
          >
            <Typography>Tutorial - Intro</Typography>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3, originX: 0 }}>
          <Link
            to="/tutorial"
            style={{
              color: "#fff",
            }}
          >
            <Typography>Tutorial - Basics</Typography>
          </Link>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Sidebar;
