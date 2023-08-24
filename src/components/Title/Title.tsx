import { Typography } from "@mui/material";

const Title = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "42px", sm: "52px" },
        lineHeight: "65px",
        textWrapper: "balance",
      }}
      textAlign="center"
    >
      {text}
    </Typography>
  );
};

export default Title;
