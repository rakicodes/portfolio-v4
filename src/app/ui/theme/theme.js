import { createTheme } from "@mui/material/styles";
import "@fontsource/londrina-outline";

const theme = createTheme({
	typography: {
		main: {
			fontSize: "1.5rem",
			lineHeight: "1.75rem",
			"@media (min-width:600px)": {
				fontSize: "3rem",
				lineHeight: "3.5rem",
			},
		},
		outlined: {
			fontFamily: [
				'"Londrina Outline"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
			letterSpacing: "0.2rem",
			fontSize: "1.5rem",
			lineHeight: "1.75rem",
			"@media (min-width:600px)": {
				fontSize: "3rem",
				lineHeight: "3.5rem",
			},
		},
		subheading: {
			fontSize: "2.5rem",
			lineHeight: "3rem",
		},
		h1: {
			fontSize: "2.25rem",
			lineHeight: "2.75rem",
		},
		h2: {
			fontSize: "2rem",
			lineHeight: "2.5rem",
		},
		h3: {
			fontSize: "1.75rem",
			lineHeight: "2rem",
		},
		h4: {
			fontSize: "1.5rem",
			lineHeight: "1.75rem",
		},
		h5: {
			fontSize: "1.25rem",
			lineHeight: "1.5rem",
		},
		h6: {
			fontSize: "1rem",
			lineHeight: "1.25rem",
		},
		body1: {
			fontSize: "1.25rem",
			lineHeight: "1.5rem",
		},
		body2: {
			fontSize: "1rem",
			lineHeight: "1.25rem",
		},
		body3: {
			fontSize: "0.75rem",
			lineHeight: "1rem",
		},
		button1: {
			fontSize: "1.25rem",
			lineHeight: "1.5rem",
		},
		button2: {
			fontSize: "1rem",
			lineHeight: "1.25rem",
		},
		underlined: {
			fontSize: "1.25rem",
			lineHeight: "1.5rem",
		},
	},
	fontWeight: {
		regular: {
			fontWeight: 400,
		},
		semibold: {
			fontWeight: 600,
		},
		bold: {
			fontWeight: 700,
		},
		extrabold: {
			fontWeight: 800,
		},
	},
	palette: {
		primary: {
			light: "#ffbbee",
			main: "#fb9ae2",
		},
		secondary: {
			light: "#f9f5fb",
			main: "#dedef4",
			dark: "#3f3f51",
		},
		tertiary: {
			light: "#9090b3",
			main: "#16161e",
		},
		primaryOpacity: {
			main: "#67044e7e",
		},
	},
});

export default theme;
