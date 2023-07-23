import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/constants/animations";

const Details = ({
	children,
	reverse,
	delay,
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
}) => {
	return (
		<motion.p
			className="text-base opacity-20 leading-tight mt-4"
			variants={inViewVariants}
			initial={`hidden${reverse ? "R" : ""}`}
			whileInView="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			{children}
		</motion.p>
	);
};

export default Details;
