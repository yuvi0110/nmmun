import React from "react";

function DetailsOnly({
	children,
	whiteText,
	className,
	bgImg,
	bgImgAlt,
	bgOpacity,
}: {
	children: React.ReactNode;
	whiteText?: boolean;
	className?: string;
	bgImg?: string;
	bgImgAlt?: string;
	bgOpacity?:
		| "opacity-100"
		| "opacity-90"
		| "opacity-80"
		| "opacity-75"
		| "opacity-60"
		| "opacity-50"
		| "opacity-40";
}) {
	return (
		<div
			className={`${
				whiteText ? "text-white" : "text-black"
			} ${className} relative p-h w-full flex justify-center`}
		>
			{bgImg ? (
				<img
					src={bgImg}
					alt={bgImgAlt}
					className={`w-full h-full absolute top-0 left-0 object-cover opacity-40 ${bgOpacity}`}
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
