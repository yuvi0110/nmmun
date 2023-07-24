import Heading from "@/components/heading";
import React from "react";

function ProfilesContainer({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) {
	return (
		<div className="w-full flex justify-center p-h py-12">
			<div className="max-w-7xl w-full">
				<Heading classNames="mb-10">{title}</Heading>
				<div className="flex flex-col gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6">{children}</div>
			</div>
		</div>
	);
}

export default ProfilesContainer;
