import { Box, Button, Typography } from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Title from "../../components/Title/Title";
import Advantages from "../../components/Advantages/Advantages";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Box className="home__wrapper">
      <Box className="home__top">
        <Title text={"ReacTY"} />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "19px" },
              lineHeight: "36px",
            }}
          >
            Basics of React in 10 min
          </Typography>
          <TimerOutlinedIcon />
        </Box>
        <Link to="/intro">
          <Button
            sx={{
              width: "140px",
              height: "45px",
              backgroundColor: "#fff",
              "&:hover": {
                backgroundColor: "inherit",
                color: "#fff",
                border: "1px solid #fff",
              },
            }}
          >
            Let's Begin
          </Button>
        </Link>
      </Box>
      <Box className="home__bottom">
        <Advantages />
      </Box>
    </Box>
  );
};

export default Home;
