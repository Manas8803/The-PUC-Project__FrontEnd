import { CardData } from "@/lib/data";
import dropdown_icon from "@/public/dropdown-icon.webp";
import indicator_green from "@/public/indicator-green.webp";
import indicator_red from "@/public/indicator-red.webp";
import Image from "next/image";
import { useState } from "react";
import { m, stagger } from "framer-motion";
export default function AlertCard({
	office_name,
	pucStatus,
	vehicleType,
	validUpto,
	registrationNo,
	vehicleModel,
	vehicleDescription,
	contact,
	pucValidUpto,
}: CardData) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<m.div
			className={`mt-3 w-[83.333%] mx-auto ${
				pucStatus === "Valid"
					? "bg-gradient-to-r from-white to-main"
					: "bg-gradient-to-r from-gr_white to-gr_red"
			} rounded-3xl p-4 shadow-lg text-black duration-600 transition-display ease-in-out transform`}
			whileTap={{ scale: 0.93 }}
			whileHover={{ scale: 1.03 }}
			whileInView={{
				x: [-20, 0],
				transition: { ease: "easeInOut", duration: 0.8 },
			}}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-2">
					<Image
						src={pucStatus === "Valid" ? indicator_green : indicator_red}
						width={10}
						height={10}
						alt="indicator"
					/>
					<p>
						{pucStatus === "Valid"
							? "PUC is valid"
							: "Seems the PUC is outdated!"}
					</p>
				</div>
				<div
					className={`cursor-pointer transform transition duration-500 ease-in-out rounded-lg ${
						isOpen ? "rotate-180" : ""
					}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<Image src={dropdown_icon} alt="dropdown" width={20} height={20} />
				</div>
			</div>
			<h1 className="text-xl font-bold pl-2">{registrationNo}</h1>
			<p className="font-normal pl-2 mb-2">{vehicleModel}</p>
			<div
				className={`overflow-hidden transition-all ease-in-out delay-0 ${
					isOpen ? "max-h-screen duration-1000" : "max-h-0 duration-400"
				}`}
			>
				<div className="pl-2">
					<p className="font-extralight">
						Registration No.: &nbsp;<strong>{registrationNo}</strong>
					</p>
					<p className="font-extralight">
						Vehicle Model: &nbsp;<strong>{vehicleModel}</strong>
					</p>
					<p className="font-extralight">
						Vehicle Description: &nbsp;<strong>{vehicleDescription}</strong>
					</p>
					<p className="font-extralight">
						Vehicle Type: &nbsp;<strong>{vehicleType}</strong>
					</p>
					<p className="font-extralight">
						Contact: &nbsp;<strong>{contact}</strong>
					</p>
					<p className="font-extralight">
						Valid Upto: &nbsp;<strong>{pucValidUpto}</strong>
					</p>
					<p className="font-extralight">
						PUC Valid: &nbsp;<strong>{validUpto}</strong>
					</p>
				</div>
			</div>
		</m.div>
	);
}
