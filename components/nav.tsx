import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { v4 as generateKey } from "uuid";

import Link from "next/link";

import { CTA, Logo, Timer } from ".";
import { inViewVariants } from "@/constants/animations";
import { navLinks } from "@/constants/links";

const Navbar = ({
	setOpenSidebar,
	darkMode,
	openSidebar
}: {
	openSidebar: boolean;
	setOpenSidebar: Dispatch<SetStateAction<boolean>>;
	darkMode?: boolean;
}) => {
	return (
		<motion.nav
			className={`border-b ${
				darkMode ? "border-gray-500" : "border-gray-300"
			} p-h py-2 md:py-1 w-full flex justify-center absolute top-0 left-0 z-[100] backdrop-blur-lg`}
			variants={inViewVariants}
			initial="fromTop"
			animate="visible"
			transition={{ duration: 0.4, delay: 1.6 }}
		>
			<div className="max-w-7xl flex items-center justify-between w-full">
				{/* LOGO + COUNTDOWN */}
				<div className="flex gap-4 lg:gap-8 items-center">
					<Link href="/">
						<Logo darkMode w={36} h={36} />
					</Link>
					<Timer delay={0} mini darkMode />
				</div>

				{/* LINKS - Desktop */}
				<div className="hidden xl:flex">
					<ul
						className={`flex gap-4 lg:gap-8 items-center ${
							darkMode && "text-white"
						}`}
					>
						{navLinks.map((link) =>
							link.cta ? (
								<li key={generateKey()}>
									<CTA title={link.name} href={link.href} />
								</li>
							) : (
								<li key={generateKey()}>
									<Link
										href={link.href}
										className={`nav-link nav-link-anim nav-link-ltr ${
											darkMode && "nav-link-anim-dark"
										}`}
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
								checked={openSidebar}
							/>
							<svg viewBox="0 0 32 32">
								<path
									className={`line line-top-bottom ${darkMode && "line-dark"}`}
									d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
								></path>
								<path
									className={`line ${darkMode && "line-dark"}`}
									d="M7 16 27 16"
								></path>
							</svg>
						</label>
					</button>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
