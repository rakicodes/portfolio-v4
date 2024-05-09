import { Button, Drawer, Grid, Link } from "@mui/material";
import theme from "../theme/theme";
import Logo from "../molecules/Logo";
import Links from "../molecules/Links";
import whitelogo from "../../../assets/whitelogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerList from "../molecules/DrawerList";
import { useState } from "react";

const MinimalistHeader = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Grid
			container
			paddingX={{ xs: theme.spacing(2), md: theme.spacing(10) }}
			paddingY={{ xs: theme.spacing(2.5), md: theme.spacing(3) }}
			justifyContent="space-between"
			alignItems="center"
			backgroundColor={theme.palette.tertiary.main}>
			<Grid item>
				<Logo logo={whitelogo} width={100} height={30} />
			</Grid>
			<Grid
				item
				sx={{ display: { xs: "none", md: "block" } }}>
				<Grid
					container
					alignItems="center"
					gap={theme.spacing(4)}>
					<Grid item>
						<Links />
					</Grid>
					<Grid item>
						<Button variant="outlined">
							<Link
								href="/Resume.pdf"
								aria-label="Going to Resume"
								target="_blank"
								underline="none">
								Resume
							</Link>
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				sx={{ display: { xs: "block", md: "none" } }}>
				<Button
					onClick={toggleMenu}
					aria-label="Open navigation menu">
					<MenuIcon color="secondary" />
				</Button>
			</Grid>
			<Grid
				item
				sx={{ position: "absolute" }}>
				<Drawer
					open={isOpen}
					onClose={toggleMenu}
					PaperProps={{
						sx: {
							justifyContent: "center",
							backgroundColor: theme.palette.tertiary.main,
						},
					}}>
					<DrawerList />
				</Drawer>
			</Grid>
		</Grid>
	);
};

export default MinimalistHeader;
