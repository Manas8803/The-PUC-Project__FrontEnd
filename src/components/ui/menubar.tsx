import Image from "next/image";
import home_icon from "@/public/home.svg";
import dashboard_icon from "@/public/dashboard-icon.svg";
import report_icon from "@/public/report-icon.svg";
import Link from "next/link";

export default function MenuBar() {
	return (
		<div className="bg-white w-full flex justify-around min-h-[10svh] rounded-t-[2.3rem] items-center shadow-[0px_-7px_15px_3px_rgba(0,0,0,0.08)] fixed bottom-0 py-3">
			<div className="nav-item flex flex-col items-center">
				<Link href={"/home"}>
					<Image width={40} src={home_icon} alt="home-icon" />
				</Link>
				<p className="m-0 p-0 text-center">Home</p>
			</div>
			<div className="nav-item flex flex-col items-center">
				<Link href={"#"}>
					<Image width={40} src={dashboard_icon} alt="dashboard-icon" />
				</Link>
				<p className="m-0 p-0 text-center">Dashboard</p>
			</div>
			<div className="nav-item flex flex-col items-center">
				<Link href={"#"}>
					<Image width={40} src={report_icon} alt="report-icon" />
				</Link>
				<p className="m-0 p-0 text-center">Reports</p>
			</div>
		</div>
	);
}
