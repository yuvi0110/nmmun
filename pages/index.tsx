import Head from "next/head";
import { motion } from "framer-motion";

import ImageWithDetails from "@/layouts/img-details";
import Hero from "@/components/hero";
import Heading from "@/components/heading";
import Details from "@/components/details";
import SubHeading from "@/components/sub-heading";
import DetailsOnly from "@/layouts/details-only";
import FAQsContainer from "@/layouts/faq-container";

import { Accordion } from "react-accessible-accordion";
import FAQ from "@/components/faq";

export default function Home() {
	return (
		<main className="flex flex-col items-center relative">
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
			<ImageWithDetails bg="#131313" whiteText classNames="mt-24" bgImg="/dummy.png" bgOpacity="opacity-40">
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

			<ImageWithDetails reverse bg="#00ff00">
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

			<DetailsOnly>
				<Heading delay={0}>Title</Heading>
				<Details delay={0.2}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut!
				</Details>
				<Details delay={0.4}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Praesentium fugit beatae voluptatibus cum fugiat
					maiores perspiciatis libero, repudiandae voluptate error nesciunt
					similique vitae voluptas unde ipsa labore culpa harum? Inventore!
				</Details>
				<SubHeading delay={0.6}>Subheadding</SubHeading>
				<Details delay={0.8}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details delay={1}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details delay={1.2}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<SubHeading delay={1.4}>Subheadding</SubHeading>
				<Details delay={1.6}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</DetailsOnly>

			<DetailsOnly>
				<Heading delay={0}>FAQs</Heading>

				<FAQsContainer>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
						delay={0}
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
						delay={0.2}
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
						delay={0.4}
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
						delay={0.6}
					/>
				</FAQsContainer>
			</DetailsOnly>
		</main>
	);
}
