import Details from "@/components/details";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import ImageWithDetails from "@/layouts/img-details";
import Head from "next/head";
import React from "react";

function Councils() {
	return (
		<main className="main">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<title>NMMUN</title>
			</Head>

			{/* HERO */}
			<Hero
				title="COUNCILS"
				src="/dummy.png"
				alt="some dummy pic"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quaerat molestias."
			/>

			{/* TABLE OF CONTENT */}

			{/* CONTENT */}
			<ImageWithDetails classNames="py-12">
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails classNames="py-12" reverse>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails classNames="py-12">
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails classNames="py-12" reverse>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails classNames="py-12">
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails classNames="py-12" reverse>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails classNames="py-12">
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
			<ImageWithDetails classNames="py-12" reverse>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
					quidem sapiente nihil molestiae voluptates ullam ad consectetur, dolor
					sunt libero magnam iure magni tenetur, porro, architecto deserunt
					saepe adipisci vitae?
				</Details>
			</ImageWithDetails>
		</main>
	);
}

export default Councils;
