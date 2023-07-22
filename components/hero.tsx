import React from 'react'

const Hero = () => {
  return (
		<section className="bg-blue-700 text-white rounded-2xl flex flex-col justify-center items-center py-12 md:py-20 mt-6">
			{/* TITLE */}
			<h1 className="title">NMMUN</h1>

			{/* YEAR */}
			<span className="text-lg font-medium opacity-80">2023-24</span>

			{/* COUNTDOWN + DATE */}
			<div className="grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max my-4 md:my-6">
				<div className="flex flex-col p-2 bg-blue-900 rounded-xl">
					<span className="countdown font-mono text-4xl md:text-5xl font-medium">
						<span>10</span>
					</span>
					<span className="text-sm uppercase opacity-80 font-medium">days</span>
				</div>
				<div className="flex flex-col p-2 bg-blue-900 rounded-xl">
					<span className="countdown font-mono text-4xl md:text-5xl font-medium">
						<span>10</span>
					</span>
					<span className="text-sm uppercase opacity-80 font-medium">hours</span>
				</div>
				<div className="flex flex-col p-2 bg-blue-900 rounded-xl">
					<span className="countdown font-mono text-4xl md:text-5xl font-medium">
						<span>10</span>
					</span>
					<span className="text-sm uppercase opacity-80 font-medium">min</span>
				</div>
				<div className="flex flex-col p-2 bg-blue-900 rounded-xl">
					<span className="countdown font-mono text-4xl md:text-5xl font-medium">
						<span>10</span>
					</span>
					<span className="text-sm uppercase opacity-80 font-medium">sec</span>
				</div>
			</div>

			{/* CTA */}
			<div className='flex gap-2 md:gap-4 mt-4 md:mt-6'>
				<button className="font-semibold bg-white px-6 py-2 text-black rounded-md">Contact Us</button>
				<button className="font-semibold bg-white px-6 py-2 text-black rounded-md">Apply</button>
			</div>
		</section>
	);
}

export default Hero