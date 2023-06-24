import React from "react";
import styles from "./ResultTable.module.css";
import ResultTableList from "./ResultTableList";

const ResultTable = (props) => {
  console.log("ResultTable.js");
  console.log(props);
  console.log(props["results"]);
  return (
    <div>
      <table className="result">
        <thead className={styles["thead"]}>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody className={styles["tbody"]}>
          <ResultTableList items={props} />
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
