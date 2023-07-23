import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/constants/animations";

const Heading = ({
	children,
	reverse,
	delay,
	classNames
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
	classNames?: string
}) => {
	return (
		<motion.h1
			className={`text-6xl font-semibold capitalize ${classNames}`}
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
		</motion.h1>
	);
};

export default Heading;
