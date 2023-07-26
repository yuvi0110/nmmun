import React from "react";
import { v4 as generateKey } from "uuid";
import { motion } from "framer-motion";

import { Head, Hero, SubHeading } from "@/components";
import { TwoColumnsLayout } from "@/layouts";
import { inViewVariants } from "@/constants/animations";
import DressCode from "@/components/dress-code";

// Itinerary
// - Dress code rules
// - ROP
// - Delegate handbook??? (Maybe)
// - Chair hand book

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
				src="/dummy.png"
				alt="some dummy"
				desc="The informations will be added soon, please be patient."
				showTimer
				showCTA
				mobileMini
			/>

			{/* CONTENT */}
			{/* ITINERARY */}

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
