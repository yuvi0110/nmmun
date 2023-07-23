import React from "react";

import { motion } from "framer-motion";
import Timer from "./timer";

const enterVariants = {
	hidden: {
		y: 25,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Hero = () => {
	return (
		<motion.section
			className="bg-black text-white rounded-2xl flex flex-col justify-center items-center py-28 md:py-20 mt-6 relative shadow-md"
			variants={enterVariants}
			initial="hidden"
			animate="visible"
			transition={{
				duration: 0.4,
				delay: 2,
			}}
		>
			<img
				src="/dummy.png"
				alt="dummy hero"
				className="w-full h-full absolute top-0 left-0 cover opacity-50 rounded-2xl"
			/>

			{/* TITLE */}
			<motion.h1
				className="title relative z-10"
				variants={enterVariants}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 0.4,
					delay: 2.4,
				}}
			>
				NMMUN
			</motion.h1>

			{/* YEAR */}
			<motion.span
				className="text-lg font-medium opacity-80 relative z-10"
				variants={enterVariants}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 0.4,
					delay: 2.6,
				}}
			>
				2023-24
			</motion.span>

			{/* COUNTDOWN + DATE */}
			<Timer delay={2.8} />

			{/* CTA */}
			<motion.div
				className="flex gap-2 md:gap-4 mt-4 md:mt-6 relative z-10"
				variants={enterVariants}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 0.4,
					delay: 3,
				}}
			>
				<button className="hero-btn bg-primary text-white">Apply</button>
				<button className="hero-btn">Contact Us</button>
			</motion.div>
		</motion.section>
	);
};

export default Hero;
