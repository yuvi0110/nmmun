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
		const t = "2023-7-15 23:59:59".split(/[- : T]/);
		const targetTime = new Date(
			parseInt(t[0]),
			parseInt(t[1]),
			parseInt(t[2]),
			parseInt(t[3]),
			parseInt(t[4]),
			parseInt(t[5])
		); //! IOS SUPPORT FIX
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
			<div className="timer-container-mini">
				<span className="number-span-mini">
					<span>{days < 10 ? `0${days}` : days}</span>
				</span>
				<span className="detail-span-mini">days</span>
			</div>
			<div className="timer-container-mini">
				<span className="number-span-mini">
					<span>{hours < 10 ? `0${hours}` : hours}</span>
				</span>
				<span className="detail-span-mini">hours</span>
			</div>
			<div className="timer-container-mini">
				<span className="number-span-mini">
					<span>{minutes < 10 ? `0${minutes}` : minutes}</span>
				</span>
				<span className="detail-span-mini">min</span>
			</div>
			<div className="timer-container-mini">
				<span className="number-span-mini">
					<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
				</span>
				<span className="detail-span-mini">sec</span>
			</div>
		</motion.div>
	) : (
		<div className="flex flex-col items-center mb-2">
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
			<motion.span
				className="text-white font-medium relative z-10 opacity-60"
				variants={enterVariants}
				initial="hidden"
				animate="visible"
				transition={{
					duration: 0.6,
					delay,
				}}
			>
				Wednesday, 24th August, 2023
			</motion.span>
		</div>
	);
};

export default Timer;
