import Image from "next/image";
import ckbk from "../assets/ckbk.png";
import invitations from "../assets/invitations.png";
import happypaws from "../assets/happypaws.png";

const projects = [
	{
		image: {
			src: ckbk,
			alt:"Cookbook Preview"
		},
		title: "Cookbook",
		description:
			"A recipe sharing site where users can get to the recipes straight away with no distractions.",
		github: "https://github.com/rakicodes/cookbook",
		site: "https://ckbk.netlify.app/",
		tech: ["React", "Express", "MongoDB", "Node", "MaterialUI", "Jest"]
	},
	{
		image: {
				src: invitations,
				alt: "Say Yes: Invitations Preview"
		},
		title: "Say Yes: Invitations",
		description:
			"A fun way to send invitations to friends and loved ones- get them to say yes no matter what! Create an invitation and share the link to your friends!",
		github: "https://github.com/rakicodes/invitation-v2",
		site: "https://sayyes-invitation.vercel.app/",
		tech: ["Next", "Express", "MongoDB", "Node", "TailwindCSS"]
	},
	{
		image: {
				src: happypaws,
				alt: "Happy Paws Preview"
		},
		title: "Happy Paws",
		description:
			"A photo sharing site where pet owners can share pictures of their adorable pets with people across the globe.",
		github: "https://github.com/rakicodes/happy-paws",
		site: "https://happy-paws-blog.netlify.app/",
		tech: ["React", "Express", "MongoDB", "Node", "MaterialUI"]
	},
];

export default projects;
