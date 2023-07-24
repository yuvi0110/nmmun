import Hero from '@/components/hero';
import Head from 'next/head';
import React from 'react'

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

      {/* DELETE APPLICATION */}
      
		</main>
	);
}

export default Application