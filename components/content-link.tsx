import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { inViewVariants } from "@/constants/animations";

const ContentLink = ({
	src,
	alt,
	title,
	url,
	delay,
}: {
	src: string;
	alt: string;
	title: string;
	url: string;
	delay?: number;
}) => {
	return (
		<Link href={url}>
			<motion.div
				className="flex items-center gap-4 rounded-xl hover:bg-gray-200 p-2 md:flex-col md:p-12"
				variants={inViewVariants}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 0.4,
					delay,
				}}
			>
				<img
					src={src}
					alt={alt}
					className="rounded-full w-8 h-8 md:w-20 md:h-20"
				/>
				<p className="font-semibold underline md:text-xl">{title}</p>
			</motion.div>
		</Link>
	);
};

export default ContentLink;
