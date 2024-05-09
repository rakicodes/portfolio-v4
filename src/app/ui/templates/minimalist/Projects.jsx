import { Box, Divider, Grid, Link } from "@mui/material";
import SectionHeader from "../../molecules/SectionHeader";
import ProjectCard from "../../molecules/ProjectCard";
import theme from "../../theme/theme";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = ({ projects }) => {
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
								text2="Projects"
							/>
						</Divider>
					</Grid>
					{projects.map((project, i) => (
						<Grid
							item
							key={i}
							xs={12}>
							<Grid
								container
								justifyContent={{ xs: "start", md: (i%2===0) ? "end" : "start" }}
								sx={{ position: "relative" }}>
								<Grid
									item
									xs={12}>
									<Link
										href={project.site}
										target="_blank"
										underline="none">
										<ProjectCard
											index={i}
											isImgLeft={i % 2 === 0}
											image={project.image}
											title={project.title}
											description={project.description}
											github={project.github}
											site={project.site}
											tech={project.tech}
										/>
									</Link>
								</Grid>
								<Grid
									item
									xs={12}
									sx={{
										position: "absolute",
										bottom: theme.spacing(7),
										zIndex: 1,
									}}>
									<Grid
										container
										gap={theme.spacing(1)}
										paddingX={theme.spacing(4)}
										alignItems="center">
										<Grid item>
											<Box>
											<Link
												href={project.github}
												aria-label={`Going to the GitHub of ${project.title}`}
												target="_blank"
												color={theme.palette.tertiary.light}
												sx={{
													"&:hover": { color: theme.palette.primary.main },
												}}>
												{<GitHubIcon fontSize="medium" />}
											</Link>
											</Box>
											
										</Grid>
										<Grid item>
											<Box>
											<Link
												href={project.site}
												target="_blank"
												aria-label={`Going to ${project.title} site`}
												color={theme.palette.tertiary.light}
												sx={{
													"&:hover": { color: theme.palette.primary.main },
												}}>
												{<LaunchIcon fontSize="medium" />}
											</Link>
											</Box>
											
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Projects;
