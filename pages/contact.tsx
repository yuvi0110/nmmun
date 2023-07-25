import Hero from '@/components/hero';
import Head from 'next/head';
import React from 'react'

function Contact() {
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
				title="CONTACT US"
				showContactCTA
				showTimer
			/>
		</main>
	);
}

export default Contact