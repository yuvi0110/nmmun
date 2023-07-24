import ContentLink from "@/components/content-link";
import Hero from "@/components/hero";
import Profile from "@/components/profile";
import ProfilesContainer from "@/layouts/profiles-container";
import TableOfContent from "@/layouts/table-of-content";
import Head from "next/head";
import React from "react";

function Team() {
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
				title="OUR TEAM"
				src="/dummy.png"
				alt="some dummy pic"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quaerat molestias."
			/>

			{/* TABLE OF CONTENT */}
			<TableOfContent>
				{[1, 2, 3, 4, 5, 6, 7, 8].map((content, i) => (
					<ContentLink
						src="/dummy.png"
						alt="some dummy image"
						title="Title"
						url="#Title"
						delay={3 + i * 0.2}
					/>
				))}
			</TableOfContent>

			{/* CONTENT */}
			<ProfilesContainer title="Organizers">
				{[1, 2, 3, 4].map((profile, i) => (
					<Profile />
				))}
			</ProfilesContainer>
			<ProfilesContainer title="Organizers">
				{[1, 2, 3, 4].map((profile, i) => (
					<Profile />
				))}
			</ProfilesContainer>
			<ProfilesContainer title="Organizers">
				{[1, 2, 3, 4].map((profile, i) => (
					<Profile />
				))}
			</ProfilesContainer>

			{/* MARGIN BETWEEN */}
			<div className="my-12" />
		</main>
	);
}

export default Team;
