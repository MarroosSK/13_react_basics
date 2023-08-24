import { Box, Container, Button, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Title from "../Title/Title";
import { introData } from "../../helpers/tutorialData";
import { Link, NavLink } from "react-router-dom";
import viteImage from "../../assets/viteImage.jpg";
import "./IntroPost.css";

const IntroPost = () => {
  const code = `npm create vite@latest .`;
  const code2 = `npm i`;
  const code3 = `npm run dev`;

  return (
    <Box>
      <Container>
        <Box
          marginTop="70px"
          paddingTop="40px"
          marginBottom="70px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className="intro__wrapper"
        >
          <Title text="Tutorial - Intro" />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={"50px"}
            maxWidth="600px"
          >
            <Box>
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

              <Typography marginTop="35px">
                {introData.settingUptext2}
              </Typography>
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
              <Typography marginTop="35px">
                {introData.settingUptext3}
              </Typography>
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
              <Typography marginTop="35px">
                {introData.settingUptext4}
              </Typography>
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
              <Typography marginTop="35px">
                {introData.settingUptext5}
              </Typography>
              <img
                src={viteImage}
                style={{ alignSelf: "center", maxWidth: "100%" }}
              />
            </Box>
            <NavLink to="/tutorial/JSX">
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
                  display: "flex",
                  flexDirection: " column",
                }}
              >
                <Typography>Start</Typography>
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default IntroPost;
