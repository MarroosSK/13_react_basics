import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Title from "../Title/Title";
import { postslData } from "../../helpers/tutorialData";
import { useEffect, useState } from "react";

const Post = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const postData = postslData[currentPostIndex];

  const handleNextPost = () => {
    const nextIndex = currentPostIndex + 1;
    if (nextIndex < postslData.length) {
      setCurrentPostIndex(nextIndex);
    }
  };

  const handlePreviousPost = () => {
    const previousIndex = currentPostIndex - 1;
    if (previousIndex >= 0) {
      setCurrentPostIndex(previousIndex);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [postData]);

  const previousPostTitle =
    currentPostIndex > 0 ? postslData[currentPostIndex - 1].title : "";
  const nextPostTitle =
    currentPostIndex < postslData.length - 1
      ? postslData[currentPostIndex + 1].title
      : "";

  return (
    <Container>
      <Box
        marginTop="90px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Title text="Tutorial - Basics" />
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop={"25px"}
        >
          <Grid item>
            <Typography variant="h5" fontWeight="bold" margin="35px 0">
              {postData.title}
            </Typography>
            <Typography>{postData.text}</Typography>
            <Typography fontWeight="bold" margin="20px 0">
              {postData.text1}
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
              {postData.code1}
            </SyntaxHighlighter>
            <Typography fontWeight="bold" margin="20px 0">
              {postData.text2}
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
              {postData.code2}
            </SyntaxHighlighter>
            <Typography fontWeight="bold" margin="20px 0">
              {postData.text3}
            </Typography>
            <Typography>{postData.text4}</Typography>
          </Grid>
        </Grid>
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
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              border: "1px solid gray",
              padding: "10px",
              borderRadius: "7px",
            }}
          >
            <Button
              onClick={handlePreviousPost}
              disabled={currentPostIndex === 0}
              sx={{ display: "flex", flexDirection: " column" }}
            >
              <Typography>PREVIOUS</Typography>
              <Typography>{previousPostTitle}</Typography>
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              border: "1px solid gray",
              padding: "10px",
              borderRadius: "7px",
            }}
          >
            <Button
              onClick={handleNextPost}
              disabled={currentPostIndex === postslData.length - 1}
              sx={{ display: "flex", flexDirection: " column" }}
            >
              <Typography>NEXT</Typography>
              <Typography>{nextPostTitle}</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Post;
