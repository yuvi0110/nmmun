import Hero from "@/components/content/hero";

import { motion } from "framer-motion";

function Contact() {
	return (
		<main className="main">
			<Head
				title="NMMUN: Contact Us"
				desc="Reach out and connect with us through our Model United Nations contact page. Whether you have questions, want to collaborate, or seek information, we're here to assist. Get in touch and let's engage in meaningful dialogue."
				img="/join-us.jpeg"
			/>

			{/* HERO */}
			{/* <Hero
				src="/hero-contact-1.jpg"
				alt="some dummy img"
				title="CONTACT US"
				showContactCTA
				showTimer
			/> */}

			<DetailsOnly className="mt-28 pb-28 pt-16">
				<Heading>Contact Us</Heading>
				<Details>
					Have any questions you want to ask? Send us a message and let us know
				</Details>
				<div className="flex flex-col-reverse md:flex-row mt-8 gap-x-6">
					<div className="w-full md:w-1/2">
						<SubHeading className="mb-4">Send Us a Message</SubHeading>

						<ul className="text-lg">
							<li>
								<a
									href="https://www.instagram.com/nmmun_23/"
									className="hover:text-primary hover:underline transition duration-300 ease-in-out flex gap-2 items-center mt-2"
									target="_blank"
									aria-label="Open thurman events instagram"
								>
									<AiFillInstagram className="w-6 h-6" />
									@nmmun_23
								</a>
							</li>
						</ul>

						<SubHeading className="mb-4">Our Emails</SubHeading>
						<ul className="text-lg">
							<li className="gap-2 flex items-center mt-2">
								<AiFillMail className="w-6 h-6" /> nmmun2023cs@gmail.com
							</li>
							<li className="gap-2 flex items-center mt-2">
								<FaMagnifyingGlass className="w-6 h-6" />
								nmmun2023rnd@gmail.com
							</li>
							<li className="gap-2 flex items-center mt-2">
								<AiFillCalendar className="w-6 h-6" />
								nmmun2023logistics@gmail.com
							</li>
							<li className="gap-2 flex items-center mt-2">
								<MdSecurity className="w-6 h-6" />
								nmmun2023secandrun@gmail.com
							</li>
							<li className="gap-2 flex items-center mt-2">
								<MdAttachMoney className="w-6 h-6" />
								nmmun2023finance@gmail.com
							</li>
						</ul>
					</div>

					<div className="w-full md:w-1/2">
						<div className="w-full">
							<SubHeading className="mb-4">Address: </SubHeading>
							<Details className="w-full md:w-2/3">
								New Millennium School, Building 399, Road 3009, Block 330,
								Bu-Ghazal, Zinj, Bahrain
							</Details>

							<Map />
						</div>
					</div>
				</div>
			</DetailsOnly>
		</main>
	);
}

export default Contact;

import { GetStaticProps } from "next";
import { DetailsOnly } from "@/layouts";
import { CTA, Details, Head, Heading, Map, SubHeading } from "@/components";
import { useRouter } from "next/router";
import { useState } from "react";
import { inViewVariants } from "@/config/animations";
import {
	AiFillCalendar,
	AiFillInstagram,
	AiFillMail,
	AiFillPhone,
} from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { toast } from "react-toastify";
import { MdAttachMoney, MdSecurity } from "react-icons/md";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
