import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, cubicBezier } from "framer-motion";

import {
	Footer,
	Navbar,
	ScrollToTopButton,
	Sidebar,
	FloatingNav,
	Loader,
} from "@/components";
import { LoaderVariants } from "@/constants/types";

export default function App({ Component, pageProps }: AppProps) {
	const pathname = usePathname();
	const [openSidebar, setOpenSidebar] = useState(false);
	useEffect(() => {
		setOpenSidebar(false);
	}, [pathname]);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				className="w-full h-full bg-white fixed top-0 left-0 z-[1000] flex justify-center items-center"
				initial={{
					x: 0,
				}}
				animate={{
					x: "-100%",
					transition: {
						delay: 1,
						duration: 0.4,
						ease: cubicBezier(0.77, 0, 0.18, 1),
					},
				}}
				exit={{
					x: 0,
				}}
				transition={{
					duration: 0.6,
				}}
				key={pathname}
			>
				<Loader variant={LoaderVariants.Logo} />
			</motion.div>

			<div
				className={`relative transition-all duration-300 ${
					openSidebar ? "-translate-x-3/4 md:-translate-x-1/2" : "translate-x-0"
				} flex flex-col items-center w-full`}
				style={{
					width: "100vw",
				}}
			>
				<Navbar
					setOpenSidebar={setOpenSidebar}
					darkMode
					openSidebar={openSidebar}
				/>
				<Component {...pageProps} />
				{pathname !== "/contact" &&
					pathname !== "/allocations" &&
					pathname !== "/info" && (
						<ScrollToTopButton variant openSidebar={openSidebar} />
					)}
				<Footer />
			</div>

			<FloatingNav setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />

			{/* Side Mobile Nav */}
			<Sidebar openSidebar={openSidebar} />
			<ScrollToTopButton openSidebar={openSidebar} />
		</AnimatePresence>
	);
}
