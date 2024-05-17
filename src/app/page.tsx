"use client";

import Link from "next/link";

export default function Home() {
	return (
		<main>
			Landing Page
			<br />
			<Link href={"/auth/login"}>Login</Link>
		</main>
	);
}
