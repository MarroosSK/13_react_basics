import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Post from "../../components/Post/Post";

const Tutorial = () => {
  return (
    <Grid
      container
      display="flex"
      minHeight="100vh"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Grid item xs={12} md={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={10}>
        <Post />
      </Grid>
    </Grid>
  );
};

export default Tutorial;
