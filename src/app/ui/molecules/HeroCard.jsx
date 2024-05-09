import { Grid } from "@mui/material";
import Typography from "../atoms/Typography";
import theme from "../theme/theme";

const HeroCard = ({ name, type, country, description }) => {
  return (
    <Grid container gap={theme.spacing(1)}>
      <Grid item xs={12}>
        <Grid
          container
          flexWrap="no-wrap"
          justifyContent={{ xs: "start", sm: "end" }}
          columnGap={{ xs: theme.spacing(1), md: theme.spacing(2) }}
        >
          <Grid item>
            <Typography variant="main" color={theme.palette.secondary.main}>Hello I am</Typography>
          </Grid>
          <Grid item>
            <Typography variant="main" color={theme.palette.secondary.main} fontWeight="extrabold">
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          flexWrap="no-wrap"
          justifyContent={{ xs: "start", sm: "end" }}
          columnGap={{ xs: theme.spacing(1), md: theme.spacing(2) }}
        >
          <Grid item>
            <Typography variant="main" fontWeight="extrabold" color={theme.palette.secondary.main}>
              {type}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="outlined" fontWeight="extrabold" color={theme.palette.secondary.main}>
              Developer
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          flexWrap="no-wrap"
          justifyContent={{ xs: "start", sm: "end" }}
          columnGap={{ xs: theme.spacing(1), md: theme.spacing(2) }}
        >
          <Grid item>
            <Typography variant="main" color={theme.palette.tertiary.light}>Based in</Typography>
          </Grid>
          <Grid item>
            <Typography variant="main" fontWeight="extrabold" color={theme.palette.tertiary.light}>
              {country}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" color={theme.palette.tertiary.light} sx={{ textAlign: { xs: "left", sm: "right" }}}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeroCard;
