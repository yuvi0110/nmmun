import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

import { inViewVariants } from "@/constants/animations";
import { CTA, Timer } from ".";

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
	src,
	alt,
	className,
}: Contents) => (
	<>
		{/* TITLE */}
		<motion.h1
			className="title relative z-10 text-center"
			variants={inViewVariants}
			initial="fromDown"
			whileInView="visible"
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
			whileInView="visible"
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
				whileInView="visible"
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
				whileInView="visible"
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
				whileInView="visible"
				transition={{
					duration: 0.4,
					delay: 3,
				}}
			>
				<CTA
					title="Instagram"
					href="https://www.instagram.com/nmmun_23/"
					icon={<AiFillInstagram className="w-6 h-6" />}
				/>
				<CTA
					title="Email"
					href="mailto:nmmun2023cs@gmail.com"
					icon={<MdEmail className="w-6 h-6" />}
					secondary
				/>
			</motion.div>
		)}
	</>
);

const Hero = ({
	title,
	showTimer,
	showContactCTA,
	showYear,
	showCTA,
	desc,
	className,
	src,
	alt,
	variant,
}: Contents) => {
	return variant ? (
		<motion.section
			className={`text-white w-full flex justify-center p-h ${className}`}
			variants={inViewVariants}
			initial="fromDown"
			whileInView="visible"
			viewport={{ once: true, amount: 0.25 }}
			transition={{
				duration: 0.4,
				
			}}
		>
			<div className="max-w-7xl w-full flex flex-col justify-center items-center py-28 md:py-20 relative shadow-md rounded-2xl bg-black ">
				<img
					src={src}
					alt={alt}
					className="w-full h-full absolute top-0 left-0 object-cover opacity-50 rounded-2xl"
				/>
				<>
					{/* TITLE */}
					<motion.h1
						className="title relative z-10 text-center"
						variants={inViewVariants}
						initial="fromDown"
						whileInView="visible"
						viewport={{ once: true, amount: 0.25 }}
						transition={{
							duration: 0.4,
						}}
					>
						{title}
					</motion.h1>

					<motion.p
						className="text-center relative z-10 mt-4 px-4"
						variants={inViewVariants}
						initial="fromDown"
						whileInView="visible"
						viewport={{ once: true, amount: 0.25 }}
						transition={{
							duration: 0.4,
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
							whileInView="visible"
							viewport={{ once: true, amount: 0.25 }}
							transition={{
								duration: 0.4,
								delay: 2.6,
							}}
						>
							2023-24
						</motion.span>
					)}

					{/* COUNTDOWN + DATE */}
					{showTimer && <Timer whileInView />}

					{/* CTA */}
					{showCTA && (
						<motion.div
							className="flex gap-2 md:gap-4 mt-4 md:mt-6 relative z-10"
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							viewport={{ once: true, amount: 0.25 }}
							transition={{
								duration: 0.4,
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
							whileInView="visible"
							viewport={{ once: true, amount: 0.25 }}
							transition={{
								duration: 0.4,
							}}
						>
							<CTA
								title="Instagram"
								href="https://www.instagram.com/nmmun_23/"
								icon={<AiFillInstagram className="w-6 h-6" />}
							/>
							<CTA
								title="Email"
								href="mailto:nmmun2023cs@gmail.com"
								icon={<MdEmail className="w-6 h-6" />}
								secondary
							/>
						</motion.div>
					)}
				</>
			</div>
		</motion.section>
	) : (
		<section
			className={`text-white w-full flex justify-center p-h bg-black ${className} relative pt-24`}
		>
			<img
				src={src}
				alt={alt}
				className="w-full h-full absolute top-0 left-0 object-cover opacity-50"
			/>
			<div className="max-w-7xl w-full flex flex-col justify-center items-center py-28 md:py-20 relative ">
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
							<CTA
								title="Instagram"
								href="https://www.instagram.com/nmmun_23/"
								icon={<AiFillInstagram className="w-6 h-6" />}
							/>
							<CTA
								title="Email"
								href="mailto:nmmun2023cs@gmail.com"
								icon={<MdEmail className="w-6 h-6" />}
								secondary
							/>
						</motion.div>
					)}
				</>
			</div>
		</section>
	);
};

export default Hero;
