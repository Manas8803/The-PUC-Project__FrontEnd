"use client";
import { useRouter } from "next/navigation";
import { useState, Dispatch, SetStateAction, useEffect } from "react";

interface AuthHookReturn {
	isAuthenticated: boolean;
	setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
	logout: () => void;
}

const useAuth = (): AuthHookReturn => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (!token) {
			setIsAuthenticated(false);
		}
	}, []);

	const logout = () => {
		localStorage.removeItem("token");
		setIsAuthenticated(false);
	};

	return { isAuthenticated, setIsAuthenticated, logout };
};

export default useAuth;
