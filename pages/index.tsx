import Head from "next/head";
import { motion } from "framer-motion";

import Hero from "@/components/hero";

export default function Home() {
	return (
		<main className="p-h">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<title>NMMUN</title>
			</Head>

			{/* HERO */}
			<Hero />

			{/* REST OF IT */}
		</main>
	);
}
