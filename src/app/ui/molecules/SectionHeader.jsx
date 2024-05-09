import { Grid } from "@mui/material";
import Typography from "../atoms/Typography";
import theme from "../theme/theme";

const SectionHeader = ({ text1, text2, justifyContent = "center" }) => {
  return (
    <Grid container justifyContent={justifyContent}>
      <Grid item>
        <Typography
          variant="main"
          component="h1"
          sx={{
            paddingRight: theme.spacing(1),
          }}
        >
          {text1}
        </Typography>
        <Typography variant="main" component="span" fontWeight="extrabold">
          {text2}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SectionHeader;
