import React, { useState } from "react";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/UserInput/InvestmentForm";
import ResultTable from "./components/ResultsTable/ResultTable";

let emptyData = [];

function App() {
  const [results, setResults] = useState(emptyData);

  const calculateHandler = (userInput) => {
    console.log(userInput);

    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInvestCapital = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInvestCapital += currentSavings;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalCapital: totalInvestCapital,
      });
    }
    console.log("Yearly result: ", yearlyData);
    // do something with yearlyData ...
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onSaveData={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultTable results={results} />
    </div>
  );
}

export default App;
