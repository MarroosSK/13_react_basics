import { Typography } from "@mui/material";

const Title = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="h1"
      sx={{ fontSize: { xs: "30px", sm: "40px", md: "45px" } }}
      textAlign="center"
    >
      {text}
    </Typography>
  );
};

export default Title;
