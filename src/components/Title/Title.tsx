import { Typography } from "@mui/material";

const Title = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "2.5rem", sm: "3rem" },
        lineHeight: "65px",
      }}
      textAlign="center"
    >
      {text}
    </Typography>
  );
};

export default Title;
