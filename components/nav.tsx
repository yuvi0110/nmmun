import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { v4 as generateKey } from "uuid";

import Link from "next/link";
import Image from "next/image";

import { CTA, Timer } from ".";
import { inViewVariants } from "@/constants/animations";
import { navLinks } from "@/constants/links";

const Navbar = ({
	setOpenSidebar,
}: {
	setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<motion.nav
			className="border-b border-gray-300 p-h py-2 md:py-1 w-full shadow-sm xl:rounded-lg flex justify-center fixed top-0 left-0 z-50"
			variants={inViewVariants}
			initial="fromTop"
			animate="visible"
			transition={{ duration: 0.4, delay: 1.6 }}
		>
			<div className="max-w-7xl flex items-center justify-between w-full">
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
									<Link href={link.href} className="nav-link nav-link-anim nav-link-ltr" title={link.name}>
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
	);
};

export default Navbar;
