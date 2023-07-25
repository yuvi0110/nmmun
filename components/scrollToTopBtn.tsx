import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { FiArrowUp } from "react-icons/fi";
import { inViewVariants } from "@/constants/animations";

const ScrollToTopButton = ({ openSidebar, variant }: { openSidebar: boolean, variant?: boolean }) => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) setShowBtn(true);
			else setShowBtn(false);

			console.log(window.document.body.offsetHeight)
			console.log(window.scrollY)
			if (window.scrollY > window.document.body.offsetHeight - 1000) setShowBtn(false);
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return !variant ? (
		<motion.div
			className={`relative ${openSidebar && "hidden"}`}
			variants={inViewVariants}
			initial="fromBottom"
			animate="visible"
			transition={{ duration: 0.4 }}
		>
			{showBtn && (
				<button
					className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-blue-600 text-white rounded-full p-4 flex items-center gap-2 cursor-pointer duration-200 hover:scale-125 active:scale-100"
					onClick={goToTop}
				>
					<FiArrowUp className="w-6 h-6" />{" "}
					<span className="hidden md:flex">Go Back To Top</span>
				</button>
			)}
		</motion.div>
	) : (
		<div className="w-full flex justify-center py-8 p-h">
			<div className="max-w-7xl w-full flex justify-end">
				<button className="stt" onClick={goToTop}>
					<div className="text">
						<span>Back</span>
						<span>to</span>
						<span>top</span>
					</div>
					<div className="clone">
						<span>Back</span>
						<span>to</span>
						<span>top</span>
					</div>
					<svg
						width="20px"
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default ScrollToTopButton;
