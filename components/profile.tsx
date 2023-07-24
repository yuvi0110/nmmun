import React from "react";
import { motion } from "framer-motion";
import { inViewVariants } from "@/constants/animations";

const Profile = ({ delay }: { delay?: number }) => {
	return (
		<motion.div
			className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md"
			variants={inViewVariants}
			initial="hidden"
			whileInView="visible"
			transition={{
				duration: 0.4,
				delay,
			}}
		>
			<img className="rounded-t-lg" src="/dummy.png" alt="some alt" />

			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
					Someone
				</h5>

				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Their title and position
				</p>
			</div>
		</motion.div>
	);
};

export default Profile;
