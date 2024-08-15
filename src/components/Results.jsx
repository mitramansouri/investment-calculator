import {calculateInvestmentResults} from '../util/investment.js';


export default function Results({logInput}){
    const resultsData = calculateInvestmentResults(logInput);
    console.log(resultsData);
    return (
        <div>
            
        </div>
    );
}