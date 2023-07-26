import React from "react";
import { v4 as generateKey } from "uuid";

import { ImageWithDetails, TableOfContent } from "@/layouts";
import { ContentLink, Details, Head, Heading, Hero } from "@/components";

function Councils() {
	return (
		<main className="main">
			<Head title="NMMUN: Councils" desc="The various councils of nmmun" />

			{/* HERO */}
			<Hero
				title="COUNCILS"
				src="/dummy.png"
				alt="some dummy pic"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quaerat molestias."
			/>

			{/* TABLE OF CONTENT */}
			<TableOfContent>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((content, i) => (
					<ContentLink
						src="/dummy.png"
						alt="some dummy image"
						title="Title"
						url="#Title"
						delay={3 + i * 0.2}
						key={generateKey()}
					/>
				))}
			</TableOfContent>

			{/* CONTENT */}
			<ImageWithDetails className="py-12">
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails className="py-12" reverse>
				<Heading reverse>Title</Heading>
				<Details reverse>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails className="py-12">
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails className="py-12" reverse>
				<Heading reverse>Title</Heading>
				<Details reverse>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails className="py-12">
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails className="py-12" reverse>
				<Heading reverse>Title</Heading>
				<Details reverse>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails className="py-12">
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails className="py-12" reverse>
				<Heading reverse>Title</Heading>
				<Details reverse>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>

			{/* MARGIN BETWEEN */}
			<div className="my-4" />

			<Hero
				src="/dummy.png"
				alt="some dummy img"
				title="NMMUN"
				showCTA
				showTimer
				showYear
				variant
			/>
		</main>
	);
}

export default Councils;

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
