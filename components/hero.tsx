import React from "react";

import { motion } from "framer-motion";

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
			className="bg-blue-700 text-white rounded-2xl flex flex-col justify-center items-center py-28 md:py-20 mt-6"
			variants={enterVariants}
			initial="hidden"
			animate="visible"
			transition={{
				duration: 0.4,
				delay: 2,
			}}
		>
			{/* TITLE */}
			<motion.h1
				className="title"
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
				className="text-lg font-medium opacity-80"
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
			<motion.div
				className="grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max my-4 md:my-6"
				variants={enterVariants}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 0.4,
					delay: 2.8,
				}}
			>
				<div className="timer-container">
					<span className="number-span">
						<span>10</span>
					</span>
					<span className="detail-span">days</span>
				</div>
				<div className="timer-container">
					<span className="number-span">
						<span>10</span>
					</span>
					<span className="detail-span">hours</span>
				</div>
				<div className="timer-container">
					<span className="number-span">
						<span>10</span>
					</span>
					<span className="detail-span">min</span>
				</div>
				<div className="timer-container">
					<span className="number-span">
						<span>10</span>
					</span>
					<span className="detail-span">sec</span>
				</div>
			</motion.div>

			{/* CTA */}
			<motion.div
				className="flex gap-2 md:gap-4 mt-4 md:mt-6"
				variants={enterVariants}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 0.4,
					delay: 3,
				}}
			>
				<button className="hero-btn">Contact Us</button>
				<button className="hero-btn">Apply</button>
			</motion.div>
		</motion.section>
	);
};

export default Hero;
