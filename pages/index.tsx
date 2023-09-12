import {
	Details,
	FAQ,
	Head,
	Heading,
	Hero,
	Quote,
	SubHeading,
} from "@/components";
import { inViewVariants } from "@/config/animations";
import { DetailsOnly, FAQsContainer, ImageWithDetails, ImageWithDetails2 } from "@/layouts";
import { motion } from "framer-motion"; //todo: need a seperate motion wrapper

export default function Home() {
	return (
		<main className="main">
			<Head
				title="NMMUN"
				desc="Explore the world of diplomacy and global affairs with the New Millennium Model United Nations Conference. Engage in debates, draft resolutions, and broaden your horizons. Join us for an educational journey that shapes future leaders."
			/>

			{/* HERO */}
			<Hero
				src="/hero-home-1.jpg"
				alt="NMMUN preview images of NMMUN'22"
				title="NMMUN"
				desc={
					<>
						<span className="font-semibold">Engage, Debate, Lead:</span>{" "}
						<i>Your Diplomatic Journey Begins Here!</i>
					</>
				}
				showCTA
				// showTimer
				ctaMargin="mt-8"
				showYear
				showDate
				carousel
				images={[
					"/gallery/21-22/(1).jpeg",
					"/hero-home-4.jpg",
					"/gallery/21-22/(18).jpeg",
					"/gallery/21-22/(4).jpeg",
					"/gallery/21-22/(5).jpeg",
				]}
				className="pt-32 pb-16"
				// bottomGradient={
				// 	<div className="w-full h-1/4 bottom-0 absolute bg-gradient-to-t from-[#885b43] to-[rgba(0,0,0,0)]"></div>
				// }
			/>

			{/* CONTENT */}
			{/* QUOTE */}
			<DetailsOnly
				className="py-36 bg-[#e7dacd]"
				// whiteText
				// bgImg="/hero-home-1.jpg"
				// bgImgAlt=""
				// bgOpacity={0.4}
			>
				<Quote>
					At New Millennium School, Bahrain, we believe in shaping future
					leaders, and the New Millennium Model United Nations (NMMUN)
					Conference is where this transformation begins.
				</Quote>
			</DetailsOnly>

			<DetailsOnly
				className="pb-36 pt-36"
				bgImg="/theme-bg-5.jpeg"
				bgOpacity={0.9}
				// whiteText
				bgImgTransition
			>
				{/* <DetailsOnly className="pb-36 pt-36 bg-[#a07a65]" whiteText> */}
				<div className="w-full md:w-2/3">
					<Heading className="mb-6">Zeroth Hour: Breaking the Silence</Heading>
					<Details className="font-medium">
						Many, if not all of us, are aware of the social ills that plague our
						society. These issues are detrimental to the overall quality of life
						of many people around the world. There's much we can do to work
						towards solving these ills, but the international community (and us,
						as individuals) tend to find ways to delay progress.
					</Details>
					<Details className="font-medium">
						For example, the pandemic is often used as a scapegoat by many
						governments for not appropriately meeting the 2030 SDG Agenda even
						though they were already not enacting sufficient changes before the
						pandemic.
					</Details>
					<Details className="font-medium">
						As a double entendre, it refers to the literal zeroth hour- we have
						many issues to solve in a limited timeframe and to the military
						“zero-hour” term, which refers to the time a planned exercise is
						about to begin. It is a metaphor for all the concerns that have been
						put on wait and are gradually creating irreparable harm.
					</Details>
					<Details className="font-medium">
						As humans, we are in a predicament where we have a very limited
						amount of time until such difficulties outweigh our ability to
						address them. Therefore, we must take the initiative to break this
						silence as we approach the zeroth hour.
					</Details>
				</div>
			</DetailsOnly>

			<ImageWithDetails
				reverse
				className="pt-36 pb-36 bg-[#e7dacd]"
				src="/diplomacy.png"
				alt=""
				w="w-full"
				h="h-full"
			>
				<Heading reverse className="">
					Discover Diplomacy Embrace Change
				</Heading>
				<Details reverse opacity={0.8}>
					The NMMUN Conference isn't just an event; it's an opportunity to
					explore the complexities of global diplomacy. Here, you'll step into
					the shoes of world leaders, debate critical global issues, and draft
					resolutions to make a real impact.
				</Details>
			</ImageWithDetails>

			<ImageWithDetails2
				// className="py-36 bg-[#885b43] mb-36"
				className="py-36 bg-[#a07a65]"
				src="/join-us.jpeg"
				alt=""
				imgOpacity={0.7}
				whiteText
			>
				<Heading className="mb-6">Why Join Us:</Heading>

				<motion.ul
					className="space-y-3 mt-6"
					variants={inViewVariants}
					initial="fromRight"
					whileInView="visible"
					transition={{
						duration: 0.4,
					}}
					viewport={{ once: true, amount: 0.25 }}
				>
					<li>
						<span className="font-semibold">Educational Experience:</span>{" "}
						<span className="opacity-80">
							Gain an in-depth understanding of global affairs and the art of
							international diplomacy.
						</span>
					</li>
					<li>
						<span className="font-semibold">Personal Growth:</span>{" "}
						<span className="opacity-80">
							Develop leadership, teamwork, and problem-solving skills essential
							for your future.
						</span>
					</li>
					<li>
						<span className="font-semibold">Global Network:</span>{" "}
						<span className="opacity-80">
							Connect with like-minded peers who share your passion for global
							change.
						</span>
					</li>
					<li>
						<span className="font-semibold">Fun and Fulfillment:</span>{" "}
						<span className="opacity-80">
							Enjoy an intellectually stimulating, fun-filled day leaving you
							with a sense of accomplishment.
						</span>
					</li>
				</motion.ul>
			</ImageWithDetails2>

			<DetailsOnly className="pt-36 pb-36">
				<Heading>FAQs</Heading>

				<FAQsContainer>
					<FAQ
						title="Is there a registration fee"
						info="Yes, there is a registration fee of 20BHD for all delegates and chairs."
					/>
					<FAQ
						title="Will food be provided on the day of the conference"
						info="We will provide breakfast, lunch, and snacks on the days of the conference."
					/>
					<FAQ
						title="Can I sign up if I know nothing about MUNs"
						info="Yes you can! We will provide all delegates with training sessions and our team will always be available to assist you."
					/>
					{/* <FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/> */}
				</FAQsContainer>
			</DetailsOnly>

			<Hero
				src="/hero-variant-5.jpeg"
				// src="/hero-variant-4.jpeg"
				alt="blurred nmmun logo with a gradient bg"
				title="SECURE YOUR SPOT"
				desc="Ready to Start Your Diplomatic Journey?"
				showCTA
				showTimer
				// showYear
				variant
				className=""
				smallerTitle
				bgImgOpacity={0.8}
			/>
		</main>
	);
}

// MAKING IT STATIC
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
