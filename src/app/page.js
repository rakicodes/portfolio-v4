"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Minimalist from "./ui/templates/minimalist/Minimalist";
import theme from "./ui/theme/theme";
import skills from "@/content/skills";
import experiences from "@/content/experiences";
import projects from "@/content/projects";
import hero from "@/content/hero";
import socials from "@/content/socials";
import about from "@/content/about";

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Minimalist
				skills={skills}
				hero={hero}
				experiences={experiences}
				projects={projects}
				socials={socials}
				about={about}
        contactDesc="I'm actively seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out—I'm eager to connect and explore potential collaborations!"
			/>
		</ThemeProvider>
	);
}
