"use client";

import Navbar from "../components/ui/navigation";
import Searchbar from "../components/ui/searchbar/page";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Searchbar
				onSearch={function (query: string): void {
					throw new Error("Function not implemented.");
				}}
			/>
			{/* <CarouselDemo /> */}
		</main>
	);
}
