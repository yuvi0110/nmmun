import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";

function ImageWithDetails({
	children,
	reverse,
	whiteText,
	className,
	bgImg,
	bgImgAlt,
	bgOpacity,
	src,
	alt,
	w,
	h,
	id,
	imgOpacity,
}: {
	children: React.ReactNode;
	reverse?: boolean;
	whiteText?: boolean;
	className?: string;
	src?: string; //todo: make this required
	alt?: string;
	w?: string; // todo: give this options
	h?: string;
	bgImg?: string;
	bgImgAlt?: string;
	bgOpacity?: string;
	id?: string;
	imgOpacity?: string | number;
}) {
	return (
		<section
			className={`flex justify-center p-h w-full ${className} bg-fixed bg-center bg-no-repeat bg-cover relative`}
			id={id}
		>
			{bgImg ? (
				<img
					src={bgImg}
					alt={bgImgAlt}
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
				<motion.div
					className="md:w-1/2 flex justify-center items-center bg-black rounded-3xl"
					variants={inViewVariants}
					initial={!reverse ? "fromLeft" : "fromRight"}
					whileInView={inViewVariants.visible(1)}
					transition={{
						duration: 0.4,
					}}
					viewport={{ once: true, amount: 0.25 }}
				>
					<img
						src={src ? src : "/dummy.png"} // todo: make this requried
						alt={alt ? alt : "some alt text"}
						className={`rounded-2xl ${w} ${h}`}
						style={{ opacity: imgOpacity }}
					/>
				</motion.div>
				<div className="md:w-1/2">{children}</div>
			</div>
		</section>
	);
}

export default ImageWithDetails;
