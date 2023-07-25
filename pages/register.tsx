import React from "react";

import { CTA, Details, Head, Heading, Hero, SubHeading } from "@/components";
import { DetailsOnly } from "@/layouts";

function Application() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Register"
				desc="The delegate and members registration"
			/>

			{/* HERO */}
			<Hero
				src="/dummy.png"
				alt="some dummy img"
				title="REGISTER"
				showTimer
				showYear
			/>

			{/* APPLICATIONS */}
			<DetailsOnly className="bg-red-600" whiteText>
				<Heading className="mb-8">Delegate Applications</Heading>
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
				<CTA title="Apply For Delegate" href="#" className="mt-12" />
			</DetailsOnly>

			<DetailsOnly className="bg-emerald-600" whiteText>
				<Heading className="mb-8">Delegate Applications</Heading>
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
				<CTA title="Apply For Delegate" href="#" className="mt-12" />
			</DetailsOnly>
		</main>
	);
}

export default Application;
