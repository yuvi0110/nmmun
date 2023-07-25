import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { FiArrowUp } from "react-icons/fi";
import { inViewVariants } from "@/constants/animations";

const ScrollToTopButton = ({ openSidebar }: { openSidebar: boolean }) => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) setShowBtn(true);
			else setShowBtn(false);
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<motion.div
			className={`relative ${openSidebar && "hidden"}`}
			variants={inViewVariants}
			initial="fromBottom"
			animate="visible"
			transition={{ duration: 0.4 }}
		>
			{showBtn && (
				<button
					className="fixed bottom-6 right-6 bg-blue-400 text-white rounded-full p-4 flex items-center gap-2 cursor-pointer duration-200 hover:scale-125 active:scale-100"
					onClick={goToTop}
				>
					<FiArrowUp className="w-6 h-6" />{" "}
					<span className="hidden md:flex">Go Back To Top</span>
				</button>
			)}
		</motion.div>
	);
};

export default ScrollToTopButton;
