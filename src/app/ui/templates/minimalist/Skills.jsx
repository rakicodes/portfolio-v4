import React from "react";
import SectionHeader from "../../molecules/SectionHeader";
import LogoAndTextCard from "../../molecules/LogoAndTextCard";
import { Divider, Grid } from "@mui/material";
import theme from "../../theme/theme";

const Skills = ({ skills }) => {
	return (
		<Grid
			container
      		justifyContent="center"
			backgroundColor={theme.palette.tertiary.main}
			color={theme.palette.secondary.main}>
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
							<Divider aria-hidden="true" sx={{
								"&::before, &::after": {
									borderColor: theme.palette.secondary.dark,
								  },
							}}>
							<SectionHeader
							text1="My"
							text2="Skills"
							/>
							</Divider>
					</Grid>
					<Grid
						item
						xs={12}>
						<Grid
							container
							flexWrap
							justifyContent="center"
							gap={2.5}>
							{skills.map((skill, i) => (
								<Grid
									item
									key={i}
									xs={12}
									sm={5}
									md={2}>
									<LogoAndTextCard
										key={i}
										logo={skill.logo}
										text={skill.title}
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

export default Skills;
