import React from "react";
import styles from "./ResultTable.module.css";
import ResultTableList from "./ResultTableList";

const ResultTable = () => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <ResultTableList />
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
