"use client";
import { useEffect, useState } from "react";
import { CardData, cardData } from "@/lib/data";
export const useReportsData = () => {
	const [officeName, setOfficeName] = useState<string | null>(null);
	const [reportsData, setReportsData] = useState<CardData[]>(cardData);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setOfficeName(localStorage.getItem("officeName"));
		}
		const connectWebSocket = () => {
			try {
				const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL;
				const socket = new WebSocket(`${socketUrl}${officeName}`);

				socket.addEventListener("open", () => {
					console.log("WebSocket connection established");
				});

				socket.addEventListener("message", (event) => {
					console.log("A MESSAGE IS RECEIVED: ", JSON.parse(event.data));
					setReportsData((prevData) => [...prevData, JSON.parse(event.data)]);
				});

				socket.addEventListener("error", (error) => {
					console.error("WebSocket error:", error);
				});
			} catch (error) {
				// console.log("Error connecting to WebSocket:", error);
			}
		};

		connectWebSocket();
	}, [officeName]);

	return { reportsData };
};
