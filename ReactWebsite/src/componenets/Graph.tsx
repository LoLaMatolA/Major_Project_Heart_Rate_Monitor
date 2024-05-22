import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

// Define the shape of the pulse data
interface Props {
  pulseData: { pulse: string; date: string }[];
}

const Graph = ({ pulseData }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: pulseData.map((row) => new Date(row.date).toLocaleString()),
        datasets: [
          {
            label: "Pulse",

            data: pulseData.map((row) => Number(row.pulse)),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, [pulseData]); // Empty dependency array ensures this runs only once after initial render
  console.log(pulseData);
  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Graph;
