import { Head, Hero } from "@/components";
import React from "react";

function Info() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Allocations"
				desc="Get allocations information for all the council members and so on"
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
		</main>
	);
}

export default Info;
