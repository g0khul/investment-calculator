import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const isInputValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(previousValue => {
      return {
        ...previousValue,
        [inputIdentifier]: +newValue
      }
    });
  }

  return <>
    <Header />
    <UserInput userInput={userInput} onSubmit={handleChange} />
    {
      isInputValid ?
        <Results userInput={userInput} /> :
        <div className="center">Please enter a duration greater than zero</div>
    }
  </>
}

export default App
