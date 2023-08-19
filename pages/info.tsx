import React from "react";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";

import { DressCode, Head, Hero, Itinerary} from "@/components";

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
				src="/hero-info-1.jpg"
				alt="some dummy"
				desc="The informations will be added soon, please be patient."
				showTimer
				showCTA
				mobileMini
			/>

			{/* CONTENT */}
			<Itinerary />
			<DressCode />

			{/* RULES OF PROCEDURE */}
			{/* DELEGATE HANDBOOK */}
			{/* CHAIR HAND BOOK */}

			<Hero
				src="/dummy.png"
				alt="some dummy img"
				title="NMMUN"
				showCTA
				showTimer
				showYear
				variant
				className=""
			/>
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
