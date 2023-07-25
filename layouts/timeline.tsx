import React from "react";

function Timeline({
	children,
	date,
}: {
	children: React.ReactNode;
	date: string;
}) {
	return (
		<li className="mb-10 ml-4">
			<div className="absolute w-4 h-4 bg-gray-400 rounded-full mt-1 -left-2 border border-white"></div>
			<time className="mb-1 text-xl font-medium leading-none text-gray-800">
				{date}
			</time>
			{children}
		</li>
	);
}

export default Timeline;
