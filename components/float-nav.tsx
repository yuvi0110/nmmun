import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";

import { CTA, Timer } from ".";
import { navLinks } from "@/constants/links";
import { inViewVariants } from "@/constants/animations";

const FloatingNav = ({
	openSidebar,
	setOpenSidebar,
}: {
	setOpenSidebar: Dispatch<SetStateAction<boolean>>;
	openSidebar: boolean;
}) => {
	const [showFloatingNav, setShowFloatingNav] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) setShowFloatingNav(true);
			else setShowFloatingNav(false);
		});
	}, []);

	return (
		showFloatingNav && (
			<motion.nav
				// className={`p-h py-2 md:py-1 w-screen flex justify-center z-50 fixed top-4 ${
				// 	openSidebar ? "right-3/4 md:right-1/2" : "right-0"
				// } transition-all duration-300`}
				className={`p-h py-2 md:py-1 w-screen flex justify-center z-50 fixed top-4`}
				variants={inViewVariants}
				initial="fromTop"
				animate="visible"
				exit="fromTop"
				transition={{ duration: 0.4 }}
			>
				<div
					className={`max-w-7xl flex items-center justify-between w-full shadow-md rounded-2xl bg-slate-50 p-h ${
						openSidebar
							? "-translate-x-3/4 md:-translate-x-1/2"
							: "translate-x-0"
					} transition-all duration-300`}
				>
					{/* LOGO + COUNTDOWN */}
					<div className="flex gap-4 lg:gap-8 items-center">
						<Link href="/">
							<Image src="/logo.svg" alt="nmmun logo" width={36} height={36} />
						</Link>
						<Timer delay={0} mini />
					</div>

					{/* LINKS - Desktop */}
					<div className="hidden xl:flex">
						<ul className="flex gap-4 lg:gap-8 items-center">
							{navLinks.map((link) =>
								link.cta ? (
									<li key={generateKey()}>
										<CTA title={link.name} href={link.href} />
									</li>
								) : (
									<li key={generateKey()}>
										<Link
											href={link.href}
											className="nav-link nav-link-anim nav-link-ltr"
											title={link.name}
										>
											{link.name}
										</Link>
									</li>
								)
							)}
						</ul>
					</div>

					{/* LINKS - Mobile - SIDEBAR TOGGLE */}
					<div className="xl:hidden">
						<button>
							<label className="hamburger">
								<input
									type="checkbox"
									onClick={() => setOpenSidebar((prev) => !prev)}
								/>
								<svg viewBox="0 0 32 32">
									<path
										className="line line-top-bottom"
										d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
									></path>
									<path className="line" d="M7 16 27 16"></path>
								</svg>
							</label>
						</button>
					</div>
				</div>
			</motion.nav>
		)
	);
};

export default FloatingNav;
