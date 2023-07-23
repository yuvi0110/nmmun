import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/constants/animations";

const SubHeading = ({
	children,
	reverse,
	delay,
	classNames,
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
	classNames?: string;
}) => {
	return (
		<motion.h2
			className={`text-3xl font-semibold opacity-80 mt-4 ${classNames}`}
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
		</motion.h2>
	);
};

export default SubHeading;
