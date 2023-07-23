import React from "react";

function DetailsOnly({
	children,
	bg,
}: {
	children: React.ReactNode;
	bg?: string;
}) {
	return (
		<div className={`flex flex-col bg-[${bg}] py-8`}>
			{children}
		</div>
	);
}

export default DetailsOnly;
