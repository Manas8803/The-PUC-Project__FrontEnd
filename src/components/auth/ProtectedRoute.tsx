"use client";
import { ReactElement } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks";

export default function ProtectedRoute({
	children,
}: {
	children: ReactElement;
}) {
	const router = useRouter();
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		router.push("/auth/login");
		return null;
	}

	return children;
}
