import { useState } from "react";

const useAuth = () => {
	const baseUrl = process.env.NEXT_PUBLIC_AUTH_URL;
	const [isLoading, setIsLoading] = useState(false);

	const login = async (email: string, password: string) => {
		setIsLoading(true);

		if (email === "") {
			setIsLoading(false);
			throw new Error("Please enter your email address.");
		}

		if (password === "") {
			setIsLoading(false);
			throw new Error("Please enter your password.");
		}

		try {
			const response = await fetch(`${baseUrl}/api/v1/auth/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			switch (response.status) {
				case 200:
					const jsonData = await response.json();
					const token = jsonData.data.token.split("Bearer ")[1];
					localStorage.setItem("token", token);
					break;
				case 401:
					throw new Error(
						"Invalid credentials. Please check your email and password."
					);
				case 404:
					throw new Error("User not found. Please verify the entered email.");
				default:
					throw new Error(
						"Oops! Something went wrong. Please try again later."
					);
			}
		} catch (error: unknown) {
			throw error;
		} finally {
			setIsLoading(false);
		}
	};
	const logout = () => {
		localStorage.removeItem("token");
	};

	return { isLoading, login };
};

export default useAuth;
