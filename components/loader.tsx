import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

import { LoaderVariants } from "@/constants/types";

const Loader = ({ variant }: { variant: LoaderVariants }) => {
	if (variant === LoaderVariants.Dots) {
		return (
			<div className="three-body">
				<div className="three-body__dot"></div>
				<div className="three-body__dot"></div>
				<div className="three-body__dot"></div>
			</div>
		);
	} else if (variant === LoaderVariants.Line) {
		return <div className="loader-line" />;
	} else if (variant === LoaderVariants.Cross) {
		return <div className="loader-cross"></div>;
	} else if (variant === LoaderVariants.Dots2) {
		return (
			<svg className="pl" width="240" height="240" viewBox="0 0 240 240">
				<circle
					className="pl__ring pl__ring--a"
					cx="120"
					cy="120"
					r="105"
					fill="none"
					stroke="#000"
					stroke-width="20"
					stroke-dasharray="0 660"
					stroke-dashoffset="-330"
					stroke-linecap="round"
				></circle>
				<circle
					className="pl__ring pl__ring--b"
					cx="120"
					cy="120"
					r="35"
					fill="none"
					stroke="#000"
					stroke-width="20"
					stroke-dasharray="0 220"
					stroke-dashoffset="-110"
					stroke-linecap="round"
				></circle>
				<circle
					className="pl__ring pl__ring--c"
					cx="85"
					cy="120"
					r="70"
					fill="none"
					stroke="#000"
					stroke-width="20"
					stroke-dasharray="0 440"
					stroke-linecap="round"
				></circle>
				<circle
					className="pl__ring pl__ring--d"
					cx="155"
					cy="120"
					r="70"
					fill="none"
					stroke="#000"
					stroke-width="20"
					stroke-dasharray="0 440"
					stroke-linecap="round"
				></circle>
			</svg>
		);
	} else if (variant === LoaderVariants.Bounce) {
		return (
			<div className="typing-indicator">
				<div className="typing-circle"></div>
				<div className="typing-circle"></div>
				<div className="typing-circle"></div>
				<div className="typing-shadow"></div>
				<div className="typing-shadow"></div>
				<div className="typing-shadow"></div>
			</div>
		);
	} else {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.8,
				}}
			>
				<Image src="/nmmun.png" alt="nmmun logo" width={128} height={128} />
			</motion.div>
		);
	}
};

export default Loader;
