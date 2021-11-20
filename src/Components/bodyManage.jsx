import { Grid } from "@mui/material";
// import { createTheme, ThemeProvider } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import Cards from "./Cards";

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xxs: 0, // small phone
//       xs: 300, // phone
//       sm: 660, // tablets
//       md: 960, // small laptop
//       lg: 1260, // desktop
//       xl: 1536, // large screens
//     },
//   },
// });

const CardsArange = () => {
  return (
      <Box
        sx={{ maxWidth: "1150px", margin: "auto" }}
      >
        <Grid item container spacing={ 3 } xs={12} sm={12} md={12} lg={12} sx={{ pb:2}}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ }}
          >
            <Cards />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ }}
          >
            <Cards />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{  }}
          >
            <Cards />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ }}
          >
            <Cards />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ }}
          >
            <Cards />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ }}
          >
            <Cards />
          </Grid>
        </Grid>
      </Box>
  );
};
export default CardsArange;
