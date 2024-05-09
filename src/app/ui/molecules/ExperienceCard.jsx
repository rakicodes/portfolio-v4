import { Avatar, Grid } from "@mui/material";
import Typography from "../atoms/Typography";
import theme from "../theme/theme";
import Chips from "./Chips";

const ExperienceCard = ({ logo, title, startDate, endDate, description, tech }) => {
	return (
		<Grid
			container
			gap={3.5}
			border={`1px solid ${theme.palette.tertiary.light}`}
			borderRadius={theme.shape.borderRadius * 1}
			paddingY={theme.spacing(3.75)}
			paddingX={theme.spacing(3)}
			sx={{
				"&:hover": {
					backgroundColor: theme.palette.secondary.dark,
					borderColor: theme.palette.secondary.dark,
					color: theme.palette.primary.main,
				},
			}}>
			<Grid
				item
				xs={12}>
				<Grid
					container
					flexDirection={{ xs: "column", sm: "row" }}
					justifyContent={{ xs: "start", sm: "space-between" }}
					alignItems={{ xs: "flex-start", sm: "center" }}
					rowGap={3.75}>
					<Grid item>
						<Grid
							container
							alignItems="center"
							gap={2}>
							<Grid item>
								<Avatar sx={{ width: "100%", height: "100%" }}>{logo}</Avatar>
							</Grid>
							<Grid item>
								<Typography
									variant="h4"
									fontWeight="semibold"
									color="inherit">
									{title}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Typography
							variant="body2"
							fontWeight="semibold"
							color={theme.palette.secondary.main}>
							{startDate} - {endDate}
						</Typography>
					</Grid>
				</Grid>
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

export default ExperienceCard;
