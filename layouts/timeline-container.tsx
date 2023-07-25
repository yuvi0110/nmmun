import React from "react";

function TimelineContainer({ children, className }: { children: React.ReactNode, className?: string }) {
	return (
		<div className={`w-full flex justify-center p-h ${className}`}>
			<div className="max-w-7xl w-full">
				<ol className="relative border-l-2 border-gray-400">
					<li className="mb-10 ml-4">
						<div className="absolute w-4 h-4 bg-gray-400 rounded-full -left-2 border border-white"></div>
						<span className="mb-1 text-xl font-medium leading-none text-gray-800">
							More Coming Soon...
						</span>
					</li>
					{children}
				</ol>
			</div>
		</div>
	);
}

export default TimelineContainer;
