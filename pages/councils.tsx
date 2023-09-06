import { v4 as generateKey } from "uuid";

import { ImageWithDetails, TableOfContent } from "@/layouts";
import { ContentLink, Details, Head, Heading, Hero } from "@/components";
import { councils } from "@/config/links";

function Councils() {
	return (
		<main className="main">
			<Head title="NMMUN: Councils" desc="The various councils of nmmun" />

			{/* HERO */}
			<Hero
				title="COUNCILS"
				src="/hero-council-5.jpg"
				alt="some dummy pic"
				desc="Once the councils are finalized the details will be updated. Please be patient."
				showTimer
				showCTA
				mobileMini
			/>

			{/* TABLE OF CONTENT */}
			{/* <TableOfContent>
				{councils.map((council, i) => (
					<ContentLink
						src={council.src}
						alt={council.alt}
						title={council.name}
						url={`#${council.id}`}
						delay={2.6 + i * 0.1}
						key={generateKey()}
					/>
				))}
			</TableOfContent> */}

			{/* CONTENT */}
			{/* {councils.map((council, i) => (
				<ImageWithDetails
					className={`py-12`}
					src={council.src}
					alt={council.alt}
					reverse={i % 2 === 0 ? true : false}
					w="w-2/3"
					h="h-2/3"
					id={council.id}
				>
					<Heading>{council.name}</Heading>
					<Details>{council.desc}</Details>
				</ImageWithDetails>
			))} */}

			{/* MARGIN BETWEEN */}
			{/* <div className="my-4" />

			<Hero
				src="/dummy.png"
				alt="some dummy img"
				title="NMMUN"
				showCTA
				showTimer
				showYear
				variant
			/> */}
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
