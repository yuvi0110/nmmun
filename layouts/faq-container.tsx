import React from "react";
import { Accordion } from "react-accessible-accordion";

function FAQsContainer({ children }: { children: React.ReactNode }) {
	return (
		<Accordion allowZeroExpanded className="flex flex-col mt-6 gap-y-2">
			{children}
		</Accordion>
	);
}

export default FAQsContainer;
