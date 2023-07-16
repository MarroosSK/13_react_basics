import { Box, Grid, Typography } from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Title from "../../components/Title/Title";
import Advantages from "../../components/Advantages/Advantages";

const Home = () => {
  return (
    <Grid display="flex" flexDirection="column">
      <Box position="relative" className="heroPic">
        <Box className="heroPic-text">
          <Title text={"ReacTY - basics of React"} />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="5px"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Typography>React Tutorial - 10 min</Typography>
            <TimerOutlinedIcon />
          </Box>
        </Box>
      </Box>
      <Box>
        <Advantages />
      </Box>
    </Grid>
  );
};

export default Home;
