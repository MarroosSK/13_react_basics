import { Box, Typography } from "@mui/material";
import { tutorialAdvantages } from "../../helpers/tutorialAdvantages";
import "./Advantages.css";
const Advantages = () => {
  return (
    <Box className="advantages__wrapper">
      {tutorialAdvantages.map((info) => (
        <Box className="advantages__box">
          <img src={info.image} width="320px" height="320px" />
          <Typography
            variant="h2"
            fontWeight="bold"
            fontSize="2rem"
            color="#1976d2"
            textAlign="center"
          >
            {info.title}
          </Typography>
          <Typography
            variant="body1"
            fontSize="15px"
            maxWidth="300px"
            color="#1976d2"
            textAlign="center"
            marginTop="16px"
          >
            {info.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Advantages;
