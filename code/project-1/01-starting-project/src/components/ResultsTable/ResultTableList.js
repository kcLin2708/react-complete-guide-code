import React from "react";
import ResultTableItem from "./ResultTableItem";

const ResultTableList = (props) => {
  console.log("ResultTableList");
  console.log(props.resultsList);
  return (
    <>
      {props.items["results"].map((item) => (
        <ResultTableItem
          key={Math.random().toString()}
          year={item["year"]}
          yearlyInterest={item["yearlyInterest"]}
          savingEndOfYear={item["savingsEndOfYear"]}
          yearlyContribution={item["yearlyContribution"]}
          yearlyTotalCapital={item["totalCapital"]}
        />
      ))}
    </>
  );
};

export default ResultTableList;
