import React from "react";

const ResultTableItem = (props) => {
  console.log(props.year);
  console.log(props.yearlyInterest);
  console.log(props.yearlyContribution);
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.yearlyInterest}</td>
      <td>INTEREST GAINED IN YEAR{props.yearlyInterest}</td>
      <td>TOTAL INTEREST GAINED{props.yearlyInterest}</td>
      <td>TOTAL INVESTED CAPITAL{props.yearlyContribution}</td>
    </tr>
  );
};

export default ResultTableItem;
