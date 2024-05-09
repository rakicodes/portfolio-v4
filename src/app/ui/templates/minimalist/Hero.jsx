import { Grid } from "@mui/material";
import HeroGirl from "@/assets/heroGirl";
import theme from "../../theme/theme";
import HeroCard from "../../molecules/HeroCard";
import SocialCards from "../../organisms/SocialCards";

const Hero = ({ hero, socials }) => {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			backgroundColor={theme.palette.tertiary.main}>
			<Grid item>
				<Grid
					container
					maxWidth="1200px"
					paddingX={{ xs: theme.spacing(2), md: theme.spacing(10) }}
					paddingY={{ xs: theme.spacing(6), md: theme.spacing(7.5) }}
					justifyContent="space-between"
					alignItems="center"
					rowGap={theme.spacing(2.5)}>
					<Grid
						item
						xs={12}
						sm={6}
						order={{ xs: 1, sm: 0 }}>
						<Grid
							container>
							<Grid
								item
								xs={12}>
								<HeroCard
									name={hero.name}
									type={hero.type}
									country={hero.country}
									description={hero.description}
								/>
							</Grid>
							<Grid
								item
								xs={12}
								paddingTop={theme.spacing(3)}>
								<SocialCards socials={socials} />
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						xs={12}
						sm={5}
						order={{ xs: 0, sm: 1 }}>
						<HeroGirl
							width="100%"
							height="100%"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Hero;
