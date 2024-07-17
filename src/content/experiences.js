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
];

export default experiences;
