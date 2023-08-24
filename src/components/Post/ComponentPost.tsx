import { Box, Typography, Button, Container } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Title from "../Title/Title";
import { postslData } from "../../helpers/tutorialData";
import { useEffect } from "react";
import "./Post.css";
import { NavLink } from "react-router-dom";

const ComponentPost = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
          className="post__wrapper"
        >
          <Title text="Tutorial - Basics" />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={"50px"}
            maxWidth="600px"
          >
            <Box>
              <Typography variant="h5" fontWeight="bold" margin="35px 0">
                {postslData[1].title}
              </Typography>
              <Typography>{postslData[1].text}</Typography>
              <Typography fontWeight="bold" margin="20px 0">
                {postslData[1].text1}
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
                {postslData[1].code1}
              </SyntaxHighlighter>
              <Typography fontWeight="bold" margin="20px 0">
                {postslData[1].text2}
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
                {postslData[1].code2}
              </SyntaxHighlighter>
              <Typography fontWeight="bold" margin="20px 0">
                {postslData[1].text3}
              </Typography>
              <Typography>{postslData[1].text4}</Typography>
            </Box>
          </Box>
          <Box
            marginTop="20px"
            marginBottom="40px"
            display="flex"
            gap="30px"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", sm: " space-between" },
            }}
          >
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
                <Typography>Previous</Typography>
              </Button>
            </NavLink>

            <NavLink to="/tutorial/Props">
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
                <Typography>NEXT</Typography>
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ComponentPost;
