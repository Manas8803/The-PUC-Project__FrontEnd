"use client";
import { ReactElement, useEffect } from "react";

import { useRouter } from "next/navigation";

export default function ProtectedRoute({
	children,
}: {
	children: ReactElement;
}) {
	useEffect(() => {
		const token = window.localStorage.getItem("token");
		if (!token) {
			router.push("/auth/login");
		}
	});
	const router = useRouter();

	return children;
}