import React,{useState} from 'react';

import Header from './components/Header';
import InvestmentForm from './components/InvestmentForm';
import ResultTable from './components/ResultTable';

function App() {

  const [results,setResults]=useState(null);

  const calculateHandler = (currentSavingsIp,yearlySavings,expectedInterest,investmentDuration) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +currentSavingsIp; // feel free to change the shape of this input object!
    const yearlyContribution = +yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +expectedInterest / 100;
    const duration = +investmentDuration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        initialInvestment:currentSavingsIp
      });
    }

    setResults(yearlyData);

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header></Header>
      <InvestmentForm onCalculate={calculateHandler}></InvestmentForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {results===null && <p style={{textAlign:'center'}}>No investment calculated yet</p>}
      {results!==null && <ResultTable resultsData={results}></ResultTable>}
    </div>
  );
}

export default App;
