import { Grid, Link } from "@mui/material";
import React from "react";
import Typography from "../atoms/Typography";
import theme from "../theme/theme";

const Links = () => {
	return (
		<Grid
			container
			gap={theme.spacing(4)}>
			<Grid item>
				<Typography
					variant="h6">
					<Link
						href="#about"
						underline="none"
						aria-label="Going to about section"
						color={theme.palette.secondary.light}
                        sx={{ "&:hover": { color: theme.palette.primary.main } }}>
						ABOUT ME
					</Link>
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant="h6">
					<Link
						href="#skills"
						aria-label="Going to skills section"
						underline="none"
						color={theme.palette.secondary.light}
                        sx={{ "&:hover": { color: theme.palette.primary.main } }}>
						SKILLS
					</Link>
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant="h6">
					<Link
						href="#projects"
						aria-label="Going to projects section"
						underline="none"
						color={theme.palette.secondary.light}
                        sx={{ "&:hover": { color: theme.palette.primary.main } }}>
						PROJECTS
					</Link>
				</Typography>
			</Grid>
			<Grid item>
				<Typography
					variant="h6">
					<Link
						href="#contact"
						aria-label="Going to contact section"
						underline="none"
						color={theme.palette.secondary.light}
                        sx={{ "&:hover": { color: theme.palette.primary.main } }}>
						CONTACT
					</Link>
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Links;
