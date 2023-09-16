import { v4 as generateKey } from "uuid";

import { ImageWithDetails, ImageWithDetails3, TableOfContent } from "@/layouts";
import { ContentLink, Details, Head, Heading, Hero } from "@/components";
import { councils } from "@/config/links";

function Councils() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Councils"
				desc="Explore the diverse world of diplomacy through our Model United Nations councils. Discover a range of unique councils, each with its own purpose and challenges. Get insights into these dynamic forums for global discourse, complete with descriptions and visuals."
				img="/join-us.jpeg"
			/>

			{/* HERO */}
			<Hero
				title="COUNCILS"
				src="/hero-council-5.jpg"
				alt="some dummy pic"
				desc="Unveiling Our Councils: Where Global Issues Find Resolution."
				showTimer
				showCTA
			/>

			{/* TABLE OF CONTENT */}
			<TableOfContent title="Councils">
				{councils.map((council, i) => (
					<ContentLink
						src={council.src}
						alt={council.alt}
						title={council.name}
						url={`#${council.id}`}
						key={generateKey()}
					/>
				))}
			</TableOfContent>

			{/* CONTENT */}
			{councils.map((council, i) => (
				<ImageWithDetails3
					className={`py-16`}
					src={council.src}
					alt={council.alt}
					w="w-full"
					reverse={i % 2 === 0 ? true : false}
					id={council.id}
					noBlackBg
				>
					<Heading className="mb-6">{council.name}</Heading>
					<Details opacity={0.8}>
						{typeof council.desc === "string"
							? council.desc
							: council.desc.map((d) => (
									<>
										{d}
										<br />
										<br />
									</>
							  ))}
					</Details>
				</ImageWithDetails3>
			))}

			{/* MARGIN BETWEEN */}
			<div className="my-4" />

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

export default Councils;

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
