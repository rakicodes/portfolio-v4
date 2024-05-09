import { Grid, Link, Typography } from "@mui/material";
import theme from "../theme/theme";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Chips from "./Chips";

const ProjectDesc = ({ index, title, description, github, site, tech }) => {
	return (
		<Grid
			container
			flexDirection="column"
			paddingBottom={theme.spacing(10)}
			gap={theme.spacing(3)}>
			<Grid
				item
				xs={12}>
				<Typography
					variant="main"
					fontWeight="extrabold"
					color="inherit">
					{String(index + 1).padStart(2, 0)}
				</Typography>
			</Grid>
			<Grid
				item
				xs={12}>
				<Typography
					variant="h2"
					fontWeight="bold"
					color="inherit">
					{title}
				</Typography>
			</Grid>
			<Grid
				item
				xs={12}>
				<Typography
					variant="body2"
					color={theme.palette.secondary.main}>
					{description}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Chips list={tech} />
			</Grid>
			
		</Grid>
	);
};

export default ProjectDesc;
