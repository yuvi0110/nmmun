import Hero from "@/components/content/hero";

import { motion } from "framer-motion";

function Contact() {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const id = toast.loading("Sending message...", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ name, email, subject, message }),
		});
		toast.update(id, {
			render: "Message sent 🎉 We'll get back to you as soon as we can!!",
			isLoading: false,
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			type: "success",
		});

		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
	};

	return (
		<main className="main">
			<Head
				title="NMMUN: Contact Us"
				desc="Reach out and connect with us through our Model United Nations contact page. Whether you have questions, want to collaborate, or seek information, we're here to assist. Get in touch and let's engage in meaningful dialogue."
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
						<SubHeading className="mt-6 mb-4 md:mt-0">
							Send Us A Message
						</SubHeading>
						<form className="space-y-8 w-full" onSubmit={handleSubmit}>
							<motion.div
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView="visible"
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<label
									htmlFor="name"
									className="block mb-2 text-xl text-gray-800"
								>
									Your Name
								</label>
								<input
									type="text"
									id="name"
									className="shadow-sm text-base focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-[#e3e4e4] border-gray-500 border-b placeholder-gray-500 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
									placeholder="e.g. John Doe"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</motion.div>

							<motion.div
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView="visible"
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<label
									htmlFor="email"
									className="block mb-2 text-xl text-gray-800"
								>
									Your email
								</label>
								<input
									type="email"
									id="email"
									className="shadow-sm text-base focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-[#e3e4e4] border-gray-500 border-b placeholder-gray-500 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
									placeholder="e.g. example@website.com"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</motion.div>

							<motion.div
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView="visible"
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<label
									htmlFor="email"
									className="block mb-2 text-xl text-gray-800"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									className="shadow-sm text-base focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-[#e3e4e4] border-gray-500 border-b placeholder-gray-500 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
									placeholder="Let us know how we can help you"
									required
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
								/>
							</motion.div>

							<motion.div
								className="sm:col-span-2"
								variants={inViewVariants}
								initial={"fromLeft"}
								whileInView="visible"
								transition={{
									duration: 0.4,
								}}
								viewport={{ once: true, amount: 0.25 }}
							>
								<label
									htmlFor="message"
									className="block mb-2 text-xl text-gray-800"
								>
									Your message
								</label>
								<textarea
									id="message"
									rows={4}
									className="shadow-sm text-base focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-[#e3e4e4] border-gray-500 border-b placeholder-gray-500 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
									placeholder="Leave a message..."
									required
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
							</motion.div>

							<CTA
								type="submit"
								title="Send Message"
								className="md:!justify-start"
							/>
						</form>
					</div>

					<div className="w-full md:w-1/2">
						<div className="w-full">
							<SubHeading className="mb-4">Address: </SubHeading>
							<Details className="w-full md:w-2/3">
								Building 339, Road 3009, Block 330, Zinj, Bahrain
							</Details>

							<Map />
						</div>
						<div className="w-full">
							<SubHeading className="mb-4">
								Socials & Contact Information
							</SubHeading>
							<div>
								<ul className="text-lg">
									{/* <li className="gap-2 flex items-center mt-2">
										<AiFillPhone className="w-6 h-6" />
										+973 3349 9054
									</li>
									<li className="gap-2 flex items-center mt-2">
										<AiFillPhone className="w-6 h-6" />
										+973 3313 1730
									</li> */}
									<li className="gap-2 flex items-center mt-2">
										<AiFillMail className="w-6 h-6" />
										nmmun2023cs@gmail.com
									</li>
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
							</div>
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
import { AiFillInstagram, AiFillMail, AiFillPhone } from "react-icons/ai";
import { toast } from "react-toastify";

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {},
	};
};
