import React from "react";
import NextHead from "next/head";

const Head = ({
	title,
	desc,
	img,
}: {
	title: string;
	desc: string;
	img?: string;
}) => {
	return (
		<NextHead>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
			/>
			<meta http-equiv="content-language" content="en" />
			<meta charSet="UTF-8" />
			<meta
				name="keywords"
				content="website, MUN, details, New Millennium School, Bahrain, Outstanding, professional"
			/>
			<meta name="author" content="NMMUN" />
			<meta name="publisher" content="NMMUN" />
			<meta name="copyright" content="NMMUN" />
			<meta name="description" content={desc} />
			<meta name="page-topic" content="MUN" />
			<meta name="audience" content="Everyone" />
			<meta name="robots" content="index, follow" />

			<link rel="shortcut icon" href="/images/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/images/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/images/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/images/favicon-16x16.png"
			/>
			<title>{title}</title>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://nmmun.org" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={desc} />
			<meta property="og:image" content={img} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://nmmun.org" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={desc} />
			<meta property="twitter:image" content={img} />
		</NextHead>
	);
};

export default Head;
