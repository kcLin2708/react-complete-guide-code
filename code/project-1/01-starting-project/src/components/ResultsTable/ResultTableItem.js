import React from "react";

const ResultTableItem = (props) => {
  console.log(props.year);
  console.log(props.yearlyInterest);
  console.log(props.yearlyContribution);
  return (
    <tr>
      {/* // <td>YEAR NUMBER</td>
    // <td>TOTAL SAVINGS END OF YEAR</td>
    // <td>INTEREST GAINED IN YEAR</td>
    // <td>TOTAL INTEREST GAINED</td>
    // <td>TOTAL INVESTED CAPITAL</td> */}
      <td>{props.year}</td>
      <td>{props.savingEndOfYear}</td>
      <td>{props.yearlyInterest}</td>
      <td>{props.yearlyContribution}</td>
      <td>{props.yearlyTotalCapital}</td>
    </tr>
  );
};

export default ResultTableItem;
