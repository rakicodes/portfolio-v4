import { Grid } from "@mui/material";
import theme from "../theme/theme";
import Typography from "../atoms/Typography";
import Logo from "../molecules/Logo";
import logo from "../../../assets/whitelogo.png"

const MinimalistFooter = () => {
	return (
		<Grid
			container
			justifyContent="space-between"
			alignItems="center"
			paddingX={{ xs: theme.spacing(2), md: theme.spacing(10) }}
			paddingY={{ xs: theme.spacing(2.5), md: theme.spacing(3) }}
            backgroundColor={theme.palette.tertiary.main}
			color={theme.palette.secondary.main}>
			<Grid item>
                <Logo logo={logo} width={100} height={30} />              
            </Grid>
			<Grid item>
                <Typography variant="body2" fontWeight="semibold">@ 2024 Raquel Go</Typography>
            </Grid>
		</Grid>
	);
};

export default MinimalistFooter;
