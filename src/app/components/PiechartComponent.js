'use client'
import { useEffect, useRef } from 'react';
import { Chart, PieController, CategoryScale, ArcElement } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(PieController, CategoryScale, ArcElement);

const PieChartComponent = ({ data, labels }) => {
    const chartContainer = useRef(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chart(chartContainer.current, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# of Votes',
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
            });

            return () => {
                newChartInstance.destroy();
            };
        }
    }, [chartContainer]);

    return (
        <canvas ref={chartContainer} />
    );
}

export default PieChartComponent;