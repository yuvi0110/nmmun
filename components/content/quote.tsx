import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";

const Quote = ({
	children,
	reverse,
	delay,
	author,
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
	author?: string;
}) => {
	return (
		<div className="flex items-start gap-4 w-full md:w-4/5 mx-auto">
			{/* <span className="text-7xl md:text-9xl font-bold font-display">‟</span> */}
			<motion.q
				className="text-xl md:text-3xl leading-tight py-2 font-display text-center italic"
				variants={inViewVariants}
				initial={reverse ? "fromLeft" : "fromRight"}
				whileInView="visible"
				transition={{
					duration: 0.4,
					delay,
				}}
				viewport={{ once: true, amount: 0.25 }}
			>
				{children}
				{author && <span>{`--${author}`}</span>}
			</motion.q>
		</div>
	);
};

export default Quote;
