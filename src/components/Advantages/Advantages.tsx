import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { tutorialAdvantages } from "../../helpers/tutorialAdvantages";
const Advantages = () => {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center">
      {tutorialAdvantages.map((info) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={info.id}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="400px"
          margin="20px"
          gap="8px"
        >
          <img src={info.image} width="250px" height="250px" />
          <Typography variant="h5" fontWeight="bold">
            {info.title}
          </Typography>
          <Typography
            variant="body1"
            fontSize="15px"
            maxWidth="300px"
            textAlign="center"
          >
            {info.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Advantages;
