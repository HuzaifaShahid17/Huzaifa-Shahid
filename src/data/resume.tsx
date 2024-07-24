import { Icons } from "@/components/icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import {
	CodeIcon,
	HomeIcon,
	InstagramIcon,
	NotebookIcon,
	PencilLine,
} from "lucide-react";

export const DATA = {
	name: "Huzaifa Shahid",
	initials: "HS",
	url: "https://huzaifashahid.vercel.app",
	location: "Lahore,PK",
	locationLink: "",
	description:
		"Software Engineer. Let’s connect and collaborate to create something amazing!",
	summary:
		"My expertise includes Web Development, User Interface Design, and Responsive Web Design, ensuring that each project I undertake is both visually appealing and functionally robust.Currently pursuing a Bachelor's degree in Computer Science at the [University of Okara](http://www.uo.edu.pk/) and [Frontend Developer](https://codemint-ai.vercel.app) on  With a strong foundation in Computer Science and a keen eye for design, I am committed to continuous learning and adapting to the ever-evolving landscape of web technologies. My goal is to deliver exceptional web solutions that not only meet but exceed client expectations, driving user engagement and satisfaction.",
	avatarUrl: "/me.jpg",
	skills: [
		"HTML",
		"Cascading Style Sheets (CSS)",
		"React",
		"Next.js",
		"Typescript",
		"javascript",
		"MongoDB",
		"Node.js",
		"Python",
		"MySQL",
		"Github",
		"Git",
		"Problem Solving",
		"UI/UX design",
		"C++",
	],
	navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
	contact: {
		email: "chhuzaifa94@gmail.com",
		tel: "+923-4240-11300",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/huzaifashahid17",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://linkedin/in/huzaifashahid17",
				icon: Icons.linkedin,

				navbar: true,
			},
			X: {
				name: "X",
				url: " https://x.com/17Huzaifashahid",
				icon: Icons.x,
				navbar: true,
			},
			Whatsapp: {
				name: "X",
				url: " https://wa.me/923424011300",
				icon: Icons.whatsapp,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "chhuzaifa94@gmail.com",
				icon: Icons.email,
				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Gig Labs",
			href: "https://atomic.finance",
			badges: [],
			location: "Remote",
			title: "Bitcoin Protocol Engineer",
			logoUrl: "/atomic.png",
			start: "May 2021",
			end: "Oct 2022",
			description:
				"Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
		},
	],
	education: [
		{
			school: "University of Okara",
			href: "https://uo.edu.pk",
			degree: "Bachelor's Degree of Computer Science (BSCS)",
			logoUrl: "/uoo.jpg",
			start: "2021",
			end: "Present",
		},
		{
			school: "Punjab Group Of College",
			href: "https://pgc.edu/",
			degree: "Intermediate of Computer Science (ICS)",
			logoUrl: "/pu-okara.png",
			start: "2019",
			end: "2021",
		},
		{
			school: "Coursera",
			href: "https://wlu.ca",
			degree: "META Frontend Developement",
			logoUrl: "/laurier.png",
			start: "2022",
			end: "2023",
		},
	],
	projects: [
		{
			title: "MintCode",
			href: "https://mintcode-huzaifa.vercel.app",
			dates: "Jan 2024 - Feb 2024",
			active: true,
			description:
				"With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
				"Magic UI",
			],
			links: [
				{
					type: "Website",
					href: "https://chatcollect.com",
					icon: <Icons.globe className='size-3' />,
				},
			],
			image: "",
			video:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
		},
		{
			title: "Magic UI",
			href: "https://magicui.design",
			dates: "June 2023 - Present",
			active: true,
			description:
				"Designed, developed and sold animated UI components for developers.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
				"Magic UI",
			],
			links: [
				{
					type: "Website",
					href: "https://magicui.design",
					icon: <Icons.globe className='size-3' />,
				},
				{
					type: "Source",
					href: "https://github.com/magicuidesign/magicui",
					icon: <Icons.github className='size-3' />,
				},
			],
			image: "",
			video: "https://cdn.magicui.design/bento-grid.mp4",
		},
	],
} as const;
