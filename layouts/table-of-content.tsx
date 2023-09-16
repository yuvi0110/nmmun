import Heading from "@/components/content/heading";

function TableOfContent({ children, title }: { children: React.ReactNode, title: string }) {
	return (
		<div className="w-full p-h py-8 md:py-16 flex justify-center place-content-center">
			<div className="max-w-7xl w-full flex flex-col gap-4 md:gap-8">
				<Heading className="my-6">
					{title}
				</Heading>
				<div className="max-w-7xl w-full flex flex-col gap-2 md:grid md:grid-cols-3 lg:grid-cols-4">
					{children}
				</div>
			</div>
		</div>
	);
}

export default TableOfContent;
