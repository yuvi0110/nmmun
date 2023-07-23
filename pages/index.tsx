import Head from "next/head";
import { motion } from "framer-motion";

import ImageWithDetails from "@/layouts/img-details";
import Hero from "@/components/hero";
import Heading from "@/components/heading";
import Details from "@/components/details";
import SubHeading from "@/components/sub-heading";

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

			{/* CONTENT */}
			<ImageWithDetails>
				<Heading delay={0}>Title</Heading>
				<Details delay={0.2}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
					temporibus nobis voluptatem id quae. Delectus enim voluptas blanditiis
					libero, nemo ipsa quasi expedita, incidunt doloremque sit quia quaerat
					quae.
				</Details>
				<Details delay={0.4}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</ImageWithDetails>

			<ImageWithDetails reverse>
				<Heading reverse delay={0}>
					Title
				</Heading>
				<Details reverse delay={0.2}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
					temporibus nobis voluptatem id quae. Delectus enim voluptas blanditiis
					libero, nemo ipsa quasi expedita, incidunt doloremque sit quia quaerat
					quae.
				</Details>
				<Details reverse delay={0.4}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<SubHeading reverse delay={0.6}>
					Subheadding
				</SubHeading>
				<Details reverse delay={0.8}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</ImageWithDetails>
		</main>
	);
}
