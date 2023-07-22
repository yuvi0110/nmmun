import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			{/* LOGO */}
			<div></div>

			{/* LINKS - Desktop */}
			<div className="hidden md:flex">
				<ul>
					<li>
						<Link href="/councils">Councils</Link>
					</li>
					<li>
						<Link href="/gallery">Gallery</Link>
					</li>
					<li>
						<Link href="/info">Info</Link>
					</li>
					<li>
						<Link href="/team">Team</Link>
					</li>
					<li>
						<Link href="/apply">apply</Link>
					</li>
				</ul>
			</div>

			{/* LINKS - Mobile */}
			<div className="md:hidden"></div>
		</nav>
	);
};

export default Navbar;
