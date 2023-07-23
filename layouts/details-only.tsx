import React from "react";

function DetailsOnly({
	children,
	bg,
	whiteText,
	classNames,
	bgImg,
	bgOpacity,
}: {
	children: React.ReactNode;
	bg?: string;
	whiteText?: boolean;
	classNames?: string;
	bgImg?: string;
	bgOpacity?: string;
}) {
	return (
		<div
			className={`${
				whiteText ? "text-white" : "text-black"
			} ${classNames} relative p-h w-full flex justify-center py-28`}
			style={{
				backgroundColor: bg,
			}}
		>
			{bgImg ? (
				<img
					src={bgImg}
					alt="some alt text"
					className={`w-full h-full absolute top-0 left-0 object-cover ${bgOpacity}`}
				/>
			) : (
				""
			)}

			<div className="flex flex-col relative z-10 max-w-7xl w-full">
				{children}
			</div>
		</div>
	);
}

export default DetailsOnly;
