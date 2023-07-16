import { Box, Container, Grid, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Title from "../Title/Title";
import { introData } from "../../helpers/tutorialData";
import { Link } from "react-router-dom";
import viteImage from "../../assets/viteImage.jpg";
const TutorialIntro = () => {
  const code = `npm create vite@latest .`;
  const code2 = `npm i`;
  const code3 = `npm run dev`;

  return (
    <Container>
      <Box
        marginTop="90px"
        marginBottom="70px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Title text="Tutorial - Intro" />
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop={"25px"}
        >
          <Grid item maxWidth="900px">
            <Typography>{introData.description}</Typography>
            <Typography variant="h5" fontWeight="bold" margin="35px 0">
              How does React work?
            </Typography>
            <Typography fontWeight="bold" margin="20px 0">
              {introData.howItWorks1title}
            </Typography>
            <Typography>{introData.howItWorks1text}</Typography>
            <Typography fontWeight="bold" margin="20px 0">
              {introData.howItWorks2title}
            </Typography>
            <Typography>{introData.howItWorks2text}</Typography>
            <Typography variant="h5" fontWeight="bold" margin="35px 0">
              {introData.settingUp}
            </Typography>

            <Typography>
              <span>
                {introData.settingUptext}

                <Link
                  to="https://code.visualstudio.com"
                  style={{ textDecoration: "underline" }}
                  target="_blank"
                >
                  here.
                </Link>
              </span>
            </Typography>
            <Typography>
              <span>
                {introData.settingUptext1}

                <Link
                  to="https://nodejs.org/en"
                  style={{ textDecoration: "underline" }}
                  target="_blank"
                >
                  here.
                </Link>
              </span>
            </Typography>

            <Typography marginTop="35px">{introData.settingUptext2}</Typography>
            <SyntaxHighlighter
              language="jsx"
              style={darcula}
              sx={{ maxWidth: "100%" }}
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
            >
              {code}
            </SyntaxHighlighter>
            <Typography marginTop="35px">{introData.settingUptext3}</Typography>
            <SyntaxHighlighter
              language="jsx"
              style={darcula}
              sx={{ maxWidth: "100%" }}
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
            >
              {code2}
            </SyntaxHighlighter>
            <Typography marginTop="35px">{introData.settingUptext4}</Typography>
            <SyntaxHighlighter
              language="jsx"
              style={darcula}
              sx={{ maxWidth: "100%" }}
              lineProps={{
                style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
              }}
              wrapLines={true}
            >
              {code3}
            </SyntaxHighlighter>
            <Typography marginTop="35px">{introData.settingUptext5}</Typography>
            <img
              src={viteImage}
              style={{ alignSelf: "center", maxWidth: "100%" }}
            />
          </Grid>
          <Link to="/tutorial">
            <Box
              width="150px"
              marginTop="20px"
              display="flex"
              flexDirection="column"
              sx={{
                border: "1px solid gray",
                padding: "10px",
                borderRadius: "7px",
              }}
            >
              <Typography>NEXT</Typography>
              <Typography>Tutorial - Basics</Typography>
            </Box>
          </Link>
        </Grid>
      </Box>
    </Container>
  );
};

export default TutorialIntro;
