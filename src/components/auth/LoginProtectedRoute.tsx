"use client";
import { ReactElement, useEffect } from "react";

import { useRouter } from "next/navigation";

export default function LoginProtectedRoute({
	children,
}: {
	children: ReactElement;
}) {
	useEffect(() => {
		const token = window.localStorage.getItem("token");
		if (token) {
			router.back();
		}
	});
	const router = useRouter();

	return children;
}
