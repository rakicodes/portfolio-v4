import {
	BiLogoJavascript,
	BiLogoTypescript,
	BiLogoMongodb,
} from "react-icons/bi";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact, FaNode } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiJest } from "react-icons/si";

const skills = [
	{
		logo: <BiLogoJavascript />,
		title: "JavaScript",
	},
	{
		logo: <BiLogoTypescript />,
		title: "TypeScript",
	},
	{
		logo: <IoLogoHtml5 />,
		title: "HTML",
	},
	{
		logo: <IoLogoCss3 />,
		title: "CSS",
	},
	{
		logo: <FaReact />,
		title: "React",
	},
	{
		logo: <RiNextjsFill />,
		title: "Next",
	},
	{
		logo: <FaNode />,
		title: "Node",
	},
	{
		logo: <BiLogoMongodb />,
		title: "MongoDB",
	},
	{
		logo: <SiExpress />,
		title: "Express",
	},
	{
		logo: <SiJest />,
		title: "Jest",
	},
];

export default skills;
