import { Button, Grid, Link } from "@mui/material";
import Typography from "../../atoms/Typography";
import theme from "../../theme/theme";
import SocialCards from "../../organisms/SocialCards";

const Contact = ({ contactDesc, socials }) => {
	return (
		<Grid
			container
			justifyContent="center"
			backgroundColor={theme.palette.tertiary.main}
			color={theme.palette.secondary.light}>
			<Grid item>
				<Grid
					container
					maxWidth="1200px"
					paddingX={{ xs: theme.spacing(2), md: theme.spacing(10) }}
					paddingY={{ xs: theme.spacing(6), md: theme.spacing(7.5) }}
					rowGap={theme.spacing(3)}
					flexDirection="column"
					alignItems="center">
					<Grid
						item
						xs={12}>
						<Grid
							container
							gap={{ xs: theme.spacing(1), md: theme.spacing(2) }}>
							<Grid item>
								<Typography
									variant="main"
									fontWeight="extrabold">
									Let&#39;s
								</Typography>
							</Grid>
							<Grid item>
								<Typography
									variant="outlined"
									fontWeight="extrabold">
									Connect
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}>
						<Typography
							variant="body2"
							color={theme.palette.secondary.main}
							align="center">
							{contactDesc}
						</Typography>
					</Grid>
					<Grid
						item
						paddingY={theme.spacing(2)}>
						<Button
							variant="outlined"
							sx={{
								paddingY: theme.spacing(2),
								paddingX: { xs: theme.spacing(2), sm: theme.spacing(3) },
							}}>
							<Link
								href={`mailto:${socials.email}`}
								aria-label={`Mail ${socials.name}`}
								underline="none">
								Say Hello
							</Link>
						</Button>
					</Grid>
					<Grid item>
						<SocialCards socials={socials.links} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Contact;
