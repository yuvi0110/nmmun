import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";

// State management
import { useEffect, useState } from "react";

// Transition Animations & Loaders
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import NextTopLoader from "nextjs-toploader";

// Components
import {
	Footer,
	Navbar,
	FloatingScrollToTopButton,
	ScrollToTopButton,
	Sidebar,
	FloatingNav,
	TransitionOverlay,
} from "@/components";
import { navLinks } from "@/config/links";

export default function App({ Component, pageProps }: AppProps) {
	const pathname = usePathname();

	const [showScrollToTop, setShowScrollToTop] = useState(false);
	const [openSidebar, setOpenSidebar] = useState(false);
	const [navbarDarkMode, setNavbarDarkMode] = useState(false);

	useEffect(() => {
		navLinks.forEach((link) => {
			if (link.href === pathname) {
				setShowScrollToTop(link.showScrollToTop);
				setNavbarDarkMode(link.navDarkMode);
			}
		});
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		setOpenSidebar(false);
	}, [pathname]);

	return (
		<AnimatePresence mode="wait">
			<TransitionOverlay />
			<NextTopLoader
				color="#e2d1ca"
				initialPosition={0.08}
				crawlSpeed={200}
				height={3}
				crawl={true}
				showSpinner={false}
				easing="ease"
				speed={200}
				shadow="inset 20px 20px 60px #c0b2ac, inset -20px -20px 60px #fff0e8"
			/>

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
					darkMode={navbarDarkMode}
					openSidebar={openSidebar}
				/>
				<Component {...pageProps} />

				{showScrollToTop && <ScrollToTopButton />}
				<Footer />
			</div>

			<FloatingNav setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />

			{/* Side Mobile Nav */}
			<Sidebar openSidebar={openSidebar} />
			<FloatingScrollToTopButton openSidebar={openSidebar} />
			<div className="fixed top-0 left-0">
				<ToastContainer />
			</div>
		</AnimatePresence>
	);
}
