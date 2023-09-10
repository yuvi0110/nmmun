import React from "react";
import Image from "next/image";
import ReactMasonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import { v4 as generateKey } from "uuid";

import { CTA, Heading } from "..";
import { inViewVariants } from "@/config/animations";

const Masonry = ({
	title,
	dir,
	href,
}: {
	title: string;
	dir: string;
	href: string;
}) => {
	return (
		<div className="w-full mt-6">
			<Heading className="mb-8" delay={1.6} reverse>
				{title}
			</Heading>

			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 500: 2 }}
				className="md:hidden"
			>
				<ReactMasonry gutter="8px">
					{[
						1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
						20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
					].map((n) => (
						<motion.img
							className="relative h-auto w-full rounded-lg object-cover"
							src={`/gallery/${dir}/(${n}).jpeg`}
							alt="gallery pic"
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
							key={generateKey()}
						/>
					))}
				</ReactMasonry>
			</ResponsiveMasonry>

			<div className="hidden md:flex gap-x-2">
				<div className="flex flex-col gap-y-2 w-1/3">
					{[1, 2, 3, 4, 5, 6, 7, 8, 24].map((i) => (
						<motion.img
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
							className="h-auto w-full rounded-lg"
							src={`/gallery/${dir}/(${i}).jpeg`}
							alt="gallery picture"
							key={generateKey()}
						/>
					))}
				</div>

				<div className="flex flex-col gap-y-2 w-1/3">
					{[9, 10, 11, 12, 13, 14, 15, 23, 26].map((i) => (
						<motion.img
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
							className="h-auto w-full rounded-lg"
							src={`/gallery/${dir}/(${i}).jpeg`}
							alt="gallery picture"
							key={generateKey()}
						/>
					))}
				</div>

				<div className="flex flex-col gap-y-2 w-1/3">
					{[17, 18, 19, 20, 21, 22, 16, 25].map((i) => (
						<motion.img
							variants={inViewVariants}
							initial="fromDown"
							whileInView="visible"
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
							className="h-auto w-full rounded-lg"
							src={`/gallery/${dir}/(${i}).jpeg`}
							alt="gallery picture"
							key={generateKey()}
						/>
					))}
				</div>
			</div>
			<div className="w-full flex justify-center py-8">
				<CTA title="View All" href={href} target="_blank" />
			</div>
		</div>
	);
};

export default Masonry;

{
	/* <motion.div
								className="relative h-64 max-h-64 w-full rounded-lg"
								variants={inViewVariants}
								initial="fromDown"
								whileInView="visible"
								transition={{ duration: 0.4 }}
								viewport={{ once: true }}
								key={generateKey()}
							>
								<Image
									fill
									className="h-auto max-w-full rounded-lg object-cover object-center"
									src={`/gallery/${dir}/(${n}).jpeg`}
									placeholder="blur"
									blurDataURL="https://via.placeholder.com/500x500"
									alt="gallery"
								/>
							</motion.div> */
}
