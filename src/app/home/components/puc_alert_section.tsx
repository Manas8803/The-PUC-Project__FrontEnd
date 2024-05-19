import { useReportsData } from "@/hooks/reports/useReportData";

interface ReportsProps {
	searchQuery: string;
}

export default function Reports({ searchQuery }: ReportsProps) {
	const { reportsData } = useReportsData();

	const filteredData = reportsData.filter((report: any) =>
		report.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<section>
			{filteredData.map((report: any, index: any) => (
				<div key={index}>{report}</div>
			))}
		</section>
	);
}
