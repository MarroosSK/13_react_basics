import { FaReact } from "react-icons/fa";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useScroll } from "../../hooks/useScroll";
const Header = () => {
  const { scrolled } = useScroll();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <Box
        sx={{ maxWidth: "50rem" }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="0 auto"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="5px"
        >
          <Link to="/">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="5px"
            >
              <FaReact color="grey" size="35" />
              <Typography>ReacTY</Typography>
            </Box>
          </Link>
        </Box>
        <Box flexGrow="1" marginLeft="20px">
          <Link to="/intro">
            <Typography>Tutorial</Typography>
          </Link>
        </Box>
        <Box>
          <IconButton onClick={goToTop}>
            {scrolled && <ExpandLessSharpIcon />}
          </IconButton>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
