import React from "react";
import classes from "./GraphDetails.module.scss";
import { Doughnut } from "react-chartjs-2";
import CountUp from "react-countup";
import useTransactions from "../../hooks/useTransactions";
const GraphDetails = ({ title }) => {
  const { totalAmount, chartData } = useTransactions(title);
  return (
    <div className={classes[title]}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <CountUp end={totalAmount} duration={1.5} separator="," suffix=" Kn" />{" "}
      </div>
      <div className={classes.chartWrapper}>
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default GraphDetails;
