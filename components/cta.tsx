import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { inViewVariants } from "@/constants/animations";

const CTA = ({
	title,
	href,
	delay,
	secondary,
	icon,
	className
}: {
	title: string;
	href: string;
	delay?: number;
	secondary?: boolean;
	icon?: React.ReactNode;
	className?: string
}) => {
	return (
		<motion.div
			className={`w-full flex justify-center ${className}`}
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
				{!secondary ? (
					<button className="cta rounded-xl cursor-pointer bg-blue-600 py-2 lg:py-3 px-6 lg:px-8">
						<span className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
							{icon} {title}
						</span>
					</button>
				) : (
					<button className="cta cta-secondary rounded-xl cursor-pointer bg-blue-600 py-2 lg:py-3 px-6 lg:px-8">
						<span className="whitespace-nowrap flex items-center gap-2 flex-nowrap">
							{icon} {title}
						</span>
					</button>
				)}
			</Link>
		</motion.div>
	);
};

export default CTA;
