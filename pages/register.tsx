import CTA from "@/components/cta";
import Details from "@/components/details";
import Heading from "@/components/heading";
import Hero from "@/components/hero";
import SubHeading from "@/components/sub-heading";
import DetailsOnly from "@/layouts/details-only";
import Head from "next/head";
import React from "react";

function Application() {
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
				showTimer
				showYear
			/>

			{/* APPLICATIONS */}
			<DetailsOnly classNames="bg-red-600 mt-16" whiteText>
				<Heading classNames="mb-8">Delegate Applications</Heading>
				<SubHeading>SubHeading</SubHeading>
				<Details>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
					dignissimos impedit, consectetur incidunt aliquam sit, sunt commodi
					hic animi at nostrum enim recusandae harum perferendis assumenda sequi
					beatae possimus?
				</Details>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
					itaque eius libero obcaecati deleniti suscipit quasi nostrum! Qui
					blanditiis quaerat, totam fugit minima est! Cum eum quaerat a. Dolor.
				</Details>
				<SubHeading>SubHeading</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
					culpa itaque repellat doloremque ad labore voluptates, officia non
					quisquam soluta facere dignissimos, nobis harum! At iste distinctio
					dolores iure iusto!
				</Details>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae
					voluptas perspiciatis vero officia iusto reiciendis, est nulla dolore
					veritatis sapiente quisquam ab numquam. Voluptates, quam nisi.
					Voluptate, voluptatibus illum?
				</Details>
				<CTA title="Apply For Delegate" href="#" />
			</DetailsOnly>
			<DetailsOnly classNames="bg-emerald-600" whiteText>
				<Heading classNames="mb-8">Delegate Applications</Heading>
				<SubHeading>SubHeading</SubHeading>
				<Details>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
					dignissimos impedit, consectetur incidunt aliquam sit, sunt commodi
					hic animi at nostrum enim recusandae harum perferendis assumenda sequi
					beatae possimus?
				</Details>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
					itaque eius libero obcaecati deleniti suscipit quasi nostrum! Qui
					blanditiis quaerat, totam fugit minima est! Cum eum quaerat a. Dolor.
				</Details>
				<SubHeading>SubHeading</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
					culpa itaque repellat doloremque ad labore voluptates, officia non
					quisquam soluta facere dignissimos, nobis harum! At iste distinctio
					dolores iure iusto!
				</Details>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae
					voluptas perspiciatis vero officia iusto reiciendis, est nulla dolore
					veritatis sapiente quisquam ab numquam. Voluptates, quam nisi.
					Voluptate, voluptatibus illum?
				</Details>
				<CTA title="Apply For Delegate" href="#" />
			</DetailsOnly>
		</main>
	);
}

export default Application;
