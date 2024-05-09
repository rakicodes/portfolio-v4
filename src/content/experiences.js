import Image from "next/image";
import stft from "../assets/stft.png";
import vt from "../assets/vt.jpeg";

const experiences = [
	{
		logo: (
			<Image
				src={stft}
				alt="Supertech FT logo"
				width={25}
				height={25}
			/>
		),
		title: "Software Developer",
		startDate: "Jan 2024",
		endDate: "Present",
		description:
			"I analyzed and reviewed the codebase, offering valuable feedback and constructive criticism aimed at enhancing its functionality and maintainability.",
		tech: ["Python", "JavaScript", "HTML", "CSS", "WebRTC", "Socket.io"]
	},
	{
		logo: (
			<Image
				src={vt}
				alt="Vivid Theory logo"
				width={25}
				height={25}
			/>
		),
		title: "Full Stack Developer",
		startDate: "Jan 2023",
		endDate: "Apr 2023",
		description:
			"I developed and implemented clear, efficient code using Typescript, Nest, and GraphQL to update backend functionalities. Additionally, I collaborated with the design team to integrate the user interface according to Figma specifications using React and MaterialUI. Moreover, I actively engaged in daily standups to maintain effective communication within the development team.",
		tech: ["TypeScript", "Nest", "Prisma", "Redux Saga", "GraphQL", "MaterialUI"]
	},
];

export default experiences;
