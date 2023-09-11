import React from "react";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";

import { DressCode, Head, Hero, Itinerary, UpdatedSoon} from "@/components";

// Itinerary
// - Dress code rules
// - ROP
// - Delegate handbook??? (Maybe)
// - Chair hand book

// TODO: table of content

function Info() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Information"
				desc="Get information for all the council members and so on"
			/>

			{/* HERO */}
			<Hero
				title="INFORMATION"
				src="/hero-info-2.jpg"
				alt="some dummy"
				desc="Discover the essentials for your Model United Nations experience. Access our comprehensive information page for key details on itinerary, dress code, Rules of Procedure, and more. Prepare to make your mark on the global stage."
				showTimer
				showCTA
				mobileMini
			/>

			{/* CONTENT */}
			{/* <UpdatedSoon /> */}
			{/* <Itinerary />
			<DressCode /> */}

			{/* RULES OF PROCEDURE */}
			{/* DELEGATE HANDBOOK */}
			{/* CHAIR HAND BOOK */}

			{/* <Hero
				src="/dummy.png"
				alt="some dummy img"
				title="NMMUN"
				showCTA
				showTimer
				showYear
				variant
				className=""
			/> */}
		</main>
	);
}

export default Info;

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
