import React from 'react'
import { motion } from 'framer-motion'
import { inViewVariants } from '@/constants/animations'

const Quote = ({
	children,
	reverse,
	delay,
}: {
	children: React.ReactNode;
	reverse?: boolean;
	delay?: number;
}) => {
	return (
		<motion.q
			className="text-lg leading-tight mt-4 py-2 italic"
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
		</motion.q>
	);
};

export default Quote