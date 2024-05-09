import { Link, Grid } from "@mui/material";
import ProjectDesc from "./ProjectDesc";
import theme from "../theme/theme";
import Image from "next/image";

const ProjectCard = ({
	index,
	isImgLeft,
	image,
	title,
	description,
	github,
	site,
	tech,
}) => {
	return (
		<Grid
			container
			justifyContent="space-between"
			padding={theme.spacing(4)}
			rowGap={theme.spacing(2)}
			borderRadius={theme.shape.borderRadius * 1}
			color={theme.palette.secondary.light}
			alignItems="center"
			sx={{
				opacity: 0.7,
				"&:hover": {
					backgroundColor: theme.palette.secondary.dark,
					color: theme.palette.primary.main,
					opacity: 1,
				},
			}}>
			<Grid
				item
				xs={12}
				md={6}
				order={{ md: isImgLeft ? 0 : 1 }}
				sx={{
					position: "relative",
					borderRadius: "5px",
					overflow: "hidden",
					opacity: "inherit",
					height: { xs: "200px", md: "300px" },
				}}>
				<Image
					src={image.src}
					alt={image.alt}
					fill={true}
					objectFit="contain"
					sizes="(max-width: 768px) 70vw, 30vw"
				/>
			</Grid>
			<Grid
				item
				xs={12}
				md={5}>
				<ProjectDesc
					index={index}
					title={title}
					description={description}
					github={github}
					site={site}
					tech={tech}
				/>
			</Grid>
		</Grid>
	);
};

export default ProjectCard;
