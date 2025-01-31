import React from "react";
import { v4 as generateKey } from "uuid";

import { ContentLink, Head, Hero, Profile } from "@/components";
import { ProfilesContainer, TableOfContent } from "@/layouts";

function Team() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Team"
				desc="Meet the dedicated individuals who drive the success of our Model United Nations team. Get to know our passionate students, advisors, and leaders who are shaping future diplomats and global change-makers."
				img="/join-us.jpeg"
			/>

			{/* HERO */}
			<Hero
				title="OUR TEAM"
				src="/hero-team-2.jpg"
				alt="some dummy pic"
				desc="Once all the members of the MUN are selected, the teams will be updated. Please be patient."
				showTimer
				showCTA
				mobileMini
			/>

			{/* TABLE OF CONTENT */}
			{/* <TableOfContent>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((content, i) => (
					<ContentLink
						src="/dummy.png"
						alt="some dummy image"
						title="Title"
						url="#Title"
						delay={3 + i * 0.2}
						key={generateKey()}
					/>
				))}
			</TableOfContent> */}

			{/* CONTENT */}
			{/* <ProfilesContainer title="Organizers">
				{[1, 2, 3, 4].map((profile, i) => (
					<Profile
						key={generateKey()}
						src="/dummy.png"
						alt="some dummy"
						name="Someone"
						position="Some Position"
					/>
				))}
			</ProfilesContainer>
			<ProfilesContainer title="IT">
				{[1, 2, 3, 4].map((profile, i) => (
					<Profile
						key={generateKey()}
						src="/dummy.png"
						alt="some dummy"
						name="Someone"
						position="Some Position"
						rounded
					/>
				))}
			</ProfilesContainer> */}

			{/* MARGIN BETWEEN */}
			{/* <div className="my-12" />

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

export default Team;

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
