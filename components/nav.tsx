import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Timer from "./timer";

const Navbar = ({
	openSidebar,
	setOpenSidebar,
}: {
	openSidebar: boolean;
	setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
	const toggleSidebar = () => {
		console.log("Hi");
		setOpenSidebar((prev) => !prev);
	};

	return (
		<motion.nav
			className="border-b border-gray-300 p-h py-2 md:py-3 lg:py-2 w-full shadow-sm xl:rounded-lg flex justify-center"
			initial={{
				y: -25,
				opacity: 0,
			}}
			animate={{ y: 0, opacity: 1 }}
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
				<div className="hidden md:flex">
					<ul className="flex gap-4 lg:gap-8 items-center">
						<li>
							<Link href="/" className="link" title="Home">
								Home
							</Link>
						</li>
						<li>
							<Link href="/councils" className="link" title="Councils">
								Councils
							</Link>
						</li>
						<li>
							<Link href="/gallery" className="link" title="Gallery">
								Gallery
							</Link>
						</li>
						<li>
							<Link href="/info" className="link" title="Information">
								Information
							</Link>
						</li>
						<li>
							<Link href="/allocations" className="link" title="Allocations">
								Allocations
							</Link>
						</li>
						<li>
							<Link href="/team" className="link" title="Team">
								Team
							</Link>
						</li>
						<li>
							<Link href="/contact" className="link" title="Contact Us">
								Contact Us
							</Link>
						</li>
						<li>
							<Link href="/register" className="link" title="Register">
								<button className="px-6 py-2 bg-primary rounded-md text-white cursor-pointer hover:opacity-60 transition-all duration-200">
									Register
								</button>
							</Link>
						</li>
					</ul>
				</div>

				{/* LINKS - Mobile */}
				<div className="md:hidden">
					<button>
						<label className="hamburger">
							<input type="checkbox" onClick={toggleSidebar} />
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
