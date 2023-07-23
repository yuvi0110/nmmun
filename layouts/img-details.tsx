import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/constants/animations";

function ImageWithDetails({
	children,
	reverse,
	bg,
	whiteText,
	classNames,
	bgImg,
	bgOpacity,
}: {
	children: React.ReactNode;
	reverse?: boolean;
	bg?: string;
	whiteText?: boolean;
	classNames?: string;
	bgImg?: string;
	bgOpacity?: string;
}) {
	return (
		<section
			className={`flex justify-center p-h w-full ${classNames} bg-fixed bg-center bg-no-repeat bg-cover relative`}
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

			<div
				className={`flex flex-col ${
					reverse ? "md:flex-row-reverse" : "md:flex-row"
				} md:items-center gap-8 ${
					whiteText ? "text-white" : "text-black"
				} max-w-7xl w-full relative z-10`}
			>
				<div className="md:w-1/2">
					<motion.img
						src="/dummy.png"
						alt="some alt text"
						className="rounded-2xl"
						variants={inViewVariants}
						initial={`hidden${!reverse ? "R" : ""}`}
						whileInView="visible"
						transition={{
							duration: 0.4,
						}}
						viewport={{ once: true, amount: 0.25 }}
					/>
				</div>
				<div className="md:w-1/2">{children}</div>
			</div>
		</section>
	);
}

export default ImageWithDetails;
