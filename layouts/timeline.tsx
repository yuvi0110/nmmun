import React from "react";
import { motion } from "framer-motion";

import { inViewVariants } from "@/constants/animations";

function Timeline({
	children,
	date,
}: {
	children: React.ReactNode;
	date: string;
}) {
	return (
		<motion.li
			className="mb-10 ml-4"
			variants={inViewVariants}
			initial="fromDown"
			whileInView="visible"
			transition={{ duration: 0.4, delay: 1.6 }}
			viewport={{ once: true, amount: 0.25 }}
		>
			<div className="absolute w-4 h-4 bg-gray-400 rounded-full mt-1 -left-2 border border-white"></div>
			<time className="mb-1 text-xl font-medium leading-none text-gray-800">
				{date}
			</time>
			{children}
		</motion.li>
	);
}

export default Timeline;
