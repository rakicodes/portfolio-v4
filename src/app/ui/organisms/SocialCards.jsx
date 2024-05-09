import { Grid } from "@mui/material";
import SocialCard from "../molecules/SocialCard";
import theme from "../theme/theme";

const SocialCards = ({ socials }) => {
  return (
    <Grid container gap={theme.spacing(3)} paddingY={theme.spacing(0.5)} justifyContent={{ xs: "center", sm: "end" }}>
      {socials.map((social, i) => (
        <Grid item key={i}>
          <SocialCard link={social.link} icon={social.icon} name={socials.name} site={social.site} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SocialCards;
