import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
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

	// TODO: is there a way to transition this in smoothly
	return (
		<div className="relative">
			{showBtn && (
				<button
					className="fixed bottom-6 right-6 bg-blue-400 text-white rounded-full p-4 flex items-center gap-2"
					onClick={goToTop}
				>
					<FiArrowUp className="w-6 h-6" />{" "}
					<span className="hidden md:flex">Go Back To Top</span>
				</button>
			)}
		</div>
	);
};

export default ScrollToTopButton;
