import Hero from "@/components/hero";
import Masonry from "@/components/masonry";
import Head from "next/head";
import React from "react";

// todo: a coming soon layout
function Gallery() {
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
				title="GALLERY"
				src="/dummy.png"
				alt="some dummy pic"
				desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quaerat molestias."
			/>

			{/* CONTENT */}

			<ol className="relative border-l border-gray-200">
				<li className="mb-10 ml-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400">
						March 2022
					</time>
					<Masonry title="NMMUN 2022-23" />
				</li>
				<li className="mb-10 ml-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400">
						March 2022
					</time>
					<Masonry title="NMMUN 2022-23" />
				</li>
				<li className="ml-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400">
						April 2022
					</time>
					<Masonry title="NMMUN 2022-23" />
				</li>
			</ol>

			{/* MARGIN BETWEEN */}
			<div className="my-12" />
		</main>
	);
}

export default Gallery;
