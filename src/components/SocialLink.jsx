import * as React from "react";

function SocialLink(params) {
	return (
		<div className="flex items-center gap-2 justify-center w-full">
			<div>
				<img
					className="rounded-full w-4 h-4"
					src={params.logo}
					alt={params.alt}
				/>
			</div>

			<div>
				<a href={params.link} target="_blank"><u>{params.text}</u></a>
			</div>
		</div>
	);
}

export default SocialLink;