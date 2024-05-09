import { Grid } from "@mui/material";
import Typography from "../atoms/Typography";
import theme from "../theme/theme";

const LogoAndTextCard = ({ logo, text }) => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border={`1px solid ${theme.palette.secondary.main}`}
      color={theme.palette.secondary.main}
      borderRadius={theme.shape.borderRadius * 0.3}
      padding={theme.spacing(3)}
      gap={theme.spacing(4)}
      sx={{
        "&:hover": {
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main
        },
        cursor: "pointer"
      }}
    >
      <Grid item>{logo}</Grid>
      <Grid item>
        <Typography variant="h5" fontWeight="bold">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LogoAndTextCard;
