import { inViewVariants } from "@/config/animations";
import { inView, motion } from "framer-motion";

function DetailsOnly({
	children,
	whiteText,
	className,
	bgImg,
	bgImgAlt,
	bgOpacity,
	bgBlur,
	bgImgTransition,
	childClass
}: {
	children: React.ReactNode;
	whiteText?: boolean;
	className?: string;
	bgImg?: string;
	bgImgAlt?: string;
	bgOpacity?: number;
	bgBlur?: boolean;
	bgImgTransition?: boolean;
	childClass?: string;
}) {
	return (
		<>
			<div
				className={`${
					whiteText ? "text-white" : "text-black"
				} ${className} relative p-h w-full flex justify-center ${
					bgImg && "bg-black"
				} overflow-hidden`}
			>
				{bgImg? (
					<>
						<div
							className="absolute w-full h-full top-0 left-0 backdrop-blur-sm z-10"
							hidden={!bgBlur}
						></div>
						<motion.img
							src={bgImg}
							alt={bgImgAlt}
							className={`w-full h-full top-0 left-0 absolute object-cover`}
							style={{ opacity: bgOpacity }}
							variants={inViewVariants}
							initial={bgImgTransition ? "fromNothing" : ""}
							whileInView={
								bgImgTransition ? inViewVariants.visible(bgOpacity || 1) : ""
							}
							transition={{
								duration: 0.4,
							}}
							viewport={{ once: true, amount: 0.25 }}
						/>
					</>
				) : (
					""
				)}

				<div className={`flex flex-col relative z-50 max-w-7xl w-full ${childClass}`}>
					{children}
				</div>
			</div>
		</>
	);
}

export default DetailsOnly;
