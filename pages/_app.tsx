import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import Navbar from "@/components/nav";

export default function App({ Component, pageProps }: AppProps) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				className="w-full h-full bg-white absolute top-0 left-0 z-50"
				animate={{
					x: "100%",
				}}
				initial={{
					x: 0,
				}}
				exit={{
					x: 0,
				}}
				transition={{
					duration: 0.6,
				}}
				key={pathname}
			></motion.div>

			<Navbar />
			<Component {...pageProps} />
		</AnimatePresence>
	);
}
