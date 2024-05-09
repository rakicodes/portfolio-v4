import { Divider, Grid } from "@mui/material";
import SectionHeader from "../../molecules/SectionHeader";
import ExperienceCard from "../../molecules/ExperienceCard";
import theme from "../../theme/theme";

const Experience = ({ experiences }) => {
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
					justifyContent="center"
					paddingX={{ xs: 2, md: 10 }}
					paddingY={{ xs: 5, md: 7.5 }}
					gap={{ xs: 5, md: 10 }}>
					<Grid
						item
						xs={12}>
						<Divider
							aria-hidden="true"
							sx={{
								"&::before, &::after": {
									borderColor: theme.palette.secondary.dark,
								},
							}}>
							<SectionHeader
								text1="My"
								text2="Experience"
							/>
						</Divider>
					</Grid>
					<Grid
						item
						xs={12}>
						<Grid
							container
							gap={4}>
							{experiences.map((exp, i) => (
								<Grid
									key={i}
									item
									xs={12}>
									<ExperienceCard
										logo={exp.logo}
										title={exp.title}
										startDate={exp.startDate}
										endDate={exp.endDate}
										description={exp.description}
										tech={exp.tech}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Experience;
