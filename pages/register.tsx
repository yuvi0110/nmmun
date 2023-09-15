import React from "react";

import { CTA, Details, Head, Heading, Hero, List, SubHeading } from "@/components";
import { DetailsOnly } from "@/layouts";

function Application() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Register"
				desc="Join our Model United Nations (MUN) conference as a chair, delegate, runner, or security personnel. Apply now through our easy-to-use Google Forms registration page. Secure your role in shaping global dialogues and fostering diplomacy."
			/>

			{/* HERO */}
			<Hero
				src="/gallery/21-22/(29).jpeg"
				alt="some dummy img"
				desc="Ready to embark on a diplomatic journey? Begin your MUN adventure by registering today"
				title="REGISTER"
				showTimer
				showYear
				bgImgOpacity={0.6}
			/>

			{/* APPLICATIONS */}
			<DetailsOnly className="py-24 bg-color-6">
				<Heading className="mb-4">Chair Applications</Heading>
				<Details opacity={0.8}>
					Passionate about diplomacy, leadership, and international relations?
					Join us as a Chair at our Model United Nations conferences, where
					you'll guide critical discussions and foster global collaboration.
					Your role as Chair is pivotal, shaping debates, facilitating
					negotiations, and guiding proceedings. Your expertise and diplomatic
					skills will ensure productive dialogues and consensus-building.
				</Details>
				<Details opacity={0.8}>
					Being a Chair isn't just leadership; it's personal and professional
					growth. Gain valuable experience in public speaking, conflict
					resolution, and international affairs. Connect with a community of
					like-minded individuals dedicated to global issues and diplomacy.
				</Details>
				<Details opacity={0.8}>
					Ready to make a difference? Access our Chair Application Form below.
					Leave your mark on the international stage and contribute to fostering
					global understanding and positive change.
				</Details>
				<SubHeading>Instructions</SubHeading>
				<List
					content={[
						"The application is only open to students of Grades X-XII",
						"Interviews will be held in person at New Millennium School",
						"Applicants are requested to check their emails regularly for further updates",
						"Please note that the minimum requirements to apply for the position of chairperson is 1-3 prior delegate experiences",
						"NMS applicants are only required to pay in person",
					]}
					opacity={0.8}
				/>
				<Details>
					<span className="underline font-bold">Last Date for applicants</span>{" "}
					- 21st September, 2023
				</Details>
				<CTA
					title="Apply For Chair"
					href="https://forms.gle/Ay87fK7jNz3kQa1u5"
					className="mt-12"
					target="_blank"
				/>
			</DetailsOnly>

			<DetailsOnly className="py-24 bg-color-3" whiteText>
				<Heading className="mb-4">Delegate Applications</Heading>
				<Details opacity={0.8}>
					Step into the shoes of a diplomat and make your voice heard on the
					world stage. Our delegate application section is your gateway to the
					thrilling world of international relations. Here, you'll have the
					opportunity to represent a nation, engage in thought-provoking
					debates, and work towards finding solutions to pressing global issues.
				</Details>
				<Details opacity={0.8}>
					Whether you're a seasoned delegate with years of MUN experience or
					someone who's new to this exciting world, our application process is
					designed to welcome all levels of expertise. We believe in the power
					of diversity and inclusivity in shaping global conversations.
				</Details>
				<Details opacity={0.8}>
					Join us in promoting diplomacy, understanding, and positive change.
					Apply today and become part of an inspiring community of future
					leaders. Together, we'll contribute to a more informed, compassionate,
					and interconnected world.
				</Details>
				<SubHeading>Instructions</SubHeading>
				<List
					content={[
						"The application is only open to students of Grades VII-XII.",
						"Applicants are requested to check their emails regularly for updates.",
						"Payment will be accepted through bank transfer; details are provided below for Non-NMS applicants.",
						"Registration will only be confirmed once payment is received.",
						"In the last question where proof of payment is asked, please add the transaction receipt.",
						"NMS applicants are required to pay in person.",
						"Allocations will be out by 1st November, 2023.",
					]}
					opacity={0.8}
				/>
				<Details>
					<span className="underline font-bold">Last Date for applicants</span>{" "}
					- 20th October, 2023
				</Details>
				<CTA
					title="Apply For Delegate"
					href="https://forms.gle/U89v8mHjhTgddzc87"
					className="mt-12"
					target="_blank"
				/>
			</DetailsOnly>

			<DetailsOnly className="py-24 bg-color-4" whiteText>
				<Heading className="mb-4">Runner Applications</Heading>
				<Details opacity={0.8}>
					Be a vital part of the Model United Nations (MUN) experience as a
					Runner. Your role ensures the seamless flow of information between
					committees, assists with document distribution, and provides essential
					support to delegates and chairs, making you indispensable to the
					success of our conference.
				</Details>
				<Details opacity={0.8}>
					As a Runner, you'll engage in a dynamic, fast-paced role, responsible
					for delivering messages and documents between committees, assisting
					with technical issues, and supporting delegates' access to essential
					resources. Your adaptability and organization under pressure are
					critical assets that contribute directly to our conference's overall
					success.
				</Details>
				<Details opacity={0.8}>
					Join our passionate MUN community as a Runner, gaining valuable
					hands-on experience in event logistics and coordination. Your role as
					a Runner is integral to the smooth functioning of our conference, and
					your contributions are deeply appreciated. If you're ready to be a
					vital part of the MUN experience, apply for the Runner position and
					embark on a rewarding journey into the world of diplomacy.
				</Details>
				{/* <SubHeading>Instructions</SubHeading>
				<List
					content={[
						"The application is only open to students of Grades X-XII",
						"Interviews will be held in person at New Millennium School",
						"Applicants are requested to check their emails regularly for further updates",
						"Please note that the minimum requirements to apply for the position of chairperson is 1-3 prior delegate experiences",
						"NMS applicants are only required to pay in person",
					]}
					opacity={0.8}
				/> */}
				<CTA
					title="Apply For Runner"
					// href="https://docs.google.com/forms/d/e/1FAIpQLSdDr0c2tHOTvJ-AeEpxf1AG0gimk-9ff9hMPTFaeUkxzRdJJQ/viewform"
					className="mt-12"
					target="_blank"
					disabled
				/>
			</DetailsOnly>

			<DetailsOnly className="py-24">
				<Heading className="mb-4">Security Applications</Heading>
				<Details opacity={0.8}>
					At our MUN conference, security is paramount. As a Security team
					member, you'll ensure a safe environment for all. Your
					responsibilities include access control, monitoring conference areas,
					and addressing security issues promptly.
				</Details>
				<Details opacity={0.8}>
					The Security team requires attention to detail, communication skills,
					and a proactive approach. You'll collaborate with organizers,
					authorities, and venue staff to implement security protocols. Your
					presence reassures participants, allowing them to focus on diplomacy.
				</Details>
				<Details opacity={0.8}>
					Join our Security team to gain event security experience and
					contribute to a secure conference. Your dedication and responsibility
					are vital in ensuring a safe and welcoming environment for all. Apply
					for the Security position and be a crucial part of our conference's
					success.
				</Details>
				{/* <SubHeading>Instructions</SubHeading>
				<List
					content={[
						"The application is only open to students of Grades X-XII",
						"Interviews will be held in person at New Millennium School",
						"Applicants are requested to check their emails regularly for further updates",
						"Please note that the minimum requirements to apply for the position of chairperson is 1-3 prior delegate experiences",
						"NMS applicants are only required to pay in person",
					]}
					opacity={0.8}
				/> */}
				<CTA
					title="Apply For Security"
					// href="https://docs.google.com/forms/d/e/1FAIpQLSdDr0c2tHOTvJ-AeEpxf1AG0gimk-9ff9hMPTFaeUkxzRdJJQ/viewform"
					className="mt-12"
					target="_blank"
					disabled
				/>
			</DetailsOnly>
		</main>
	);
}

export default Application;

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};
