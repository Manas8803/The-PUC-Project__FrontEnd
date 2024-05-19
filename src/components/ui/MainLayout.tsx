import { ReactElement } from "react";
import MenuBar from "./menu_bar";

export default function MainLayout({ children }: { children: ReactElement }) {
	return (
		<>
			<main className="flex flex-col bg-bgrnd relative pb-10 mb-[12svh]">
				{children}
				<MenuBar />
			</main>
		</>
	);
}
