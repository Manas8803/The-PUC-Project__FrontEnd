"use client";
import { ReactElement, useEffect } from "react";

import { useRouter } from "next/navigation";

export default function LoginProtectedRoute({
	children,
}: {
	children: ReactElement;
}) {
	const router = useRouter();
	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			router.back();
			return;
		}
	}, [router]);

	return children;
}
