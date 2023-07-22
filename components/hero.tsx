import React from "react";

const Hero = () => {
	return (
		<section className="bg-blue-700 text-white rounded-2xl flex flex-col justify-center items-center py-12 md:py-20 mt-6">
			{/* TITLE */}
			<h1 className="title">NMMUN</h1>

			{/* YEAR */}
			<span className="text-lg font-medium opacity-80">2023-24</span>

			{/* COUNTDOWN + DATE */}
			<div className="grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max my-4 md:my-6">
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
			</div>

			{/* CTA */}
			<div className="flex gap-2 md:gap-4 mt-4 md:mt-6">
				<button className="hero-btn">Contact Us</button>
				<button className="hero-btn">Apply</button>
			</div>
		</section>
	);
};

export default Hero;
