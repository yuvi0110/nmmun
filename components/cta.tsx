import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { inViewVariants } from "@/constants/animations";

const CTA = ({
	title,
	href,
	delay,
}: {
	title: string;
	href: string;
	delay?: number;
}) => {
	return (
		<motion.div
			className="w-full flex justify-center"
			variants={inViewVariants}
			initial="hidden"
			whileInView="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			<Link href={href}>
				<button className="cta rounded-xl cursor-pointer bg-blue-500">
					<span className="py-2 lg:py-3 px-6 lg:px-8">{title}</span>
				</button>
			</Link>
		</motion.div>
	);
};

export default CTA;
