"use client";
import { useEffect, useState } from "react";

export const useReportsData = () => {
	const [officeName, setOfficeName] = useState<string | null>(null)
	const [reportsData, setReportsData] = useState<string[]>([]);
	
	useEffect(() => {
		if (typeof window !== "undefined") { 
			setOfficeName(localStorage.getItem('officeName'))
			return
		}
		let socket: WebSocket | null = null;

		const connectWebSocket = () => {
			try {
				socket = new WebSocket(
					`wss://8igcbtgefa.execute-api.ap-south-1.amazonaws.com/prod?office_name=${officeName}`
				);

				socket.addEventListener("open", () => {
					console.log("WebSocket connection established");
				});

				socket.addEventListener("message", (event) => {
					console.log("A MESSAGE IS RECEIVED: ", event.data);
					setReportsData((prevData) => [...prevData, event.data]);
				});

				socket.addEventListener("error", (error) => {
					console.error("WebSocket error:", error);
				});
			} catch (error) {
				console.error("Error connecting to WebSocket:", error);
			}
		};

		connectWebSocket();
	}, [officeName]);

	return { reportsData };
};
