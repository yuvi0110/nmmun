import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { RecoilRoot } from "recoil";

import { AnimatePresence, motion } from "framer-motion";

import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const pathname = usePathname();
	const [openSidebar, setOpenSidebar] = useState(false);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				className="w-full h-full bg-blue-600 fixed top-0 left-0 z-50 flex justify-center items-center"
				initial={{
					x: 0,
				}}
				animate={{
					x: "100%",
					transition: {
						delay: 1,
						duration: 0.4,
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
				<motion.svg
					width="57"
					height="59"
					viewBox="0 0 57 59"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.8,
					}}
					key={pathname}
				>
					<path
						d="M44.8533 45.443C44.1253 43.1097 42.0253 41.3889 39.5333 41.3889H36.7333V32.6389C36.7333 31.8653 36.4383 31.1235 35.9132 30.5765C35.3881 30.0295 34.6759 29.7222 33.9333 29.7222H17.1333V23.8889H22.7333C23.4759 23.8889 24.1881 23.5816 24.7132 23.0346C25.2383 22.4876 25.5333 21.7458 25.5333 20.9722V15.1389H31.1333C32.6186 15.1389 34.0429 14.5243 35.0931 13.4303C36.1433 12.3364 36.7333 10.8526 36.7333 9.30554V8.10971C40.0835 9.51661 43.0564 11.7482 45.3977 14.6134C47.739 17.4786 49.379 20.8921 50.1771 24.5618C50.9753 28.2314 50.9079 32.0479 49.9807 35.6845C49.0535 39.3211 47.2942 42.6694 44.8533 45.443ZM25.5333 52.8514C14.4733 51.4222 5.93334 41.6222 5.93334 29.7222C5.93334 27.9139 6.15734 26.1639 6.52134 24.5014L19.9333 38.4722V41.3889C19.9333 42.936 20.5233 44.4197 21.5735 45.5137C22.6237 46.6076 24.0481 47.2222 25.5333 47.2222M28.3333 0.555542C24.6563 0.555542 21.0153 1.30996 17.6182 2.77572C14.2211 4.24148 11.1344 6.38989 8.53435 9.09826C3.28333 14.5681 0.333344 21.9867 0.333344 29.7222C0.333344 37.4577 3.28333 44.8763 8.53435 50.3462C11.1344 53.0545 14.2211 55.2029 17.6182 56.6687C21.0153 58.1345 24.6563 58.8889 28.3333 58.8889C35.7594 58.8889 42.8813 55.816 48.1323 50.3462C53.3834 44.8763 56.3333 37.4577 56.3333 29.7222C56.3333 25.892 55.6091 22.0993 54.202 18.5606C52.7948 15.0219 50.7324 11.8066 48.1323 9.09826C45.5323 6.38989 42.4456 4.24148 39.0485 2.77572C35.6514 1.30996 32.0104 0.555542 28.3333 0.555542Z"
						fill="#fff"
					/>
				</motion.svg>
			</motion.div>

			<div
				className={`max-w-7xl relative transition-all duration-300 ${
					openSidebar ? "-translate-x-3/4" : "translate-x-0"
				}`}
				style={{
					width: "100vw",
				}}
			>
				<Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
				<Component {...pageProps} />
				<Footer />
			</div>

			{/* Side Mobile Nav */}
			<Sidebar openSidebar={openSidebar} />
		</AnimatePresence>
	);
}
