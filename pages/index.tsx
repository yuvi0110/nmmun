import Head from "next/head";
import { motion } from "framer-motion";

import ImageWithDetails from "@/layouts/img-details";
import Hero from "@/components/hero";
import Heading from "@/components/heading";
import Details from "@/components/details";
import SubHeading from "@/components/sub-heading";
import DetailsOnly from "@/layouts/details-only";
import FAQsContainer from "@/layouts/faq-container";
import FAQ from "@/components/faq";

export default function Home() {
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
				src="/dummy.png"
				alt="some dummy img"
				title="NMMUN"
				showCTA
				showTimer
				showYear
			/>

			{/* CONTENT */}
			<ImageWithDetails
				bg="#131313"
				whiteText
				classNames="mt-24 py-28"
				bgImg="/dummy.png"
				bgOpacity="opacity-40"
			>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
					temporibus nobis voluptatem id quae. Delectus enim voluptas blanditiis
					libero, nemo ipsa quasi expedita, incidunt doloremque sit quia quaerat
					quae.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</ImageWithDetails>

			<ImageWithDetails classNames="py-28 bg-red-500" whiteText reverse>
				<Heading reverse>Title</Heading>
				<Details reverse>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
					temporibus nobis voluptatem id quae. Delectus enim voluptas blanditiis
					libero, nemo ipsa quasi expedita, incidunt doloremque sit quia quaerat
					quae.
				</Details>
				<Details reverse>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<SubHeading reverse>Subheadding</SubHeading>
				<Details reverse>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</ImageWithDetails>

			<DetailsOnly classNames="bg-blue-600" whiteText>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut!
				</Details>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Praesentium fugit beatae voluptatibus cum fugiat
					maiores perspiciatis libero, repudiandae voluptate error nesciunt
					similiquereversevitae voluptas unde ipsa labore culpa harum?
					Inventore!
				</Details>
				<SubHeading>Subheadding</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<SubHeading>Subheadding</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</DetailsOnly>

			<DetailsOnly
				bgImg="/dummy.png"
				whiteText
				bgOpacity="opacity-50"
				bg="#131313"
			>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut!
				</Details>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Praesentium fugit beatae voluptatibus cum fugiat
					maiores perspiciatis libero, repudiandae voluptate error nesciunt
					similiquereversevitae voluptas unde ipsa labore culpa harum?
					Inventore!
				</Details>
				<SubHeading>Subheadding</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<SubHeading>Subheadding</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</DetailsOnly>

			<DetailsOnly>
				<Heading>FAQs</Heading>

				<FAQsContainer>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
				</FAQsContainer>
			</DetailsOnly>
		</main>
	);
}
