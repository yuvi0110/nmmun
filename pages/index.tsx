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
import { DetailsOnly, FAQsContainer, ImageWithDetails } from "@/layouts";
import { motion } from "framer-motion"; //todo: need a seperate motion wrapper

export default function Home() {
	return (
		<main className="main">
			<Head title="NMMUN" desc="The introductory landing page of NMMUN" />

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
				// showYear
				showDate
				carousel
				images={[
					"/hero-home-4.jpg",
					"/hero-home-5.jpg",
					"/hero-home-1.jpg",
					"/hero-home-3.jpg",
				]}
				className="pt-32 pb-16"
			/>

			{/* CONTENT */}
			<DetailsOnly className="pb-28 pt-28">
				<Heading className="mb-6">Zeroth Hour: Breaking the Silence</Heading>
				<Details>
					Many, if not all of us, are aware of the social ills that plague our
					society. These issues are detrimental to the overall quality of life
					of many people around the world. There's much we can do to work
					towards solving these ills, but the international community (and us,
					as individuals) tend to find ways to delay progress.
				</Details>
				<Details>
					For example, the pandemic is often used as a scapegoat by many
					governments for not appropriately meeting the 2030 SDG Agenda even
					though they were already not enacting sufficient changes before the
					pandemic.
				</Details>
				<Details>
					As a double entendre, it refers to the literal zeroth hour- we have
					many issues to solve in a limited timeframe and to the military
					“zero-hour” term, which refers to the time a planned exercise is about
					to begin. It is a metaphor for all the concerns that have been put on
					wait and are gradually creating irreparable harm.
				</Details>
				<Details>
					As humans, we are in a predicament where we have a very limited amount
					of time until such difficulties outweigh our ability to address them.
					Therefore, we must take the initiative to break this silence as we
					approach the zeroth hour.
				</Details>
			</DetailsOnly>

			{/* QUOTE */}
			<DetailsOnly
				className="py-28 bg-black"
				whiteText
				bgImg="/hero-home-1.jpg"
				bgImgAlt=""
				bgOpacity="opacity-40"
			>
				<Quote>
					At New Millennium School, Bahrain, we believe in shaping future
					leaders, and the New Millennium Model United Nations (NMMUN)
					Conference is where this transformation begins.
				</Quote>
			</DetailsOnly>

			<ImageWithDetails
				reverse
				className="pb-28 pt-28"
				src="/diplomacy.png"
				alt=""
				w="w-full"
				h="h-full"
			>
				<Heading reverse className="">
					Discover Diplomacy Embrace Change
				</Heading>
				<Details reverse>
					The NMMUN Conference isn't just an event; it's an opportunity to
					explore the complexities of global diplomacy. Here, you'll step into
					the shoes of world leaders, debate critical global issues, and draft
					resolutions to make a real impact.
				</Details>
			</ImageWithDetails>

			{/* <ImageWithDetails className="pb-28">
				<Heading>What Awaits You:</Heading>

				<ul className="space-y-2 mt-6 mb-10">
					<li>
						🌐 Real-World Debates: Engage in thought-provoking discussions on
						pressing global topics, from climate change to international
						security.
					</li>
					<li>
						🖋️ Resolution Crafting: Collaborate with fellow delegates to draft
						resolutions that can change the world, just like real UN diplomats.
					</li>
					<li>
						🌍 Cultural Exchange: Interact with peers from diverse backgrounds,
						fostering cross-cultural understanding and lifelong friendships.
					</li>
					<li>
						🚀 Skill Development: Enhance your public speaking, negotiation, and
						critical thinking skills under the guidance of experienced advisors.
					</li>
					<li>
						🏆 Awards and Recognition: Stand out and earn awards for your
						exceptional diplomacy and debating skills.
					</li>
				</ul>
			</ImageWithDetails> */}

			<ImageWithDetails
				className="pb-28"
				src="/join-us.jpeg"
				alt=""
				imgOpacity={0.8}
			>
				<Heading className="mb-6">Why Join Us:</Heading>
				{/* <motion.ul
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
						<span className="font-semibold">🧠 Educational Experience:</span>{" "}
						<span className="opacity-80">
							Gain an in-depth understanding of global affairs and the art of
							international diplomacy.
						</span>
					</li>
					<li>
						<span className="font-semibold">🤝 Personal Growth:</span>{" "}
						<span className="opacity-80">
							Develop leadership, teamwork, and problem-solving skills essential
							for your future.
						</span>
					</li>
					<li>
						<span className="font-semibold">🌐 Global Network:</span>{" "}
						<span className="opacity-80">
							Connect with like-minded peers who share your passion for global
							change.
						</span>
					</li>
					<li>
						<span className="font-semibold">😄 Fun and Fulfillment:</span>{" "}
						<span className="opacity-80">
							Enjoy an intellectually stimulating, fun-filled day leaving you
							with a sense of accomplishment.
						</span>
					</li>
				</motion.ul> */}
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
			</ImageWithDetails>

			<DetailsOnly className="pb-28">
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

			<DetailsOnly className="pb-28">
				<Details>
					The NMMUN Conference is open to all students, whether you're a
					seasoned debater or just starting your journey into international
					relations.
				</Details>
				<Details>
					Join us for a day of diplomacy, debate, and discovery, and become part
					of a global community dedicated to finding solutions to the world's
					most complex problems.
				</Details>
				<SubHeading>
					Secure your spot today and make history at the New Millennium Model
					United Nations Conference!
				</SubHeading>
			</DetailsOnly>

			<Hero
				src="/hero-variant-4.jpeg"
				alt="blurred nmmun logo with a gradient bg"
				title="NMMUN"
				desc="Ready to Start Your Diplomatic Journey?"
				showCTA
				showTimer
				showYear
				variant
				className=""
				bgImgOpacity="opacity-100"
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
