import { Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import TutorialIntro from "../../components/Post/TutorialIntro";
const Intro = () => {
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
        <TutorialIntro />
      </Grid>
    </Grid>
  );
};

export default Intro;
