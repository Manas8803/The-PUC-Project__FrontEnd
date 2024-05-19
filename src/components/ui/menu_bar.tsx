"use client";
import Image from "next/image";
import home_icon from "@/public/home-icon.svg";
import home_icon_active from "@/public/home-icon-active.svg";
import dashboard_icon from "@/public/dashboard-icon.svg";
import dashboard_icon_active from "@/public/dashboard-icon-active.svg";
import report_icon from "@/public/report-icon.png";
import report_icon_active from "@/public/report-icon-active.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useWindowSize from "@/hooks/window_size/useWindowSize";

export default function MenuBar() {
	const currentRoute = usePathname();
	const { width } = useWindowSize();
	const imgSize = width ? (1 / 12) * width : 40;

	return (
		<div className="bg-white w-full flex justify-around min-h-[10svh] rounded-t-[2.3rem] items-center shadow-[0px_-7px_15px_3px_rgba(0,0,0,0.08)] fixed bottom-0 py-3">
			<div className="nav-item flex flex-col items-center">
				<Link href={"/home"}>
					<Image
						width={imgSize}
						src={currentRoute === "/home" ? home_icon_active : home_icon}
						alt="home-icon"
					/>
				</Link>
				<p className="m-0 p-0 text-center">Home</p>
			</div>
			<div className="nav-item flex flex-col items-center">
				<Link href={"/dashboard"}>
					<Image
						width={imgSize}
						src={
							currentRoute === "/dashboard"
								? dashboard_icon_active
								: dashboard_icon
						}
						alt="dashboard-icon"
					/>
				</Link>
				<p className="m-0 p-0 text-center">Dashboard</p>
			</div>
			<div className="nav-item flex flex-col items-center">
				<Link href={"/reports"}>
					<Image
						width={imgSize}
						src={currentRoute === "/reports" ? report_icon_active : report_icon}
						alt="report-icon"
					/>
				</Link>
				<p className="m-0 p-0 text-center">Reports</p>
			</div>
		</div>
	);
}
