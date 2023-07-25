import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Timer from "./timer";
import Link from "next/link";
import { inViewVariants } from "@/constants/animations";
import { CTA } from ".";

interface Contents {
	title: string;
	showTimer?: boolean;
	showContactCTA?: boolean;
	showCTA?: boolean;
	showYear?: boolean;
	desc?: string;
	src: string;
	alt: string;
	className?: string;
	variant?: boolean;
}

const HeroContents = ({
	title,
	showTimer,
	showContactCTA,
	showYear,
	showCTA,
	desc,
}: Contents) => (
	<>
		{/* TITLE */}
		<motion.h1
			className="title relative z-10 text-center"
			variants={inViewVariants}
			initial="fromDown"
			animate="visible"
			transition={{
				duration: 0.4,
				delay: 2.4,
			}}
		>
			{title}
		</motion.h1>

		<motion.p
			className="text-center relative z-10 mt-4 px-4"
			variants={inViewVariants}
			initial="fromDown"
			animate="visible"
			transition={{
				duration: 0.4,
				delay: 2.6,
			}}
		>
			{desc}
		</motion.p>

		{/* YEAR */}
		{showYear && (
			<motion.span
				className="text-lg font-medium opacity-80 relative z-10"
				variants={inViewVariants}
				initial="fromDown"
				animate="visible"
				transition={{
					duration: 0.4,
					delay: 2.6,
				}}
			>
				2023-24
			</motion.span>
		)}

		{/* COUNTDOWN + DATE */}
		{showTimer && <Timer delay={2.8} />}

		{/* CTA */}
		{showCTA && (
			<motion.div
				className="flex gap-2 md:gap-4 mt-4 md:mt-6 relative z-10"
				variants={inViewVariants}
				initial="fromDown"
				animate="visible"
				transition={{
					duration: 0.4,
					delay: 3,
				}}
			>
				<CTA title="Register" href="/register" />
				<CTA title="Contact Us" href="/contact" secondary />
			</motion.div>
		)}

		{/* CONTACT CTA */}
		{showContactCTA && (
			<motion.div
				className="flex gap-2 md:gap-4 mt-4 md:mt-6 relative z-10"
				variants={inViewVariants}
				initial="fromDown"
				animate="visible"
				transition={{
					duration: 0.4,
					delay: 3,
				}}
			>
				<a href="https://www.instagram.com/nmmun_23/">
					<button className="hero-btn flex items-center gap-2">
						<AiFillInstagram className="w-6 h-6" /> Instagram
					</button>
				</a>
				<a href="mailto:nmmun2023cs@gmail.com">
					<button className="hero-btn flex items-center gap-2">
						<MdEmail className="w-6 h-6" /> Email
					</button>
				</a>
			</motion.div>
		)}
	</>
);

const Hero = (props: Contents) => {
	// return variant ? (
	return (
		<motion.section
			className={`text-white mt-8 w-full flex justify-center p-h ${props.className} mt-32 md:mt-[136px]`}
			variants={inViewVariants}
			initial="fromDown"
			animate="visible"
			transition={{
				duration: 0.4,
				delay: 2,
			}}
		>
			<div className="max-w-7xl w-full flex flex-col justify-center items-center py-28 md:py-20 relative shadow-md rounded-2xl bg-black ">
				<img
					src={props.src}
					alt={props.alt}
					className="w-full h-full absolute top-0 left-0 object-cover opacity-50 rounded-2xl"
				/>

				<HeroContents {...props} />
			</div>
		</motion.section>
	);
	//: (
	// 	<motion.section
	// 		className={`text-white mt-8 w-full flex justify-center p-h ${className}`}
	// 		variants={inViewVariants}
	// 		initial="fromDown"
	// 		animate="visible"
	// 		transition={{
	// 			duration: 0.4,
	// 			delay: 2,
	// 		}}
	// 	>
	// 		<img
	// 			src={src}
	// 			alt={alt}
	// 			className="w-full h-full absolute top-0 left-0 object-cover opacity-50 rounded-2xl"
	// 		/>
	// 		<div className="max-w-7xl w-full flex flex-col justify-center items-center py-28 md:py-20 relative shadow-md rounded-2xl bg-black ">
	// 			<HeroContents  />
	// 		</div>
	// 	</motion.section>
	// );
};

export default Hero;
