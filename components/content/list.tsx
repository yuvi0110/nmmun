import { inViewVariants } from "@/config/animations";
import { motion } from "framer-motion";

interface Props {
	content: string[] | React.ReactNode[];
	className?: string;
	reverse?: boolean;
	opacity?: number;
	noBullet?: boolean
}

const List = ({ content, className, reverse, opacity, noBullet }: Props) => {
	return (
		<motion.ul
			className={`text-lg leading-tight mt-4 font-medium ${className} ${
				!noBullet && "list-disc list-inside"
			} pl-2 space-y-2`}
			variants={inViewVariants}
			initial={reverse ? "fromLeft" : "fromRight"}
			whileInView={inViewVariants.visible(opacity || 1)}
			transition={{
				duration: 0.4,
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			{content.map((desc) => (
				<li>{desc}</li>
			))}
		</motion.ul>
	);
};

export default List;
