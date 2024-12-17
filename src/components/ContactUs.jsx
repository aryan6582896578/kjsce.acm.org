import * as React from "react";
import SocialLink from "./SocialLink";

const socialData = [
	{
		id: 1,
		logo: "instagram.png",
		alt: "instagram-logo",
		link: "https://www.instagram.com/kjsce_acm/",
		text: "@kjsce_acm",
	},
	{
		id: 2,
		logo: "whatsapp.png",
		alt: "whatsapp-logo",
		link: "",
		text: "ACM Connect",
	},
	{
		id: 3,
		logo: "linkedin.png",
		alt: "linkedin-logo",
		link: "https://in.linkedin.com/company/kjsce-acm-student-chapter",
		text: "KJSCE ACM Student Chapter",
	},
];

export default function Contact() {
	return (
		<>
			<div className="flex flex-col justify-center items-center p-4 mt-8 bg-opacity-90 ">
				<h1 className="text-4xl uppercase font-black dark:text-white text-black px-8 mb-4 md:mb-8 border-t-cyan-400 border-t-2">
					About Us
				</h1>
			</div>
			<div className="m-10 mt-4 mb-24 flex flex-col bg-white p-8 rounded-3xl shadow-md max-w-md mx-auto">
				{socialData.map((social) => {
					return <SocialLink {...social} />;
				})}
			</div>
		</>
	);
}
