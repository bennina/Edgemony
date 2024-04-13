import styles from "./index.module.scss";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CakeChart = ({ chartData, cakePercentualArray }) => {
  const length = chartData.length;
  const colorsArray = [...new Array(length)].map(
    (item) => (item = `#${(Math.random() * 16).toString(16).slice(8)}`)
  );

  const data = {
    labels: chartData?.map((item) => item?.id.toUpperCase()),

    datasets: [
      {
        label: "Value €",
        data: cakePercentualArray?.map((item) => item),
        backgroundColor: colorsArray,
      },
    ],
  };

  return (
    <div className={styles.CakeChart}>
      <Pie
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default CakeChart;
