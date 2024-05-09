import { Grid, Link } from "@mui/material";
import Image from "next/image";

const Logo = ({ logo, width=150, height=40 }) => {
	return (
		<Link
			href="#top"
			underline="none">
			<Image src={logo} alt="site logo" objectFit="contain" width={width} height={height} />
		</Link>
	);
};

export default Logo;
