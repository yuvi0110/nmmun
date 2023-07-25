import React from "react";
import { Head, Hero } from "@/components";

function Allocations() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Allocations"
				desc="Get allocations information for all the council members and so on"
			/>

			{/* HERO */}
			<Hero
				title="ALLOCATIONS"
				src="/dummy.png"
				alt="some dummy"
				desc="The allocations will be available soon, please be patient."
				showTimer
				showCTA
			/>
		</main>
	);
}

export default Allocations;
