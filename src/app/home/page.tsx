import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function Home() {
	return (
		<ProtectedRoute>
			<>Home Page</>
		</ProtectedRoute>
	);
}
