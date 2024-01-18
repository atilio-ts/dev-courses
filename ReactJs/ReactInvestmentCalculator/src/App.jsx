import Header from "./components/Header"  
import UserInput from "./components/UserInput" 
import ResultsTable from "./components/ResultsTable" 

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })

  const isInputValid = userInput.annualInvestment > 0 && 
    userInput.expectedReturn > 0 && 
    userInput.duration >= 1;
  

  return (
    <>
      <Header />
      <UserInput onChange={setUserInput} userInput={userInput}/>
      {!isInputValid ? <p className="center">Please enter valid input</p>:<ResultsTable userInput={userInput}/>}
      
    </>
  )
}

export default App
