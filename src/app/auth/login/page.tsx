"use client";
import { useToast } from "@/components/ui/use-toast";
import useLogin from "@/hooks/login/useLogin";
import logo from "@/public/Brand.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
	//* States
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isLoading, login } = useLogin();

	//* Router
	const router = useRouter();

	//* Toast
	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			console.log(email, password);

			await login(email, password);
			router.push("/");
		} catch (error: unknown) {
			if (error instanceof Error) {
				toast({
					variant: "destructive",
					description: error.message,
				});
			} else {
				alert("An unknown error occurred");
			}
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="max-w-md mx-auto bg-white p-8 shadow-md">
				<div className="mb-6">
					<Image
						src={logo}
						width={139}
						height={90}
						alt="The PUC project"
						className="mx-auto"
					/>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-700 font-bold mb-2"
						>
							Username
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-gray-700 font-bold mb-2"
						>
							Password
						</label>
						<input
							type="password"
							value={password}
							placeholder="Enter your password"
							onChange={(e) => setPassword(e.target.value)}
							className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="flex justify-center">
						<button
							type="submit"
							disabled={isLoading}
							className="bg-green-500 hover:bg-blue-700 text-white font-bold border rounded-2xl w-full py-2 px-4 focus:outline-none focus:shadow-outline"
						>
							{isLoading ? "Logging in..." : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
