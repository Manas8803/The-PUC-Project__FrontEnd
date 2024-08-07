import Transition from "@/components/framer/Transition";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	manifest: "/manifest.json",
	title: "The PUC Project",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<main>
					<Transition>{children}</Transition>
				</main>
				<Toaster />
			</body>
		</html>
	);
}
