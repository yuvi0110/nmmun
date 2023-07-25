import React from "react";
import Heading from "./heading";

// todo: make these pics animated and dynamic
const Masonry = ({ title }: { title: string }) => {
	return (
		<div className="w-full flex justify-center p-h mt-12">
			<div className="max-w-7xl w-full">
				<Heading className="mb-8">{title}</Heading>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<div className="grid gap-4">
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid gap-4">
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
								alt=""
							/>
						</div>
						<div>
							<img
								className="h-auto max-w-full rounded-lg"
								src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center py-8">
					<a href="#" target="_blank">
						<button className="bg-blue-500 text-white px-12 py-4 rounded-lg">
							View All
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Masonry;
