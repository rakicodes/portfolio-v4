import { Grid } from "@mui/material";
import Typography from "../../atoms/Typography";
import SectionHeader from "../../molecules/SectionHeader";
import Girl from "@/assets/girl";
import theme from "../../theme/theme";

const About = ({ about }) => {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			backgroundColor={theme.palette.tertiary.main}
			color={theme.palette.secondary.light}>
			<Grid item>
				<Grid
					container
					maxWidth="1200px"
					paddingX={{ xs: theme.spacing(2), md: theme.spacing(10) }}
					paddingY={{ xs: theme.spacing(6), md: theme.spacing(7.5) }}
					justifyContent="space-between"
					rowGap={theme.spacing(2.5)}>
					<Grid
						item
						xs={12}
						md={5}>
						<Girl
							width="100%"
							height="100%"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Grid
							container
							gap={2.5}>
							<Grid
								item
								xs={12}>
								<SectionHeader
									text1="About"
									text2="Me"
									justifyContent="flex-start"
								/>
							</Grid>
							<Grid item>
								<Grid
									container
									gap={2.5}>
									{about.map((text, i) => (
										<Grid
											item
											key={i}
											xs={12}>
											<Typography
												variant="body2"
												color={theme.palette.secondary.main}>
												{text}
											</Typography>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default About;
