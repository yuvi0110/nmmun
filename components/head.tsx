import React from "react";
import NextHead from "next/head";

const Head = ({ title, desc }: { title: string, desc: string }) => {
	return (
		<NextHead>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
			/>
			<meta http-equiv="content-language" content="en" />
			<meta charSet="UTF-8" />
			<meta name="keywords" content="website, blog, foo, bar" />
			<meta name="author" content="Clupai8o0" />
			<meta name="publisher" content="Clupai8o0" />
			<meta name="copyright" content="NMMUN" />
			<meta
				name="description"
				content="This short description describes my website."
			/>
			<meta name="page-topic" content="MUN" />
			<meta name="page-type" content="Landing Page" />
			<meta name="audience" content="Everyone" />
			<meta name="robots" content="index, follow" />
			<title>{title}</title>
		</NextHead>
	);
};

export default Head;
