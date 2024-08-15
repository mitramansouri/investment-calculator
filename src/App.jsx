import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState

 } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 12000,
    expectedReturn: 5,
    duration: 10,
});
function handleChange(inputIdentifier, newValue) {
  setUserInput(
      previousUserInput => {
          return {
              ...previousUserInput,
              [inputIdentifier]: +newValue,
          };
      }
  );
}
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    <Results logInput={userInput}/>
    </>
  );
}

export default App
