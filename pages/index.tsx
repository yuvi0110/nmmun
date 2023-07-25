import { Details, FAQ, Head, Heading, Hero, SubHeading } from "@/components";
import { DetailsOnly, FAQsContainer, ImageWithDetails } from "@/layouts";

export default function Home() {
	return (
		<main className="main">
			<Head title="NMMUN" desc="The introductory landing page of NMMUN" />

			{/* HERO */}
			<Hero
				src="/dummy.png"
				alt="some dummy img"
				title="NMMUN"
				showCTA
				showTimer
				showYear
			/>

			{/* CONTENT */}
			<ImageWithDetails
				whiteText
				className="py-28 bg-black"
				bgImg="/dummy.png"
				bgImgAlt="some dummy img"
				bgOpacity="opacity-40"
			>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
					temporibus nobis voluptatem id quae. Delectus enim voluptas blanditiis
					libero, nemo ipsa quasi expedita, incidunt doloremque sit quia quaerat
					quae.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</ImageWithDetails>

			<ImageWithDetails className="py-28 bg-red-500" whiteText reverse>
				<Heading reverse>Title</Heading>
				<Details reverse>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
					temporibus nobis voluptatem id quae. Delectus enim voluptas blanditiis
					libero, nemo ipsa quasi expedita, incidunt doloremque sit quia quaerat
					quae.
				</Details>
				<Details reverse>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<SubHeading reverse>Subheadding</SubHeading>
				<Details reverse>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</ImageWithDetails>

			<DetailsOnly className="bg-blue-600" whiteText>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut!
				</Details>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Praesentium fugit beatae voluptatibus cum fugiat
					maiores perspiciatis libero, repudiandae voluptate error nesciunt
					similiquereversevitae voluptas unde ipsa labore culpa harum?
					Inventore!
				</Details>
				<SubHeading>Subheadding</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<SubHeading>Subheadding</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</DetailsOnly>

			<DetailsOnly
				bgImg="/dummy.png"
				whiteText
				bgOpacity="opacity-50"
				className="bg-black"
			>
				<Heading>Title</Heading>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut!
				</Details>
				<Details>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis ex
					pariatur rerum necessitatibus beatae fuga commodi debitis
					exercitationem vitae, doloremque, omnis suscipit nostrum ipsa harum
					dicta quisquam facere aut! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Praesentium fugit beatae voluptatibus cum fugiat
					maiores perspiciatis libero, repudiandae voluptate error nesciunt
					similiquereversevitae voluptas unde ipsa labore culpa harum?
					Inventore!
				</Details>
				<SubHeading>Subheadding</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
				<SubHeading>Subheadding</SubHeading>
				<Details>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum.
				</Details>
			</DetailsOnly>

			<DetailsOnly>
				<Heading>FAQs</Heading>

				<FAQsContainer>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
					<FAQ
						title="Title"
						info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nobis
					quae amet, eos voluptatum nihil, repellat exercitationem quod veniam
					vitae sed, quo repellendus maiores doloremque perspiciatis adipisci
					reprehenderit ullam? Illum."
					/>
				</FAQsContainer>
			</DetailsOnly>

			<Hero
				src="/dummy.png"
				alt="some dummy img"
				title="NMMUN"
				showCTA
				showTimer
				showYear
				variant
				className=""
			/>
		</main>
	);
}
