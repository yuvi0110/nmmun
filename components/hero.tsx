import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Timer from "./timer";
import Link from "next/link";

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

const Hero = ({
	title,
	showTimer,
	showContactCTA,
	showYear,
	showCTA,
	desc,
	src,
	alt,
	className
}: {
	title: string;
	showTimer?: boolean;
	showContactCTA?: boolean;
	showCTA?: boolean;
	showYear?: boolean;
	desc?: string;
	src: string;
	alt: string;
	className?: string
}) => {
	return (
		<motion.section
			className={`text-white mt-6 w-full flex justify-center p-h ${className}`}
			variants={enterVariants}
			initial="hidden"
			animate="visible"
			transition={{
				duration: 0.4,
				delay: 2,
			}}
		>
			<div className="max-w-7xl w-full flex flex-col justify-center items-center py-28 md:py-20 relative shadow-md rounded-2xl bg-black ">
				<img
					src={src}
					alt={alt}
					className="w-full h-full absolute top-0 left-0 object-cover opacity-50 rounded-2xl"
				/>

				{/* TITLE */}
				<motion.h1
					className="title relative z-10 text-center"
					variants={enterVariants}
					initial="hidden"
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
					variants={enterVariants}
					initial="hidden"
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
				)}

				{/* COUNTDOWN + DATE */}
				{showTimer && <Timer delay={2.8} />}

				{/* CTA */}
				{showCTA && (
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
						<Link href="/register">
							<button className="hero-btn bg-primary text-white">
								Register
							</button>
						</Link>
						<Link href="/contact">
							<button className="hero-btn">Contact Us</button>
						</Link>
					</motion.div>
				)}

				{/* CONTACT CTA */}
				{showContactCTA && (
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
			</div>
		</motion.section>
	);
};

export default Hero;
