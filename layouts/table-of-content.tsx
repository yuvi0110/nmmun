import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import React from "react";

function TableOfContent({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full p-h py-8 md:py-16 flex flex-col gap-4 md:gap-8">
			{/* <SubHeading classNames="md:hidden" delay={2.8}>
				Table Of Content
			<
				/SubHeading> */}
			<Heading classNames="my-6" delay={2.8}>
				Table Of Content
			</Heading>
			<div className="max-w-7xl w-full flex flex-col gap-2 md:grid md:grid-cols-3 lg:grid-cols-4">
				{children}
			</div>
		</div>
	);
}

export default TableOfContent;
