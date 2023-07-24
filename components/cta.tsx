import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/constants/animations";

const CTA = ({
	title,
	url,
	delay,
}: {
	title: string;
	url: string;
	delay?: number;
}) => {
	return (
		<motion.div
			className="w-full flex justify-center py-8"
			variants={inViewVariants}
			initial="hidden"
			whileInView="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			<a href={url}>
				<button className="bg-blue-600 text-white rounded-lg px-12 py-4">
					{title}
				</button>
			</a>
		</motion.div>
	);
};

export default CTA;
