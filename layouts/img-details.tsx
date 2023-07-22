import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/constants/animations";

function ImageWithDetails({
	children,
	reverse,
}: {
	children: React.ReactNode;
	reverse?: boolean;
}) {
	return (
		<section
			className={`flex flex-col ${
				reverse ? "md:flex-row-reverse" : "md:flex-row"
			} md:items-center gap-8 my-20 md:my-28`}
		>
			<div className="md:w-1/2">
				<motion.img
					src="/dummy.png"
					alt="some alt text"
					className="rounded-2xl"
					variants={inViewVariants}
					initial={`hidden${!reverse ? "R" : ""}`}
					whileInView="visible"
					transition={{
						duration: 0.4,
					}}
					viewport={{ once: true, amount: 0.25 }}
				/>
			</div>
			<div className="md:w-1/2">{children}</div>
		</section>
	);
}

export default ImageWithDetails;
