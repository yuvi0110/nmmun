import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const Timer = ({ delay, mini }: { delay: number; mini?: boolean }) => {
	const [days, setDays] = useState(99);
	const [hours, setHours] = useState(99);
	const [minutes, setMinutes] = useState(99);
	const [seconds, setSeconds] = useState(99);

	useEffect(() => {
		const targetTime = new Date("2023-9-23 23:59:59");
		const now = new Date();
		const difference = targetTime.getTime() - now.getTime();

		let gSeconds = Math.floor(difference / 1000),
			gMinutes = Math.floor(gSeconds / 60),
			gHours = Math.floor(gMinutes / 60),
			gDays = Math.floor(gHours / 24);
		gHours %= 24;
		gMinutes %= 60;
		gSeconds %= 60;

		setSeconds(gSeconds);
		setMinutes(gMinutes);
		setHours(gHours);
		setDays(gDays);

		const timerInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					if (hours === 0) {
						if (days === 0) {
							clearInterval(timerInterval);
						} else {
							setDays(days - 1);
							setHours(23);
						}
					} else {
						setHours(hours - 1);
						setMinutes(59);
					}
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(timerInterval);
		};
	});

	return mini ? (
		<motion.div
			className="grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max my-4 relative z-10"
			variants={enterVariants}
			initial="hidden"
			animate="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
		>
			<div className="timer-container bg-opacity-10">
				<span className="number-span text-lg">
					<span>{days < 10 ? `0${days}` : days}</span>
				</span>
				<span className="detail-span text-xs">days</span>
			</div>
			<div className="timer-container bg-opacity-10">
				<span className="number-span text-lg">
					<span>{hours < 10 ? `0${hours}` : hours}</span>
				</span>
				<span className="detail-span text-xs">hours</span>
			</div>
			<div className="timer-container bg-opacity-10">
				<span className="number-span text-lg">
					<span>{minutes < 10 ? `0${minutes}` : minutes}</span>
				</span>
				<span className="detail-span text-xs">min</span>
			</div>
			<div className="timer-container bg-opacity-10">
				<span className="number-span text-lg">
					<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
				</span>
				<span className="detail-span text-xs">sec</span>
			</div>
		</motion.div>
	) : (
		<motion.div
			className="grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max my-4 md:my-6 relative z-10"
			variants={enterVariants}
			initial="hidden"
			animate="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
		>
			<div className="timer-container">
				<span className="number-span">
					<span>{days < 10 ? `0${days}` : days}</span>
				</span>
				<span className="detail-span">days</span>
			</div>
			<div className="timer-container">
				<span className="number-span">
					<span>{hours < 10 ? `0${hours}` : hours}</span>
				</span>
				<span className="detail-span">hours</span>
			</div>
			<div className="timer-container">
				<span className="number-span">
					<span>{minutes < 10 ? `0${minutes}` : minutes}</span>
				</span>
				<span className="detail-span">min</span>
			</div>
			<div className="timer-container">
				<span className="number-span">
					<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
				</span>
				<span className="detail-span">sec</span>
			</div>
		</motion.div>
	);
};

export default Timer;
