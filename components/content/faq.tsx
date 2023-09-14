import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/config/animations";
import {
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from "react-accessible-accordion";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = ({
	title,
	info,
	delay,
}: {
	title: string;
	info: string;
	delay?: number;
}) => {
	return (
		<motion.div
			variants={inViewVariants}
			initial="fromRight"
			whileInView="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			{/* <AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton className="flex justify-between border-b border-gray-400 p-4 font-semibold text-lg items-center mb-4">
						{title} <IoIosArrowDown />
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="opacity-80 mb-4">
					{info}
				</AccordionItemPanel> */}
			{/* </AccordionItem> */}
			<div className="space-y-4 mb-4">
				<details className="group [&_summary::-webkit-details-marker]:hidden">
					<summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-black border-b-2 border-[#a6baad]">
						<h2 className="font-semibold text-lg">{title}</h2>

						<svg
							className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>

					<p className="mt-4 px-4 leading-relaxed text-black opacity-80 text-lg">
						{info}
					</p>
				</details>
			</div>
		</motion.div>
	);
};

export default FAQ;
