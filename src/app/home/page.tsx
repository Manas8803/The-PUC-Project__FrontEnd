import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Reports from "./components/report-section";
import MenuBar from "@/components/ui/menubar";

export default function Home() {
	return (
		<ProtectedRoute>
			{/* //! Remove padding bottom */}
			<main className="flex flex-col bg-bgrnd relative pb-10 mb-[12svh]">
				Home Page
				{/* SearchBar */}
				<Reports />
				<MenuBar />
			</main>
		</ProtectedRoute>
	);
}
